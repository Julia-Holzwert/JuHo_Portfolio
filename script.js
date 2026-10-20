/* GLOBAL SETTINGS */
const DEBUG = false;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lenis = null;

function debugLog(...args) {
  if (DEBUG) console.log(...args);
}

function warnLog(...args) {
  if (DEBUG) console.warn(...args);
}

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function getBasePath() {
  return window.location.pathname.includes("/projectSites/") ? "../" : "";
}

function isExternalPath(path) {
  return /^(https?:|mailto:|tel:|data:|blob:|#)/i.test(String(path || ""));
}

function normalizePath(path, base = getBasePath()) {
  if (!path) return "";

  const value = String(path).trim();
  if (!value || isExternalPath(value) || value.startsWith("../") || value.startsWith("/")) return value;

  if (value.startsWith("./")) return `${base}${value.slice(2)}`;
  return value;
}

function normalizeSlug(value) {
  return safeText(value).trim().toLowerCase();
}

function isBlank(value) {
  return value === undefined || value === null || String(value).trim() === "";
}

function safeText(value) {
  return value === undefined || value === null ? "" : String(value);
}

function getProjectCategoryText(project) {
  return (
    project.cardCategory ||
    project.archiveCategoryText ||
    project.categoryLabel ||
    project.category ||
    (project.categories || []).join(" · ")
  );
}

function getProjectYear(project) {
  if (!project) return "";
  if (!isBlank(project.year)) return safeText(project.year).trim();
  if (!isBlank(project.archiveYear)) return safeText(project.archiveYear).trim();

  const meta = safeText(project.detail && project.detail.meta);
  const match = meta.match(/\b(20\d{2})\b/);
  return match ? match[1] : "";
}

function normalizeProjectType(value) {
  const cleanValue = safeText(value).trim().toLowerCase();

  if (["group", "group project", "group-project", "team", "team project"].includes(cleanValue)) return "Team Project";
  if (["private", "private project", "solo", "solo project", "independent", "independent project", "independent concept"].includes(cleanValue)) return "Independent Project";

  return "";
}

function getProjectLevel(project) {
  if (!project) return "Independent Project";

  const explicitType = normalizeProjectType(project.level || project.archiveLevel || project.type || project.projectLevel || project.archiveType);
  if (explicitType) return explicitType;

  const categories = project.categories || [];
  if (categories.includes("Group-Project") || categories.includes("Group Project") || categories.includes("Team Project")) return "Team Project";

  const meta = safeText(project.detail && project.detail.meta).toLowerCase();
  if (meta.includes("group project") || meta.includes("team project")) return "Team Project";

  return "Independent Project";
}

function getProjectPreviewSrc(project, base = getBasePath()) {
  const detail = project.detail || {};

  const firstEditorialImage = Array.isArray(detail.editorialArtDirectedCaseStudyImages)
    ? detail.editorialArtDirectedCaseStudyImages.find(image => image && !isBlank(image.src))
    : null;

  const preview =
    (firstEditorialImage && firstEditorialImage.src) ||
    project.previewImage ||
    project.archivePreview ||
    project.coverBannerImage ||
    project.coverImage ||
    "";

  return normalizePath(preview, base);
}

function getProjectTagList(project) {
  const values = [
    getProjectYear(project),
    getProjectLevel(project),
    ...(project.categories || []).filter(category => category !== "Group-Project").slice(0, 2)
  ];

  return Array.from(new Set(values.map(value => safeText(value).trim()).filter(Boolean)));
}


function getProjectHeaderTags(project) {
  return Array.from(
    new Set(
      (project.categories || [])
        .map(value => safeText(value).trim())
        .filter(value => value && value !== "Group-Project" && value !== "Group Project")
    )
  ).slice(0, 4);
}

function getProjectDuration(project) {
  const detail = project.detail || {};
  const explicitDuration = detail.duration || project.duration;
  if (!isBlank(explicitDuration)) return safeText(explicitDuration).trim();

  const meta = safeText(detail.meta);
  const match = meta.match(/\b(?:for|over)\s+(\d+(?:[.,]\d+)?\s*(?:days?|weeks?|months?|years?))\b/i)
    || meta.match(/\b(\d+(?:[.,]\d+)?\s*(?:days?|weeks?|months?|years?))\b/i);

  return match ? match[1].trim() : "";
}

function getProjectMetaItems(project) {
  const detail = project.detail || {};
  const structuredMeta = detail.metaItems || project.metaItems;
  const items = [];

  function formatValue(value) {
    if (Array.isArray(value)) {
      return value.map(item => safeText(item).trim()).filter(Boolean).join(", ");
    }
    return safeText(value).trim();
  }

  function addItem(label, value) {
    const cleanLabel = safeText(label).trim();
    const cleanValue = formatValue(value);
    if (!cleanLabel || !cleanValue) return;

    const duplicate = items.some(item => item.label === cleanLabel && item.value === cleanValue);
    if (!duplicate) items.push({ label: cleanLabel, value: cleanValue });
  }

  if (Array.isArray(structuredMeta)) {
    structuredMeta.forEach(item => {
      if (item && typeof item === "object") addItem(item.label || item.name, item.value || item.text);
    });
  } else if (structuredMeta && typeof structuredMeta === "object") {
    Object.entries(structuredMeta).forEach(([label, value]) => addItem(label, value));
  }

  if (!items.length) {
    addItem("Year", getProjectYear(project));
    addItem("Type", getProjectLevel(project));
    addItem("Duration", getProjectDuration(project));
    addItem("Role", detail.role || project.role);
    addItem("Team", detail.team || project.team);
    addItem("Methods", detail.methods || project.methods);
    addItem("Ownership", detail.ownership || project.ownership);
  }

  if (!items.length && !isBlank(detail.meta)) addItem("Project", detail.meta);
  return items;
}

function getProjectCoverScale(project) {
  const explicitScale = Number(project.coverScale || project.introCoverScale);
  if (Number.isFinite(explicitScale) && explicitScale > 0) return explicitScale;

  const coverZoom = Number(project.coverZoom);
  if (Number.isFinite(coverZoom) && coverZoom !== 0) return Math.max(0.1, 1 + coverZoom / 100);

  const imageScale = Number(project.imageScale);
  if (Number.isFinite(imageScale) && imageScale > 0) return imageScale;

  if (Number.isFinite(coverZoom)) return 1;
  return 1;
}

function getUniqueProjectValues(projects, getter) {
  const values = [];

  projects.forEach(project => {
    const result = getter(project);
    const list = Array.isArray(result) ? result : [result];

    list.forEach(value => {
      const cleanValue = safeText(value).trim();
      if (cleanValue && !values.includes(cleanValue)) values.push(cleanValue);
    });
  });

  return values;
}

function createFilterButton(label, group, value) {
  const button = document.createElement("button");
  button.className = "filter-btn";
  button.type = "button";
  button.dataset.filterGroup = group;
  button.dataset.filterValue = value;
  button.dataset.filter = value;
  button.textContent = label;
  return button;
}

function appendArchiveFilterGroup(root, label, group, values, allLabel = "All") {
  if (!root || !values.length) return;

  const block = document.createElement("div");
  block.className = `archive-filter-group archive-filter-group-${group}`;

  const heading = document.createElement("p");
  heading.className = "archive-filter-label";
  heading.textContent = label;

  const list = document.createElement("div");
  list.className = "archive-filter-options";
  list.appendChild(createFilterButton(allLabel, group, "all"));

  values.forEach(value => {
    list.appendChild(createFilterButton(value, group, value));
  });

  block.appendChild(heading);
  block.appendChild(list);
  root.appendChild(block);
}

function appendArchiveYearToggle(root) {
  if (!root) return;

  const block = document.createElement("div");
  block.className = "archive-filter-group archive-filter-group-year archive-year-group";

  const heading = document.createElement("p");
  heading.className = "archive-filter-label";
  heading.textContent = "Year";

  const toggle = document.createElement("div");
  toggle.className = "archive-year-toggle";
  toggle.dataset.yearState = "newest";

  const newestButton = document.createElement("button");
  newestButton.className = "archive-year-option archive-year-option-newest";
  newestButton.type = "button";
  newestButton.dataset.yearSortChoice = "newest";
  newestButton.textContent = "Newest";

  const switchButton = document.createElement("button");
  switchButton.className = "archive-year-switch";
  switchButton.type = "button";
  switchButton.dataset.yearSortToggle = "";
  switchButton.setAttribute("aria-label", "Switch between newest and oldest projects");
  switchButton.setAttribute("aria-pressed", "false");
  switchButton.innerHTML = '<span class="archive-year-knob" aria-hidden="true"></span>';

  const oldestButton = document.createElement("button");
  oldestButton.className = "archive-year-option archive-year-option-oldest";
  oldestButton.type = "button";
  oldestButton.dataset.yearSortChoice = "oldest";
  oldestButton.textContent = "Oldest";

  toggle.appendChild(newestButton);
  toggle.appendChild(switchButton);
  toggle.appendChild(oldestButton);

  block.appendChild(heading);
  block.appendChild(toggle);
  root.appendChild(block);
}

function renderArchiveFilters(projects) {
  let filterSection = document.getElementById("filters") || qs(".filter-section");
  const projectsGrid = document.getElementById("projectsGrid");

  if (!filterSection && projectsGrid) {
    filterSection = document.createElement("section");
    filterSection.className = "filter-section";
    filterSection.id = "filters";
    const projectsSection = projectsGrid.closest(".projects-section");
    if (projectsSection) projectsSection.insertAdjacentElement("beforebegin", filterSection);
  }

  if (!filterSection) return;

  filterSection.id = "filters";
  filterSection.classList.add("archive-filter-panel");
  removeChildren(filterSection);

  const inner = document.createElement("div");
  inner.className = "archive-filter-inner";

  const reset = document.createElement("button");
  reset.id = "showAllBtn";
  reset.className = "filter-btn archive-reset-btn";
  reset.type = "button";
  reset.textContent = "All Projects";

  const categories = getUniqueProjectValues(projects, project => project.categories || []).filter(category => category !== "Group-Project").sort((a, b) => a.localeCompare(b));
  inner.appendChild(reset);
  appendArchiveYearToggle(inner);
  appendArchiveFilterGroup(inner, "Discipline", "category", categories, "All disciplines");
  appendArchiveTypeToggle(inner);

  filterSection.appendChild(inner);
}

function appendArchiveTypeToggle(root) {
  if (!root) return;

  const block = document.createElement("div");
  block.className = "archive-filter-group archive-filter-group-level archive-type-group";

  const heading = document.createElement("p");
  heading.className = "archive-filter-label";
  heading.textContent = "Project Type";

  const toggle = document.createElement("div");
  toggle.className = "archive-type-toggle";
  toggle.dataset.typeState = "all";

  const independentButton = document.createElement("button");
  independentButton.className = "archive-type-option archive-type-option-independent";
  independentButton.type = "button";
  independentButton.dataset.filterGroup = "level";
  independentButton.dataset.filterValue = "Independent Project";
  independentButton.dataset.filter = "Independent Project";
  independentButton.textContent = "Independent";

  const switchButton = document.createElement("button");
  switchButton.className = "archive-type-switch";
  switchButton.type = "button";
  switchButton.dataset.typeToggle = "";
  switchButton.setAttribute("aria-label", "Switch between independent and team projects");
  switchButton.setAttribute("aria-pressed", "false");
  switchButton.innerHTML = '<span class="archive-type-knob" aria-hidden="true"></span>';

  const teamButton = document.createElement("button");
  teamButton.className = "archive-type-option archive-type-option-team";
  teamButton.type = "button";
  teamButton.dataset.filterGroup = "level";
  teamButton.dataset.filterValue = "Team Project";
  teamButton.dataset.filter = "Team Project";
  teamButton.textContent = "Team";

  toggle.appendChild(independentButton);
  toggle.appendChild(switchButton);
  toggle.appendChild(teamButton);

  block.appendChild(heading);
  block.appendChild(toggle);
  root.appendChild(block);
}

function setupArchivePageLayout() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  const projectsSection = projectsGrid.closest(".projects-section") || qs(".projects-section");
  if (!projectsSection) return;

  let filterSection = document.getElementById("filters") || qs(".filter-section");

  if (!filterSection) {
    filterSection = document.createElement("section");
    filterSection.className = "filter-section";
    filterSection.id = "filters";
    projectsSection.insertAdjacentElement("beforebegin", filterSection);
  }

  if (filterSection.closest(".archive-layout") || projectsSection.closest(".archive-layout")) return;

  const shell = document.createElement("div");
  shell.className = "archive-shell";

  const layout = document.createElement("div");
  layout.className = "archive-layout";

  filterSection.parentNode.insertBefore(shell, filterSection);
  shell.appendChild(layout);
  layout.appendChild(filterSection);
  layout.appendChild(projectsSection);
}

function getProjectImageSrc(project, base = getBasePath()) {
  const image = project.archiveImage || project.thumbnail || project.cardImage || project.coverImage || project.coverBannerImage || "";
  return normalizePath(image, base);
}

function getProjectCardBg(project) {
  return project.backgroundColor || project.cardBackgroundColor || project.coverBackgroundColor || "#F5F3FF";
}

function getProjectCoverBg(project) {
  return project.coverBackgroundColor || project.backgroundColor || project.cardBackgroundColor || "var(--bg-soft)";
}

function removeChildren(el) {
  if (!el) return;
  while (el.firstChild) el.removeChild(el.firstChild);
}

function setCssVar(el, name, value) {
  if (el && value !== undefined && value !== null) {
    el.style.setProperty(name, String(value));
  }
}

function setGlobalProjectBackground(background) {
  document.documentElement.style.setProperty("--projects-page-bg", "var(--bg-main)");
  document.documentElement.style.setProperty("--project-page-bg", "var(--bg-main)");
}

function debounce(fn, delay = 160) {
  let timeout = null;

  return (...args) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(...args), delay);
  };
}

/* FOOTER */
function loadFooter() {
  if (qs(".footer-section")) return;

  const base = getBasePath();
  const footer = document.createElement("footer");
  footer.className = "footer-section";

  const particles = document.createElement("div");
  particles.className = "gooey-animations";
  particles.id = "particle-container";
  particles.setAttribute("aria-hidden", "true");

  const content = document.createElement("div");
  content.className = "footer-content";

  const availability = document.createElement("p");
  availability.className = "footer-availability";
  availability.textContent = "Available for internships, junior roles and collaborations.";

  const links = document.createElement("nav");
  links.className = "footer-links";
  links.setAttribute("aria-label", "Footer links");
  links.innerHTML = `
    <a href="mailto:julia.h.great@gmail.com">Contact</a>
    <a href="https://www.linkedin.com/in/julia-holzwert/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="${base}Lebenslauf%20-%2020.10.pdf" target="_blank" rel="noopener noreferrer">CV</a>
    <a href="#top" data-footer-top>Back to top</a>
  `;

  const text = document.createElement("p");
  text.className = "footer-text";
  text.innerHTML = "© 2026 Julia Holzwert<br>Content may not be used to train generative AI systems without explicit permission.";

  links.querySelector("[data-footer-top]")?.addEventListener("click", event => {
    event.preventDefault();
    if (lenis && !prefersReducedMotion) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });

  content.appendChild(availability);
  content.appendChild(links);
  content.appendChild(text);
  footer.appendChild(particles);
  footer.appendChild(content);
  document.body.appendChild(footer);
}

/* NAVBAR */
function loadNavbar() {
  if (qs(".navbar")) return;

  const base = getBasePath();
  const template = document.createElement("template");

  template.innerHTML = `
    <header class="navbar">
      <div class="nav-wrapper">
        <nav class="nav-left" aria-label="Primary navigation">
          <a href="${base}index.html">Home</a>
          <a href="${base}projects.html">Works</a>
          
        </nav>

        <div class="nav-center"></div>

        <nav class="nav-right" aria-label="Profile links and theme">
          <a href="${base}Lebenslauf%20-%2020.10.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="https://www.linkedin.com/in/julia-holzwert/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:julia.h.great@gmail.com">Contact</a>

          <div class="theme-toggle">
            <input type="checkbox" id="darkmode-toggle" aria-label="Use dark mode" />
            <label for="darkmode-toggle" class="toggle-label" aria-hidden="true">
              <svg class="sun" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="8" cy="8" r="8" />
              </svg>

              <svg class="moon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
              </svg>
            </label>
          </div>
        </nav>

        <button class="burger" id="burger" type="button" aria-label="Open navigation" aria-controls="mobileMenuFull" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <div class="mobile-menu-full" id="mobileMenuFull" role="dialog" aria-modal="true" aria-label="Site navigation" aria-hidden="true">
      <button class="menu-close" id="menuClose" type="button" aria-label="Close navigation">×</button>
      <nav class="menu-block menu-top" aria-label="Mobile navigation">
        <a href="${base}index.html">Home</a>
        <a href="${base}projects.html">Works</a>
        
      </nav>
      <div class="menu-separator" aria-hidden="true"></div>
      <nav class="menu-block" aria-label="Mobile profile links">
        <a href="${base}Lebenslauf%20-%2020.10.pdf" target="_blank" rel="noopener noreferrer">CV</a>
        <a href="https://www.linkedin.com/in/julia-holzwert/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:julia.h.great@gmail.com">Contact</a>
      </nav>
    </div>
  `;

  document.body.insertBefore(template.content, document.body.firstChild);
}

function setActiveNav() {
  let current = window.location.pathname.split("/").pop();
  if (!current || current === "/") current = "index.html";

  qsa(".nav-left a, .menu-top a").forEach(link => {
    const href = link.getAttribute("href") || "";
    const cleanHref = href.split("/").pop();
    link.classList.toggle("active", cleanHref === current);
  });
}

function initThemeToggle() {
  const darkmodeToggle = document.getElementById("darkmode-toggle");
  if (!darkmodeToggle) return;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("darkmode");
    darkmodeToggle.checked = true;
  }

  darkmodeToggle.addEventListener("change", () => {
    const isDark = darkmodeToggle.checked;
    document.body.classList.toggle("darkmode", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

function initNavbarScrollState() {
  const navbar = qs(".navbar");
  const toTop = qs("#toTop");
  if (!navbar && !toTop) return;

  function update() {
    const scrollY = window.scrollY;

    if (navbar) navbar.classList.toggle("scrolled", scrollY > 50);
    if (toTop) toTop.classList.toggle("show", scrollY > 300);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function initMobileMenu() {
  const burger = document.getElementById("burger");
  const mobileMenuFull = document.getElementById("mobileMenuFull");
  const menuClose = document.getElementById("menuClose");

  if (!burger || !mobileMenuFull || !menuClose) return;

  const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

  function getFocusableItems() {
    return qsa(focusableSelector, mobileMenuFull).filter(item => !item.hidden && item.offsetParent !== null);
  }

  function openMenu() {
    mobileMenuFull.classList.add("open");
    mobileMenuFull.setAttribute("aria-hidden", "false");
    burger.setAttribute("aria-expanded", "true");
    document.body.classList.add("is-mobile-menu-open");
    menuClose.focus();
  }

  function closeMenu({ restoreFocus = true } = {}) {
    mobileMenuFull.classList.remove("open");
    mobileMenuFull.setAttribute("aria-hidden", "true");
    burger.setAttribute("aria-expanded", "false");
    document.body.classList.remove("is-mobile-menu-open");
    if (restoreFocus) burger.focus();
  }

  burger.addEventListener("click", openMenu);
  menuClose.addEventListener("click", () => closeMenu());

  qsa("a", mobileMenuFull).forEach(link => {
    link.addEventListener("click", () => closeMenu({ restoreFocus: false }));
  });

  document.addEventListener("keydown", event => {
    if (!mobileMenuFull.classList.contains("open")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab") return;
    const focusable = getFocusableItems();
    if (!focusable.length) {
      event.preventDefault();
      menuClose.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

/* PROJECT CARDS */
function createProjectCard(project, base = getBasePath()) {
  const titleText = safeText(project.title).trim();
  const categories = project.categories || [];
  const year = getProjectYear(project);
  const level = getProjectLevel(project);
  const imageSrc = getProjectImageSrc(project, base);
  const previewSrc = getProjectPreviewSrc(project, base);

  const item = document.createElement("div");
  item.className = "project-item";
  item.dataset.category = categories.join("|");
  item.dataset.year = year;
  item.dataset.level = level;
  item.dataset.slug = safeText(project.slug);
  item.dataset.preview = previewSrc;
  item.dataset.title = titleText;

  const link = document.createElement("a");
  link.className = "project-link";
  link.href = normalizePath(project.href || "#", base);
  link.setAttribute("aria-label", `View ${titleText} case study`);

  const card = document.createElement("article");
  card.className = "project-card archive-card";

  setCssVar(card, "--project-card-bg", getProjectCardBg(project));
  setCssVar(card, "--project-card-bg-dark", project.cardDarkBackgroundColor || project.darkBackgroundColor || getProjectCardBg(project));
  setCssVar(card, "--project-image-scale", project.imageScale || project.logoScale || 1);
  setCssVar(card, "--project-image-x", project.imageX || "0px");
  setCssVar(card, "--project-image-y", project.imageY || "0px");

  const media = document.createElement("div");
  media.className = "project-card-media";

  if (imageSrc) {
    const img = document.createElement("img");
    img.className = "project-card-img";
    img.src = imageSrc;
    img.alt = `${titleText} project preview`;
    img.loading = "lazy";
    img.decoding = "async";
    img.draggable = false;
    media.appendChild(img);
  } else {
    card.classList.add("project-card--no-image");
    const placeholder = document.createElement("span");
    placeholder.className = "project-card-placeholder";
    placeholder.textContent = titleText.slice(0, 2).toUpperCase();
    media.appendChild(placeholder);
  }

  const info = document.createElement("div");
  info.className = "project-card-info";

  const titleRow = document.createElement("div");
  titleRow.className = "project-card-title-row";

  const title = document.createElement("h3");
  title.className = "project-card-title";
  title.textContent = titleText;

  const action = document.createElement("span");
  action.className = "project-card-action";
  action.setAttribute("aria-hidden", "true");
  action.textContent = "View case →";

  titleRow.appendChild(title);
  titleRow.appendChild(action);

  const tags = document.createElement("div");
  tags.className = "project-card-tags";

  getProjectTagList(project).forEach(value => {
    const tag = document.createElement("span");
    tag.className = "project-card-tag";
    tag.textContent = value;
    tags.appendChild(tag);
  });

  const category = document.createElement("p");
  category.className = "project-card-category";
  category.textContent = getProjectCategoryText(project);

  info.appendChild(titleRow);
  info.appendChild(tags);
  info.appendChild(category);
  card.appendChild(media);
  card.appendChild(info);
  link.appendChild(card);
  item.appendChild(link);

  return item;
}

function getRenderableProjects() {
  if (typeof projectsData === "undefined" || !projectsData.projects) return [];
  return projectsData.projects.filter(project => !project.hidden && !project.isDraft);
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return false;

  const projects = getRenderableProjects();
  if (!projects.length) {
    warnLog("projectsData is not loaded or has no renderable projects");
    return false;
  }

  renderArchiveFilters(projects);
  removeChildren(grid);
  const base = getBasePath();
  const fragment = document.createDocumentFragment();

  projects.forEach(project => {
    fragment.appendChild(createProjectCard(project, base));
  });

  grid.appendChild(fragment);
  return true;
}

function renderOtherProjects() {
  const grid = document.getElementById("otherProjectsGrid");
  if (!grid) return;

  const currentSlug = document.body.dataset.projectSlug;
  if (!currentSlug) return;

  const projects = getRenderableProjects();
  if (!projects.length) {
    warnLog("projectsData is not loaded or has no renderable projects");
    return;
  }

  const currentProject = projects.find(project => normalizeSlug(project.slug) === normalizeSlug(currentSlug));
  if (!currentProject) return;

  const currentCategories = currentProject.categories || [];
  const base = getBasePath();
  const priority = new Map([
    ["headsup", 1],
    ["dbnavigatorredesign", 2],
    ["spatialto-do", 3],
    ["bodique", 4],
    ["campustalk", 5]
  ]);

  const candidates = projects
    .filter(project => normalizeSlug(project.slug) !== normalizeSlug(currentSlug))
    .map((project, index) => ({ project, index }));

  const sameCategory = candidates
    .filter(({ project }) => (project.categories || []).some(category => currentCategories.includes(category)))
    .sort((a, b) => a.index - b.index);

  const rankedCurrent = candidates
    .slice()
    .sort((a, b) => {
      const rankA = priority.get(normalizeSlug(a.project.slug)) || 99;
      const rankB = priority.get(normalizeSlug(b.project.slug)) || 99;
      if (rankA !== rankB) return rankA - rankB;
      const yearDiff = Number(getProjectYear(b.project) || 0) - Number(getProjectYear(a.project) || 0);
      return yearDiff || a.index - b.index;
    });

  const differentCategory = rankedCurrent.filter(({ project }) =>
    !(project.categories || []).some(category => currentCategories.includes(category))
  );

  const selectedProjects = [];
  const selectedSlugs = new Set();

  function addProject(project) {
    if (!project || selectedProjects.length >= 4) return;
    const slug = normalizeSlug(project.slug);
    if (selectedSlugs.has(slug)) return;
    selectedSlugs.add(slug);
    selectedProjects.push(project);
  }

  sameCategory.slice(0, 2).forEach(({ project }) => addProject(project));
  rankedCurrent.forEach(({ project }) => {
    if (selectedProjects.length < 3) addProject(project);
  });
  differentCategory.forEach(({ project }) => addProject(project));
  rankedCurrent.forEach(({ project }) => addProject(project));

  removeChildren(grid);
  const fragment = document.createDocumentFragment();
  selectedProjects.slice(0, 4).forEach(project => fragment.appendChild(createProjectCard(project, base)));
  grid.appendChild(fragment);
}



/* PROJECT DETAIL */
function renderProjectDetail() {
  const slug = document.body.dataset.projectSlug;
  if (!slug) return;

  const projects = getRenderableProjects();
  if (!projects.length) {
    warnLog("projectsData is not loaded or has no renderable projects");
    return;
  }

  const project = projects.find(p => normalizeSlug(p.slug) === normalizeSlug(slug));
  if (!project || !project.detail) return;

  document.body.dataset.currentProject = safeText(project.title);
  document.body.dataset.currentFilters = (project.categories || []).join("|");

  ensureProjectIntroComposition();
  renderProjectHeader(project);
  renderProjectCover(project);
  renderProjectViewToggle(project);

  const mode = getProjectViewMode(project);
  renderProjectViewMode(project, mode);
}
function hasEditorialProject(project) {
  return Boolean(project && getEditorialConfig(project));
}

function isDbEditorialProject(project) {
  return hasEditorialProject(project);
}

function getProjectViewMode(project) {
  if (!isDbEditorialProject(project)) return "detail";

  const activeMode = safeText(document.body.dataset.projectView).toLowerCase();
  if (activeMode === "detail" || activeMode === "editorial") return activeMode;

  try {
    const requestedMode = new URL(window.location.href).searchParams.get("view");
    if (requestedMode === "detail" || requestedMode === "editorial") return requestedMode;
  } catch (error) {
    warnLog("Could not read project view from the URL");
  }

  const preferredMode = safeText(project.defaultView || (project.detail && project.detail.defaultView)).toLowerCase();
  return preferredMode === "detail" ? "detail" : "editorial";
}

function setProjectViewMode(project, mode) {
  const nextMode = mode === "detail" ? "detail" : "editorial";

  try {
    const url = new URL(window.location.href);
    url.searchParams.set("view", nextMode);
    window.history.replaceState(window.history.state, "", url);
  } catch (error) {
    warnLog("Could not update project view in the URL");
  }

  return nextMode;
}

function renderProjectViewMode(project, mode) {
  const nextMode = mode === "detail" ? "detail" : "editorial";

  document.body.dataset.projectView = nextMode;
  document.body.dataset.dbProjectView = nextMode;

  if (isDbEditorialProject(project) && nextMode === "editorial") {
    const editorialRendered = renderEditorialProject(project);

    if (editorialRendered) {
      setLegacyProjectDetailVisible(false);
      hideProjectExtraSlider();
      updateProjectViewToggle(project, "editorial");

      if (window.ScrollTrigger) ScrollTrigger.refresh();
      return;
    }
  }

  removeEditorialProject();
  setLegacyProjectDetailVisible(true);
  renderProjectText(project);
  renderProjectImages(project);

  if (typeof initCompareTabs === "function") initCompareTabs();
  if (typeof initCustomVideos === "function") initCustomVideos();
  if (typeof initProjectImagePreview === "function") initProjectImagePreview(document);

  updateProjectViewToggle(project, "detail");

  if (window.ScrollTrigger) ScrollTrigger.refresh();
}
function renderProjectViewToggle(project) {
  if (!isDbEditorialProject(project)) {
    removeProjectViewToggle();
    return;
  }

  const composition = ensureProjectIntroComposition();
  if (!composition) return;

  const detailSection = qs(".project-detail-section");
  if (detailSection) {
    detailSection.id = detailSection.id || "projectDetailView";
    detailSection.setAttribute("role", "tabpanel");
    detailSection.setAttribute("aria-labelledby", "projectViewDetail");
  }

  const editorialSection = ensureCaseStorySection();
  if (editorialSection) {
    editorialSection.setAttribute("role", "tabpanel");
    editorialSection.setAttribute("aria-labelledby", "projectViewEditorial");
  }

  let switcher = document.getElementById("projectViewToggle");

  if (!switcher) {
    switcher = document.createElement("div");
    switcher.id = "projectViewToggle";
    switcher.className = "project-view-switcher";

    const label = document.createElement("span");
    label.className = "project-view-label";
    label.textContent = "Project view";

    const status = document.createElement("span");
    status.className = "project-view-status";
    status.setAttribute("aria-live", "polite");
    status.setAttribute("aria-atomic", "true");

    const options = document.createElement("div");
    options.className = "project-view-options";
    options.setAttribute("role", "tablist");
    options.setAttribute("aria-label", "Choose project view");

    const editorialButton = document.createElement("button");
    editorialButton.type = "button";
    editorialButton.id = "projectViewEditorial";
    editorialButton.className = "project-view-option";
    editorialButton.dataset.projectViewMode = "editorial";
    editorialButton.setAttribute("role", "tab");
    editorialButton.setAttribute("aria-controls", "caseStory");
    editorialButton.textContent = "Editorial";

    const detailButton = document.createElement("button");
    detailButton.type = "button";
    detailButton.id = "projectViewDetail";
    detailButton.className = "project-view-option";
    detailButton.dataset.projectViewMode = "detail";
    detailButton.setAttribute("role", "tab");
    detailButton.setAttribute("aria-controls", detailSection ? detailSection.id : "projectDetailView");
    detailButton.textContent = "Project details";

    options.appendChild(editorialButton);
    options.appendChild(detailButton);
    switcher.appendChild(label);
    switcher.appendChild(status);
    switcher.appendChild(options);

    function activateView(button, shouldFocus = false) {
      const nextMode = button.dataset.projectViewMode;
      if (!nextMode) return;

      setProjectViewMode(project, nextMode);
      renderProjectViewMode(project, nextMode);
      if (shouldFocus) button.focus();
    }

    options.addEventListener("click", event => {
      const button = event.target.closest("[data-project-view-mode]");
      if (button) activateView(button);
    });

    options.addEventListener("keydown", event => {
      const tabs = qsa("[role='tab']", options);
      const currentIndex = tabs.indexOf(document.activeElement);
      if (currentIndex < 0) return;

      let nextIndex = currentIndex;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (currentIndex + 1) % tabs.length;
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;

      if (nextIndex === currentIndex) return;
      event.preventDefault();
      activateView(tabs[nextIndex], true);
    });
  }

  if (switcher.parentNode !== composition.layout) composition.layout.appendChild(switcher);
  updateProjectViewToggle(project, getProjectViewMode(project));
}

function updateProjectViewToggle(project, mode) {
  const switcher = document.getElementById("projectViewToggle");
  if (!switcher || !isDbEditorialProject(project)) return;

  const nextMode = mode === "detail" ? "detail" : "editorial";
  const status = qs(".project-view-status", switcher);

  qsa("[data-project-view-mode]", switcher).forEach(button => {
    const isSelected = button.dataset.projectViewMode === nextMode;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-selected", String(isSelected));
    button.tabIndex = isSelected ? 0 : -1;
  });

  switcher.dataset.currentMode = nextMode;
  if (status) status.textContent = nextMode === "editorial" ? "Editorial view active" : "Project details view active";
}

function removeProjectViewToggle() {
  const switcher = document.getElementById("projectViewToggle");
  if (switcher) switcher.remove();
}

function renderProjectHeader(project) {
  const titleEl = document.getElementById("projectTitle");
  const tagsEl = document.getElementById("projectTags");
  let metaEl = document.getElementById("projectMeta");

  if (titleEl) {
    titleEl.textContent = safeText(project.title).trim();
    titleEl.classList.remove("project-title-short", "project-title-long", "project-title-extra-long");
  }

  if (metaEl && metaEl.tagName !== "DL") {
    const replacement = document.createElement("dl");
    replacement.id = "projectMeta";
    replacement.className = `${metaEl.className || ""} project-meta-list`.trim();
    metaEl.replaceWith(replacement);
    metaEl = replacement;
  }

  if (metaEl) {
    metaEl.classList.add("project-meta-list");
    removeChildren(metaEl);

    const items = getProjectMetaItems(project);
    metaEl.hidden = !items.length;

    items.forEach(item => {
      const group = document.createElement("div");
      group.className = "project-meta-item";

      const term = document.createElement("dt");
      term.textContent = item.label;

      const description = document.createElement("dd");
      description.textContent = item.value;

      group.appendChild(term);
      group.appendChild(description);
      metaEl.appendChild(group);
    });
  }

  if (!tagsEl) return;

  removeChildren(tagsEl);
  const base = getBasePath();
  const headerTags = getProjectHeaderTags(project);
  tagsEl.hidden = !headerTags.length;

  headerTags.forEach((tag, index) => {
    const link = document.createElement("a");
    link.className = "project-tag-filter";
    link.dataset.tagIndex = String(index + 1);
    link.dataset.tagType = "project-type";
    link.href = `${base}projects.html?filter=${encodeURIComponent(tag)}#filters`;
    link.setAttribute("aria-label", `View projects filtered by ${tag}`);
    link.textContent = tag;
    tagsEl.appendChild(link);
  });
}

function ensureProjectIntroComposition() {
  const introBlock = qs(".intro-block");
  if (!introBlock) return null;

  const introContainer = qs(".intro-container", introBlock);
  if (!introContainer) return null;

  introBlock.classList.add("project-intro-block");

  let layout = qs(".project-intro-layout", introContainer);
  let copy = qs(".project-intro-copy", introContainer);
  let media = qs(".project-intro-media", introContainer);

  if (!layout) {
    layout = document.createElement("div");
    layout.className = "project-intro-layout";
    introContainer.insertBefore(layout, introContainer.firstChild);
  }

  if (!copy) {
    copy = document.createElement("div");
    copy.className = "project-intro-copy";
    layout.insertBefore(copy, layout.firstChild);
  }

  if (!media) {
    media = document.createElement("div");
    media.className = "project-intro-media";
    layout.appendChild(media);
  }

  ["projectTitle", "projectTags", "projectMeta"].forEach(id => {
    const element = document.getElementById(id);
    if (element && element.parentNode !== copy) copy.appendChild(element);
  });

  const cover = document.getElementById("projectCoverBanner");
  if (cover && cover.parentNode !== media) media.appendChild(cover);

  introContainer.classList.add("is-composed");
  return { introBlock, introContainer, layout, copy, media };
}

function renderProjectCover(project) {
  const composition = ensureProjectIntroComposition();
  if (!composition) return;

  const { introBlock, layout, media } = composition;
  let coverBannerEl = document.getElementById("projectCoverBanner");

  if (!coverBannerEl) {
    coverBannerEl = document.createElement("div");
    coverBannerEl.id = "projectCoverBanner";
    media.appendChild(coverBannerEl);
  } else if (coverBannerEl.parentNode !== media) {
    media.appendChild(coverBannerEl);
  }

  const base = getBasePath();
  const coverColor = getProjectCoverBg(project);
  const coverSrc = normalizePath(project.coverBannerImage || project.coverImage || "", base);
  const coverScale = getProjectCoverScale(project);

  removeChildren(coverBannerEl);
  coverBannerEl.className = "project-cover-banner";
  coverBannerEl.style.background = "transparent";
  coverBannerEl.hidden = false;
  media.hidden = false;
  layout.classList.remove("has-no-cover", "has-cover-error");
  introBlock.classList.remove("has-no-project-cover");

  if (!coverSrc) {
    coverBannerEl.hidden = true;
    media.hidden = true;
    layout.classList.add("has-no-cover");
    introBlock.classList.add("has-no-project-cover");
    document.body.classList.remove("is-project-cover-expanded", "has-project-cover");
    setGlobalProjectBackground("var(--bg-main)");
    warnLog(`Project cover missing for ${safeText(project.title)}`);
    return;
  }

  document.body.classList.remove("is-project-cover-expanded");
  document.body.classList.add("has-project-cover");
  setGlobalProjectBackground("var(--bg-main)");

  setCssVar(coverBannerEl, "--project-cover-bg", coverColor);
  setCssVar(coverBannerEl, "--project-cover-color", coverColor);
  setCssVar(coverBannerEl, "--project-cover-image-scale", coverScale);
  setCssVar(coverBannerEl, "--project-cover-image-x", project.coverImageX || "0px");
  setCssVar(coverBannerEl, "--project-cover-image-y", project.coverImageY || "0px");

  const wrapper = document.createElement("div");
  wrapper.className = "project-cover-wrapper";

  const coverBg = document.createElement("div");
  coverBg.className = "project-cover-bg";
  coverBg.setAttribute("aria-hidden", "true");
  coverBg.style.background = coverColor;

  const coverImageFrame = document.createElement("div");
  coverImageFrame.className = "project-cover-image-frame";

  const img = document.createElement("img");
  img.className = "project-cover-img";
  img.src = coverSrc;
  img.alt = `${safeText(project.title)} cover image`;
  img.decoding = "async";
  img.loading = "eager";
  img.fetchPriority = "high";

  img.addEventListener("load", () => {
    coverBannerEl.classList.remove("has-cover-error");
    layout.classList.remove("has-cover-error");
  }, { once: true });

  img.addEventListener("error", () => {
    coverBannerEl.classList.add("has-cover-error");
    layout.classList.add("has-cover-error");
    removeChildren(coverImageFrame);

    const fallback = document.createElement("div");
    fallback.className = "project-cover-fallback";
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", `${safeText(project.title)} cover unavailable`);

    const initials = safeText(project.title)
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join("")
      .toUpperCase();

    const mark = document.createElement("span");
    mark.className = "project-cover-fallback-mark";
    mark.textContent = initials || "PR";

    const message = document.createElement("span");
    message.className = "project-cover-fallback-message";
    message.textContent = "Cover unavailable";

    fallback.appendChild(mark);
    fallback.appendChild(message);
    coverImageFrame.appendChild(fallback);
  }, { once: true });

  coverImageFrame.appendChild(img);
  wrapper.appendChild(coverBg);
  wrapper.appendChild(coverImageFrame);
  coverBannerEl.appendChild(wrapper);
}

function renderProjectText(project) {
  const textEl = document.getElementById("projectText");
  if (!textEl) return;

  const s = project.detail.sections || {};
  removeChildren(textEl);

  const sections = [
    ["Summary", s.summary],
    ["Challenge", s.challenge],
    ["Approach", s.approach],
    ["Creative Direction", s.creativeDirection],
    ["Key Visual System", s.keyVisualSystem]
  ];

  sections.forEach(([heading, body]) => {
    appendHeadingAndParagraph(textEl, heading, body);
  });

  const resultItems = Array.isArray(s.result) ? s.result.filter(item => !isBlank(item)) : [];
  if (resultItems.length) {
    const resultHeading = document.createElement("h3");
    resultHeading.textContent = "Result";
    textEl.appendChild(resultHeading);

    const resultList = document.createElement("ul");
    resultItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = safeText(item).trim();
      resultList.appendChild(li);
    });
    textEl.appendChild(resultList);
  }

  appendHeadingAndParagraph(textEl, s.takeawayTitle || "Takeaway", s.takeaway);

}

function appendHeadingAndParagraph(root, headingText, paragraphText) {
  if (!root || isBlank(paragraphText)) return;

  const h3 = document.createElement("h3");
  h3.textContent = safeText(headingText).trim();

  const p = document.createElement("p");
  p.textContent = safeText(paragraphText).trim();

  root.appendChild(h3);
  root.appendChild(p);
}

function renderProjectImages(project) {
  const imagesEl = document.getElementById("projectImages");
  if (!imagesEl) return;

  removeChildren(imagesEl);

  const base = getBasePath();
  const fragment = document.createDocumentFragment();
  const detail = project.detail || {};
  const rows = Array.isArray(detail.images) ? detail.images : [];

  let renderedSomething = false;

  rows.forEach(row => {
    const items = Array.isArray(row.items) ? row.items.filter(item => item && (!isBlank(item.src) || item.type === "video" || item.type === "compare")) : [];
    if (!items.length) return;

    const rowEl = document.createElement("div");
    rowEl.className = `image-row ${safeText(row.layout || (items.length > 1 ? "two" : "one"))}`.trim();

    items.forEach(item => {
      const mediaItem = createProjectMediaItem(item, base);
      if (mediaItem) rowEl.appendChild(mediaItem);
    });

    if (rowEl.children.length) {
      renderedSomething = true;
      fragment.appendChild(rowEl);
    }
  });

  if (!renderedSomething) {
    const fallbackImages = [];

    if (Array.isArray(detail.editorialArtDirectedCaseStudyImages)) {
      fallbackImages.push(...detail.editorialArtDirectedCaseStudyImages);
    }

    if (Array.isArray(detail.extraImages)) {
      fallbackImages.push(...detail.extraImages);
    }

    fallbackImages
      .filter(image => image && !isBlank(image.src) && !isPlaceholderExtraImage(project, image))
      .slice(0, 6)
      .forEach(image => {
        const rowEl = document.createElement("div");
        rowEl.className = "image-row one";

        const img = document.createElement("img");
        img.src = normalizePath(image.src, base);
        img.alt = safeText(image.alt || project.title);
        img.loading = "lazy";
        img.decoding = "async";
        img.addEventListener("error", () => {
          img.remove();
          if (!rowEl.querySelector("img, video, .custom-video, .compare-tabs")) rowEl.remove();
          if (window.ScrollTrigger) ScrollTrigger.refresh();
        }, { once: true });

        rowEl.appendChild(img);
        fragment.appendChild(rowEl);
        renderedSomething = true;
      });
  }

  imagesEl.appendChild(fragment);

  const projectImages = qs(".project-images");
  if (projectImages) projectImages.hidden = !renderedSomething;
}
/* EDITORIAL CASE STORY */
function getEditorialConfig(project) {
  if (!project || !project.detail) return null;

  const editorial = project.detail.editorial;

  if (editorial && typeof editorial === "object") {
    const blocks = Array.isArray(editorial.blocks)
      ? editorial.blocks.filter(block => block && typeof block === "object")
      : [];

    if (blocks.length) {
      return {
        ...editorial,
        variant: editorial.variant || "routeMapEditorial",
        wowFactor: editorial.wowFactor || { module: "growingLine" },
        blocks
      };
    }
  }

  return buildAutoEditorialConfig(project);
}

function buildAutoEditorialConfig(project) {
  const detail = project.detail || {};
  const sections = detail.sections || {};

  if (!sections || isBlank(sections.summary)) return null;

  const title = safeText(project.title).trim();
  const category = safeText(getProjectCategoryText(project)).trim();
  const visualSet = getAutoEditorialVisualSet(project);
  const visual = names => findAutoEditorialVisual(project, names, visualSet, -1);
  const resultText = getEditorialResultText(sections.result);
  const level = getProjectLevel(project);

  const blocks = [
    {
      id: `${normalizeSlug(project.slug)}-editorial-flow`,
      type: "problem",
      layoutRole: "rail-left",
      claim: "User situation",
      headline: `${title} starts with a concrete product constraint.`,
      body: getEditorialExcerpt(sections.summary, 340),
      labels: compactEditorialLabels([category, level, getProjectYear(project)]),
      dominantVisual: visual(["device line-up", "device lineup"])
    },
    {
      id: `${normalizeSlug(project.slug)}-editorial-challenge`,
      type: "proof",
      layoutRole: "rail-right",
      claim: "Critical constraint",
      headline: "The challenge defines what the interface must clarify.",
      body: getEditorialExcerpt(sections.challenge || sections.summary, 340),
      labels: ["Constraint", "Decision context"],
      dominantVisual: visual(["conceptual diptych"])
    },
    {
      id: `${normalizeSlug(project.slug)}-editorial-direction`,
      type: "proof",
      layoutRole: "rail-left",
      claim: "Design direction",
      headline: "The visual stance follows the product situation.",
      body: getEditorialExcerpt(sections.creativeDirection || sections.approach || sections.summary, 360),
      labels: ["Creative direction", "Tone"],
      dominantVisual: visual(["editorial object shot", "object shot"])
    },
    {
      id: `${normalizeSlug(project.slug)}-editorial-structure`,
      type: "sticky",
      layoutRole: "rail-right",
      claim: "System logic",
      headline: "The flow connects the main decisions.",
      body: getEditorialExcerpt(sections.approach || sections.summary, 360),
      labels: ["Information architecture", "Interaction model"],
      dominantVisual: visual(["information architecture"])
    },
    {
      id: `${normalizeSlug(project.slug)}-editorial-detail`,
      type: "proof",
      layoutRole: "rail-left",
      claim: "Interface detail",
      headline: "Hierarchy and states make the rule visible.",
      body: getEditorialExcerpt(sections.keyVisualSystem || sections.approach || sections.summary, 360),
      labels: ["Visual system", "State design"],
      dominantVisual: visual(["detail crop"])
    },
    {
      id: `${normalizeSlug(project.slug)}-editorial-system`,
      type: "spread",
      layoutRole: "rail-right",
      claim: "Current scope",
      headline: `${title} remains a prototype until its open questions are tested.`,
      body: getEditorialExcerpt(resultText || sections.takeaway || sections.summary, 360),
      labels: ["Prototype", "Open validation"],
      dominantVisual: getProjectSystemVisual(project, visualSet)
    }
  ].filter(block => !isBlank(block.body) || block.dominantVisual);

  if (!blocks.length) return null;

  return {
    variant: "routeMapEditorial",
    thesis: createAutoEditorialThesis(project, sections),
    scopeNote: createAutoEditorialScopeNote(project, sections),
    headerEvidence: detail.evidence,
    headerNextValidation: detail.nextValidation,
    wowFactor: { module: "growingLine" },
    blocks
  };
}

function createAutoEditorialThesis(project, sections) {
  const title = safeText(project.title).trim();
  const summary = getEditorialExcerpt(sections.summary, 150);
  if (!summary) return `${title} turns a complex product situation into a clearer system.`;
  return summary;
}

function createAutoEditorialScopeNote(project, sections) {
  const title = safeText(project.title).trim();
  const meta = safeText(project.detail && project.detail.meta).trim();
  const category = safeText(getProjectCategoryText(project)).trim();
  const pieces = compactEditorialLabels([meta, category]);
  return pieces.length ? `${title}. ${pieces.join(" · ")}.` : `${title}. Editorial case study generated from the existing project detail content.`;
}

function getEditorialExcerpt(value, maxLength = 320) {
  const text = safeText(value).replace(/\s+/g, " ").trim();
  if (!text) return "";
  if (text.length <= maxLength) return text;

  const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
  let result = "";

  sentences.forEach(sentence => {
    const candidate = `${result}${sentence}`.trim();
    if (!result || candidate.length <= maxLength) result = candidate;
  });

  if (result && result.length <= maxLength + 40) return result;

  const clipped = text.slice(0, maxLength).replace(/\s+\S*$/, "").trim();
  return clipped ? `${clipped}.` : text;
}

function getEditorialResultText(result) {
  if (Array.isArray(result)) {
    return result.filter(item => !isBlank(item)).slice(0, 3).map(item => safeText(item).trim()).join(" ");
  }

  return safeText(result).trim();
}

function compactEditorialLabels(values) {
  return Array.from(new Set((values || []).map(value => safeText(value).trim()).filter(Boolean))).slice(0, 5);
}

function getAutoEditorialVisualSet(project) {
  const detail = project.detail || {};
  const visuals = [];

  getProjectEditorialArtImages(project).forEach(image => visuals.push(image));

  if (!isBlank(project.coverBannerImage || project.coverImage)) {
    visuals.push({
      src: project.coverBannerImage || project.coverImage,
      alt: `${safeText(project.title)} cover visual`
    });
  }

  const rows = Array.isArray(detail.images) ? detail.images : [];

  rows.forEach(row => {
    const items = Array.isArray(row.items) ? row.items : [];

    items.forEach(item => {
      if (!item || item.type === "video") return;

      if (!isBlank(item.src)) {
        visuals.push({ src: item.src, alt: item.alt || project.title });
      }

      if (item.type === "compare") {
        if (!isBlank(item.after)) visuals.push({ src: item.after, alt: item.altAfter || project.title });
        if (!isBlank(item.before)) visuals.push({ src: item.before, alt: item.altBefore || project.title });
      }
    });
  });

  const used = new Set();

  return visuals.filter(image => {
    const src = safeText(image && image.src).trim();
    if (!src || used.has(src)) return false;
    used.add(src);
    return true;
  });
}

function findAutoEditorialVisual(project, names, visualSet, fallbackIndex = 0) {
  const list = Array.isArray(visualSet) ? visualSet : getAutoEditorialVisualSet(project);
  const searchNames = (Array.isArray(names) ? names : [names]).map(name => safeText(name).toLowerCase()).filter(Boolean);

  const matched = list.find(image => {
    const src = safeText(image && image.src).toLowerCase();
    const alt = safeText(image && image.alt).toLowerCase();
    return searchNames.some(name => src.includes(name) || alt.includes(name));
  });

  if (matched) return matched;
  if (Number.isInteger(fallbackIndex) && fallbackIndex >= 0) {
    return list[fallbackIndex] || null;
  }
  return null;
}

function setLegacyProjectDetailVisible(isVisible) {
  const detailSection = qs(".project-detail-section");
  if (!detailSection) return;
  detailSection.hidden = !isVisible;
}

function hideProjectExtraSlider() {
  const extraRectEl = document.getElementById("projectExtraRect");
  if (!extraRectEl) return;

  qsa(".project-extra-slider-wrap", extraRectEl).forEach(sliderWrap => {
    if (sliderWrap._sliderCleanup) {
      sliderWrap._sliderCleanup();
      sliderWrap._sliderCleanup = null;
    }
  });

  removeChildren(extraRectEl);
  extraRectEl.hidden = true;
}

function ensureCaseStorySection() {
  let section = document.getElementById("caseStory");
  if (section) return section;

  const otherProjects = qs(".other-projects-section");
  const projectDetailSection = qs(".project-detail-section");

  if (!otherProjects && !projectDetailSection) return null;

  section = document.createElement("section");
  section.className = "case-story-section";
  section.id = "caseStory";
  section.hidden = true;

  if (otherProjects && otherProjects.parentNode) {
    otherProjects.parentNode.insertBefore(section, otherProjects);
    return section;
  }

  projectDetailSection.insertAdjacentElement("afterend", section);
  return section;
}

function removeEditorialProject() {
  cleanupCaseStoryScrollTriggers();

  const section = document.getElementById("caseStory");
  if (!section) return;

  removeChildren(section);
  section.hidden = true;
  delete section.dataset.editorialReady;
  delete section.dataset.editorialVariant;
  delete section.dataset.wowModule;
}

function cleanupCaseStoryScrollTriggers() {
  if (window.ScrollTrigger) {
    ScrollTrigger.getAll().forEach(trigger => {
      const id = safeText(trigger.vars && trigger.vars.id);
      if (id.startsWith("caseStory:")) trigger.kill();
    });
  }

  const section = document.getElementById("caseStory");

  if (section && window.gsap) {
    gsap.killTweensOf(
      qsa(
        ".case-route-line, .case-block-route-path, .case-block, .case-marker, .case-block-label, .case-block-stat",
        section
      )
    );
  }
}

function renderEditorialProject(project) {
  const editorial = getEditorialConfig(project);
  if (!editorial) return false;

  const section = ensureCaseStorySection();
  if (!section) return false;

  cleanupCaseStoryScrollTriggers();
  removeChildren(section);

  const blocks = editorial.blocks.slice(0, 7);
  if (!blocks.length) return false;

  section.hidden = false;
  section.classList.add("case-story-section");
  section.dataset.editorialReady = "true";
  section.dataset.editorialVariant = safeText(editorial.variant || "default");
  section.dataset.wowModule = safeText(editorial.wowFactor && editorial.wowFactor.module);

  const editorialColor = editorial.color || project.editorialColor || "var(--accent-strong)";

section.style.setProperty("--db-route-red", editorialColor);
section.style.setProperty("--case-story-line", editorialColor);

  const inner = document.createElement("div");
  inner.className = "case-story-inner";

  const isRouteMapEditorial = safeText(editorial.variant) === "routeMapEditorial";

  const header = renderEditorialHeader(project, editorial);

  if (!isRouteMapEditorial) {
    const routeLayer = document.createElement("div");
    routeLayer.className = "case-story-route-layer";
    routeLayer.setAttribute("aria-hidden", "true");

    const routeLine = document.createElement("span");
    routeLine.className = "case-route-line";
    routeLine.dataset.caseRouteLine = "";

    routeLayer.appendChild(routeLine);
    inner.appendChild(routeLayer);
  }

  if (header) inner.appendChild(header);

  if (isRouteMapEditorial) {
    const heroStatement = renderDbEditorialFullImage(project, "hero statement", {
      className: "case-story-hero-statement-strip",
      imageClassName: "case-story-hero-statement-img",
      fallbackAlt: `${safeText(project.title)} hero statement`
    });

    if (heroStatement) inner.appendChild(heroStatement);

    getRouteMapImageDrivenBlocks(project, blocks).forEach((block, index) => {
      const blockEl = renderEditorialBlock(block, index);
      if (blockEl) inner.appendChild(blockEl);

      // Scope belongs below the complete section, not inside its text column.
      const scopeEl = renderEditorialScope(block.scopeItems);
      if (scopeEl) inner.appendChild(scopeEl);
    });

    const closingMood = renderDbEditorialFullImage(project, "closing mood", {
      className: "case-story-closing-mood-strip",
      imageClassName: "case-story-closing-mood-img",
      fallbackAlt: `${safeText(project.title)} closing mood`
    });

    if (closingMood) inner.appendChild(closingMood);
  } else {
    blocks.forEach((block, index) => {
      const blockEl = renderEditorialBlock(block, index);
      if (blockEl) inner.appendChild(blockEl);

      // Scope belongs below the complete section, not inside its text column.
      const scopeEl = renderEditorialScope(block.scopeItems);
      if (scopeEl) inner.appendChild(scopeEl);
    });
  }

  section.appendChild(inner);

  const hasContent = qsa(
    "[data-case-block], .case-story-fullbleed-strip",
    section
  ).length;

  if (!hasContent) {
    removeEditorialProject();
    return false;
  }

  refreshCaseStoryAfterImages(section);
  initCaseWowFactor(project);

  if (typeof initCompareTabs === "function") initCompareTabs();
  if (typeof initCustomVideos === "function") initCustomVideos();
  if (typeof initProjectImagePreview === "function") initProjectImagePreview(section);

  return true;
  
}

function getProjectEditorialArtImages(project) {
  const images = project &&
    project.detail &&
    Array.isArray(project.detail.editorialArtDirectedCaseStudyImages)
    ? project.detail.editorialArtDirectedCaseStudyImages
    : [];

  return images.filter(image => image && !isBlank(image.src));
}

function findProjectEditorialArtImage(project, name) {
  const search = safeText(name).toLowerCase();

  return getProjectEditorialArtImages(project).find(image => {
    const src = safeText(image.src).toLowerCase();
    const alt = safeText(image.alt).toLowerCase();
    return src.includes(search) || alt.includes(search);
  }) || null;
}

function renderDbEditorialFullImage(project, name, options = {}) {
  const visual = findProjectEditorialArtImage(project, name);
  if (!visual || isBlank(visual.src)) return null;

  const figure = document.createElement("figure");
  figure.className = `case-story-fullbleed-strip ${safeText(options.className)}`.trim();

  const img = document.createElement("img");
  img.className = `case-story-fullbleed-img ${safeText(options.imageClassName)}`.trim();
  img.src = normalizePath(visual.src, getBasePath());
  img.alt = safeText(visual.alt || options.fallbackAlt || "");
  img.loading = "lazy";
  img.decoding = "async";

  img.addEventListener("load", () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, { once: true });

  img.addEventListener("error", () => {
    figure.remove();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, { once: true });

  figure.appendChild(img);
  return figure;
}

function createDbImageBlock(baseBlock, visual, overrides = {}) {
  return {
    ...(baseBlock || {}),
    id: overrides.id || safeText(baseBlock && baseBlock.id),
    type: overrides.type || safeText(baseBlock && baseBlock.type) || "proof",
    claim: overrides.claim || safeText(baseBlock && baseBlock.claim),
    headline: overrides.headline || safeText(baseBlock && baseBlock.headline),
    body: overrides.body || safeText(baseBlock && baseBlock.body),
    labels: overrides.labels || (baseBlock && baseBlock.labels) || [],
    stats: overrides.stats || (baseBlock && baseBlock.stats) || [],
    scopeItems: overrides.scopeItems || (baseBlock && baseBlock.scopeItems) || [],
    markers: [],
    supportVisuals: [],
    detailCrops: [],
    dominantVisual: visual,
    layoutRole: overrides.layoutRole || safeText(baseBlock && baseBlock.layoutRole),
    visualBehavior: overrides.visualBehavior || safeText(baseBlock && baseBlock.visualBehavior),
    wowRelation: overrides.wowRelation || safeText(baseBlock && baseBlock.wowRelation)
  };
}

function isSpatialProject(project) {
  const haystack = [
    project && project.slug,
    project && project.title,
    getProjectCategoryText(project),
    project && project.detail && project.detail.sections && project.detail.sections.summary
  ].map(value => safeText(value).toLowerCase()).join(" ");

  return /\b(ar|vr|spatial|immersive|headset)\b/.test(haystack);
}

function getProjectSystemVisual(project, visualSet = getAutoEditorialVisualSet(project)) {
  if (isSpatialProject(project)) {
    return findAutoEditorialVisual(project, ["mobile system", "spatial system", "immersive system"], visualSet, -1);
  }

  return findAutoEditorialVisual(project, ["desktop and mobile system", "mobile system"], visualSet, -1);
}

function getRouteMapImageDrivenBlocks(project, blocks = []) {
  if (normalizeSlug(project.slug) === "dbnavigatorredesign") {
    return getDbImageDrivenBlocks(project, blocks);
  }

  const visualSet = getAutoEditorialVisualSet(project);
  const mappedVisuals = [
    findAutoEditorialVisual(project, ["device line-up", "device lineup"], visualSet, -1),
    findAutoEditorialVisual(project, ["conceptual diptych"], visualSet, -1),
    findAutoEditorialVisual(project, ["editorial object shot", "object shot"], visualSet, -1),
    findAutoEditorialVisual(project, ["information architecture"], visualSet, -1),
    findAutoEditorialVisual(project, ["detail crop"], visualSet, -1),
    getProjectSystemVisual(project, visualSet)
  ];

  return blocks.map((block, index) => {
    const layoutRole = safeText(block.layoutRole) || (index % 2 === 0 ? "rail-left" : "rail-right");
    const visual = block.dominantVisual || mappedVisuals[index] || null;

    return createDbImageBlock(block, visual, {
      id: block.id || `${normalizeSlug(project.slug)}-editorial-${index + 1}`,
      layoutRole,
      type: block.type || (index === blocks.length - 1 ? "spread" : "proof"),
      claim: block.claim,
      headline: block.headline,
      body: block.body,
      labels: block.labels,
      stats: block.stats || [],
      scopeItems: block.scopeItems || []
    });
  });
}

function getDbImageDrivenBlocks(project, blocks = []) {
  const deviceLineup = findProjectEditorialArtImage(project, "device line-up");
  const conceptualDiptych = findProjectEditorialArtImage(project, "conceptual diptych");
  const editorialObjectShot = findProjectEditorialArtImage(project, "editorial object shot");
  const informationArchitecture = findProjectEditorialArtImage(project, "information architecture");
  const detailCrop = findProjectEditorialArtImage(project, "detail crop");
  const mobileSystem = findProjectEditorialArtImage(project, "mobile system");

  const sourceOpening = blocks[0] || {};
  const sourceKnownFlow = blocks[1] || {};
  const sourceOptions = blocks[2] || {};
  const sourceCoreProof = blocks[3] || {};
  const sourceDetail = blocks[4] || {};
  const sourceSystem = blocks[5] || {};

  const result = [];

  if (deviceLineup) {
    result.push(createDbImageBlock(sourceOpening, deviceLineup, {
      id: "db-editorial-device-lineup",
      type: "problem",
      layoutRole: "rail-left opening",
      claim: "Critical constraint",
      headline: "Accessibility information appears after the route decision.",
      body: "An elderly passenger may need wheelchair access and an accessible toilet. In the current flow, they have to leave route comparison to check both. The route looks valid before access is clear.",
      labels: ["Hidden access info", "Elderly passengers", "Disabled users"]
    }));
  }

  if (conceptualDiptych) {
    result.push(createDbImageBlock(sourceKnownFlow, conceptualDiptych, {
      id: "db-editorial-conceptual-diptych",
      type: "proof",
      layoutRole: "rail-right knownFlow",
      claim: "Accessibility decision",
      headline: "Access conditions move into route comparison.",
      body: "Instead of a separate accessibility mode, access indicators live inside the route cards. Users compare wheelchair access, toilets, and hearing loops where they already compare time and changes.",
      labels: ["Design decision", "Journey flow", "Route comparison"]
    }));
  }

  if (editorialObjectShot) {
    result.push(createDbImageBlock(sourceOptions, editorialObjectShot, {
      id: "db-editorial-object-shot",
      type: "proof",
      layoutRole: "rail-left objectProof",
      claim: "Category model",
      headline: "Four groups make 15 access conditions scannable.",
      body: "15 conditions are grouped into Mobility, Sanitary, Sensory, and Assistance. A user looking for a wheelchair-accessible toilet can scan Mobility and Sanitary first.",
      labels: ["Mobility", "Sanitary", "Sensory", "Assistance"]
    }));
  }

  if (informationArchitecture) {
    result.push(createDbImageBlock(sourceCoreProof, informationArchitecture, {
      id: "db-editorial-information-architecture",
      type: "sticky",
      layoutRole: "rail-right entry",
      claim: "Preference setup",
      headline: "Users select relevant access needs before results appear.",
      body: "Before searching, users select what matters to them. If wheelchair access and accessible toilets are required, the results highlight those conditions first instead of showing every indicator equally.",
      labels: ["Options flow", "Personalized results", "Required conditions"],
      stats: [
        {
          value: "4",
          label: "Access categories"
        },
        {
          value: "15",
          label: "Route conditions"
        },
        {
          value: "1x",
          label: "Setup before comparison"
        }
      ]
    }));
  }

  if (detailCrop) {
    result.push(createDbImageBlock(sourceDetail, detailCrop, {
      id: "db-editorial-detail-crop",
      type: "proof",
      layoutRole: "rail-left explanation",
      claim: "Progressive detail",
      headline: "The route score opens into condition-level evidence.",
      body: "Each route shows a quick access score. One tap opens the condition list. A second level shows where access is available, limited, or missing across stations and route steps.",
      labels: ["Access score", "Available", "Limited", "Missing"]
    }));
  }

  if (mobileSystem) {
    result.push(createDbImageBlock(sourceSystem, mobileSystem, {
      id: "db-editorial-mobile-system",
      type: "spread",
      layoutRole: "rail-right coreProof",
      claim: "Next validation step",
      headline: "The heuristic concept needs route-planning tests.",
      body: "This independent redesign explores how DB Navigator could integrate accessibility into route comparison. It was shaped through heuristic review and WCAG contrast checks, not user testing.",
      labels: ["Independent concept", "Heuristic-based", "No user testing"],
      scopeItems: [
        {
          title: "Concept contribution",
          text: "Integrated accessibility conditions inside the familiar route-comparison flow."
        },
        {
          title: "Current evidence",
          text: "Heuristic accessibility review, WCAG contrast checks and high-fidelity prototype states."
        },
        {
          title: "Next validation",
          text: "Journey-planning tests with elderly passengers and disabled users."
        }
      ]
    }));
  }

  return result;
}
function renderEditorialHeader(project, editorial) {
  const header = document.createElement("header");
  header.className = "case-story-header";

  const thesis = document.createElement("h2");
  thesis.className = "case-story-thesis";
  thesis.textContent = safeText(editorial.thesis || project.title);
  header.appendChild(thesis);

  

  return header;
}
function renderEditorialBlock(block, index = 0) {
  if (!block || typeof block !== "object") return null;

  const article = document.createElement("article");
  const allowedTypes = ["poster", "problem", "spread", "sticky", "system", "proof", "outcome", "closing"];
  const rawType = safeText(block.type || "proof").trim();
  const type = allowedTypes.includes(rawType) ? rawType : "proof";
  const id = safeText(block.id || `case-block-${index + 1}`).trim();

  article.className = `case-block case-block-${type}`;
  article.dataset.caseBlock = "";
  article.dataset.caseBlockId = id;

  const layoutRole = safeText(block.layoutRole).trim();
  const hasRailLeft = layoutRole.includes("rail-left");
  const hasRailRight = layoutRole.includes("rail-right");


  if (hasRailLeft || hasRailRight) {
    const railSide = hasRailRight ? "right" : "left";

    article.classList.add("case-block-rail");
    article.classList.add(`case-block-rail-${railSide}`);
    article.dataset.railSide = railSide;

    const rail = document.createElement("div");
    rail.className = "case-block-route-rail";
    rail.setAttribute("aria-hidden", "true");

    const railPath = document.createElement("span");
    railPath.className = "case-block-route-path";
    railPath.dataset.caseBlockRoutePath = "";

    const station = document.createElement("span");
    station.className = "case-block-route-station";
    station.textContent = String(index + 1).padStart(2, "0");

    rail.appendChild(railPath);
    rail.appendChild(station);
    article.appendChild(rail);
  }

  const copy = document.createElement("div");
  copy.className = "case-block-copy";

  const number = document.createElement("span");
  number.className = "case-block-index";
  number.textContent = String(index + 1).padStart(2, "0");
  number.setAttribute("aria-hidden", "true");
  copy.appendChild(number);

  if (!isBlank(block.claim)) {
    const claim = document.createElement("p");
    claim.className = "case-block-claim";
    claim.textContent = safeText(block.claim);
    copy.appendChild(claim);
  }

  if (!isBlank(block.headline)) {
    const headline = document.createElement("h3");
    headline.className = "case-block-headline";
    headline.textContent = safeText(block.headline);
    copy.appendChild(headline);
  }

  if (!isBlank(block.body)) {
    const body = document.createElement("p");
    body.className = "case-block-body";
    body.textContent = safeText(block.body);
    copy.appendChild(body);
  }

  const labels = renderEditorialLabels(block.labels);
  if (labels) copy.appendChild(labels);

  const stats = renderEditorialStats(block.stats);
  if (stats) copy.appendChild(stats);

  const media = document.createElement("div");
  media.className = "case-block-media";

  const caseStorySection = document.getElementById("caseStory");
  const hideImageMarkersForRouteMap = caseStorySection && caseStorySection.dataset.editorialVariant === "routeMapEditorial";
  const imageMarkers = hideImageMarkersForRouteMap ? [] : block.markers;

  const dominant = renderEditorialVisual(block.dominantVisual, imageMarkers);
  if (dominant) media.appendChild(dominant);

  if (!hideImageMarkersForRouteMap) {
    const mobileMarkers = renderCaseMarkerList(block.markers);
    if (mobileMarkers) media.appendChild(mobileMarkers);
  }

  const support = renderEditorialSupportVisuals(block.supportVisuals);
  if (support) media.appendChild(support);

  const detailCrops = renderEditorialDetailCrops(block.detailCrops);
  if (detailCrops) media.appendChild(detailCrops);

  article.appendChild(copy);
  article.appendChild(media);

  if (!dominant && !support && !detailCrops) {
    article.classList.add("case-block-no-visual");
  }

  return article;
}
function renderEditorialVisual(visual, markers = []) {
  if (!visual || typeof visual !== "object") return null;

  if (visual.type === "compare" && typeof createCompareBlock === "function") {
    return createCompareBlock(visual, getBasePath());
  }

  if (isBlank(visual.src)) return null;

  const frame = document.createElement("figure");
  frame.className = "case-visual-frame";

  const img = document.createElement("img");
  img.className = "case-visual-img";
  img.src = normalizePath(visual.src, getBasePath());
  img.alt = safeText(visual.alt || "");
  img.loading = "lazy";
  img.decoding = "async";

  img.addEventListener("error", () => {
    frame.remove();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, { once: true });

  img.addEventListener("load", () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, { once: true });

  frame.appendChild(img);

  const markerLayer = renderCaseMarkers(markers);
  if (markerLayer) frame.appendChild(markerLayer);

  return frame;
}
function renderEditorialLabels(labels) {
  const values = Array.isArray(labels)
    ? labels.filter(label => !isBlank(label)).slice(0, 5)
    : [];

  if (!values.length) return null;

  const wrap = document.createElement("div");
  wrap.className = "case-block-labels";

  values.forEach(value => {
    const item = document.createElement("span");
    item.className = "case-block-label";
    item.textContent = safeText(value);
    wrap.appendChild(item);
  });

  return wrap;
}
function renderEditorialStats(stats) {
  const values = Array.isArray(stats)
    ? stats.filter(stat => {
        if (!stat || (isBlank(stat.value) && isBlank(stat.label))) return false;
        return !["proves", "shows", "open"].includes(safeText(stat.value).trim().toLowerCase());
      }).slice(0, 3)
    : [];

  if (!values.length) return null;

  const wrap = document.createElement("div");
  wrap.className = "case-block-stats";

  values.forEach(stat => {
    const card = document.createElement("div");
    card.className = "case-block-stat";

    const normalizedValue = safeText(stat.value).trim().toLowerCase();
    if (normalizedValue === "10/15") card.classList.add("case-block-stat-score-high");
    if (normalizedValue === "7/15") card.classList.add("case-block-stat-score-medium");
    if (normalizedValue === "3/15") card.classList.add("case-block-stat-score-low");

    if (!isBlank(stat.value)) {
      const value = document.createElement("span");
      value.className = "case-block-stat-value";
      value.textContent = safeText(stat.value);
      card.appendChild(value);
    }

    if (!isBlank(stat.label)) {
      const label = document.createElement("span");
      label.className = "case-block-stat-label";
      label.textContent = safeText(stat.label);
      card.appendChild(label);
    }

    wrap.appendChild(card);
  });

  return wrap;
}

function renderEditorialScope(scopeItems) {
  const values = Array.isArray(scopeItems)
    ? scopeItems.filter(item => item && (!isBlank(item.title) || !isBlank(item.text))).slice(0, 3)
    : [];

  if (!values.length) return null;

  const wrap = document.createElement("div");
  wrap.className = "case-scope-grid";

  values.forEach(item => {
    const card = document.createElement("div");
    card.className = "case-scope-item";

    const title = document.createElement("h4");
    title.className = "case-scope-title";
    title.textContent = safeText(item.title);

    const text = document.createElement("p");
    text.className = "case-scope-text";
    text.textContent = safeText(item.text);

    card.appendChild(title);
    card.appendChild(text);
    wrap.appendChild(card);
  });

  return wrap;
}
function renderEditorialSupportVisuals(supportVisuals) {
  return null;
}
function renderEditorialDetailCrops(detailCrops) {
  const values = Array.isArray(detailCrops)
    ? detailCrops.filter(crop => crop && !isBlank(crop.label)).slice(0, 5)
    : [];

  if (!values.length) return null;

  const wrap = document.createElement("div");
  wrap.className = "case-detail-crops";

  values.forEach(crop => {
    const item = document.createElement("span");
    item.className = "case-detail-crop";
    item.textContent = safeText(crop.label);
    if (!isBlank(crop.source)) item.title = safeText(crop.source);
    wrap.appendChild(item);
  });

  return wrap;
}
function shouldUseDbGuideMarkers() {
  const section = document.getElementById("caseStory");
  const isRouteEditorial = section && section.dataset.editorialVariant === "routeMapEditorial";
  return Boolean(isRouteEditorial);
}
function getDbGuideMarkerType(marker) {
  if (!marker || typeof marker !== "object") return "line";

  if (marker.type === "circle") return "circle";
  if (marker.type === "underline") return "underline";
  if (marker.type === "divider") return "divider";

  return "line";
}
function renderCaseMarkers(markers) {
  const values = normalizeCaseMarkers(markers);
  if (!values.length) return null;

  const useDbGuideMarkers = shouldUseDbGuideMarkers();
  const layer = document.createElement("div");
  layer.className = useDbGuideMarkers
    ? "case-marker-layer case-marker-layer-db-guide"
    : "case-marker-layer";
  layer.setAttribute("aria-hidden", "true");

  values.forEach(marker => {
    const visualType = useDbGuideMarkers ? getDbGuideMarkerType(marker) : marker.type;
    const item = document.createElement("span");
    item.className = useDbGuideMarkers
      ? `case-marker case-marker-${visualType} case-marker-db-guide-item`
      : `case-marker case-marker-${visualType}`;

    item.style.setProperty("--case-marker-x", marker.x);
    item.style.setProperty("--case-marker-y", marker.y);
    item.style.setProperty("--case-marker-w", marker.w);
    item.style.setProperty("--case-marker-h", marker.h);

    if (!isBlank(marker.label)) {
      item.dataset.markerLabel = marker.label;
      item.setAttribute("aria-label", marker.label);
      item.title = marker.label;
    }

    if (!useDbGuideMarkers && (marker.type === "chip" || marker.type === "note")) {
      item.textContent = marker.label;
    }

    layer.appendChild(item);
  });

  return layer;
}
function renderCaseMarkerList(markers) {
  const values = normalizeCaseMarkers(markers);
  if (!values.length) return null;

  const list = document.createElement("div");
  list.className = "case-marker-list";

  values.forEach(marker => {
    if (isBlank(marker.label)) return;

    const item = document.createElement("span");
    item.className = "case-marker-list-item";
    item.textContent = safeText(marker.label);
    list.appendChild(item);
  });

  return list.children.length ? list : null;
}

function normalizeCaseMarkers(markers) {
  const allowedTypes = ["circle", "line", "plus", "underline", "chip", "note", "divider"];

  return (Array.isArray(markers) ? markers : [])
    .filter(marker => marker && typeof marker === "object")
    .slice(0, 4)
    .map(marker => {
      const type = allowedTypes.includes(marker.type) ? marker.type : "note";

      return {
        type,
        x: clampMarkerValue(marker.x, 0),
        y: clampMarkerValue(marker.y, 0),
        w: clampMarkerValue(marker.w, type === "line" || type === "divider" ? 18 : 12),
        h: clampMarkerValue(marker.h, type === "line" || type === "divider" ? 2 : 8),
        label: safeText(marker.label)
      };
    });
}

function clampMarkerValue(value, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(0, Math.min(100, number));
}

function initCaseWowFactor(project) {
  const editorial = getEditorialConfig(project);
  const section = document.getElementById("caseStory");

  if (!editorial || !section || section.hidden) return;

  cleanupCaseStoryScrollTriggers();

  const wow = editorial.wowFactor || {};
  const module = safeText(wow.module).trim();

  if (prefersReducedMotion || !window.gsap || !window.ScrollTrigger) {
    section.classList.add("case-story-reduced-motion");
    initStaticCaseStory(section);
    return;
  }

  section.classList.remove("case-story-reduced-motion");

  const config = {
    idPrefix: `caseStory:${safeText(project.slug || "project")}`,
    wow
  };

  if (module === "growingLine") {
    initGrowingLine(section, config);
    return;
  }

  if (module === "stickyReveal") {
    initStickyReveal(section, config);
    return;
  }

  if (module === "layerToggle") {
    initLayerToggle(section, config);
    return;
  }

  if (module === "stateMorph") {
    initStateMorph(section, config);
    return;
  }

  initStaticCaseStory(section);
}
function initGrowingLine(container, config = {}) {
  if (!container || !window.gsap || !window.ScrollTrigger) return;

  const blockPaths = qsa("[data-case-block-route-path]", container);
  const line = qs("[data-case-route-line]", container);
  const blocks = qsa("[data-case-block]", container);

  if (blockPaths.length) {
    initAlternatingBlockRails(container, config);
    return;
  }

  if (!line || !blocks.length) {
    initStaticCaseStory(container);
    return;
  }

  gsap.set(line, {
    scaleY: 0,
    opacity: 1,
    transformOrigin: "top center",
    force3D: true
  });

  ScrollTrigger.create({
    id: `${config.idPrefix || "caseStory"}:growingLine`,
    trigger: container,
    start: "top 72%",
    end: "bottom 84%",
    scrub: true,
    invalidateOnRefresh: true,
    animation: gsap.to(line, {
      scaleY: 1,
      ease: "none"
    })
  });

  blocks.forEach((block, index) => {
    const revealItems = qsa(".case-marker, .case-block-label, .case-support-visual, .case-block-stat", block);
    if (!revealItems.length) return;

    gsap.set(revealItems, {
      opacity: 0,
      y: 18,
      force3D: true
    });

    gsap.to(revealItems, {
      opacity: 1,
      y: 0,
      duration: .55,
      ease: "power2.out",
      stagger: .035,
      scrollTrigger: {
        id: `${config.idPrefix || "caseStory"}:block:${index + 1}`,
        trigger: block,
        start: "top 68%",
        once: true
      }
    });
  });
}

function initAlternatingBlockRails(container, config = {}) {
  const paths = qsa("[data-case-block-route-path]", container);
  const blocks = qsa("[data-case-block]", container);

  if (!paths.length || !blocks.length) {
    initStaticCaseStory(container);
    return;
  }

  paths.forEach((path, index) => {
    gsap.set(path, {
      scaleY: 0,
      opacity: 1,
      transformOrigin: "top center",
      force3D: true
    });

    ScrollTrigger.create({
      id: `${config.idPrefix || "caseStory"}:blockRail:${index + 1}`,
      trigger: path.closest("[data-case-block]") || path,
      start: "top 72%",
      end: "bottom 58%",
      scrub: true,
      invalidateOnRefresh: true,
      animation: gsap.to(path, {
        scaleY: 1,
        ease: "none"
      })
    });
  });

  blocks.forEach((block, index) => {
    const revealItems = qsa(".case-marker, .case-block-label, .case-support-visual, .case-block-stat", block);
    if (!revealItems.length) return;

    gsap.set(revealItems, {
      opacity: 0,
      y: 18,
      force3D: true
    });

    gsap.to(revealItems, {
      opacity: 1,
      y: 0,
      duration: .55,
      ease: "power2.out",
      stagger: .035,
      scrollTrigger: {
        id: `${config.idPrefix || "caseStory"}:block:${index + 1}`,
        trigger: block,
        start: "top 68%",
        once: true
      }
    });
  });
}

function initStickyReveal(container, config = {}) {
  initStaticCaseStory(container, config);
}

function initLayerToggle(container, config = {}) {
  initStaticCaseStory(container, config);
}

function initStateMorph(container, config = {}) {
  initStaticCaseStory(container, config);
}

function initStaticCaseStory(container) {
  if (!container) return;

  qsa(".case-route-line, .case-block-route-path, .case-block, .case-marker, .case-block-label, .case-support-visual, .case-block-stat", container).forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
}

function refreshCaseStoryAfterImages(container) {
  if (!container) return;

  const refresh = debounce(() => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, 80);

  const images = qsa("img", container);
  let pending = images.filter(img => !img.complete).length;

  if (!pending) {
    requestAnimationFrame(refresh);
    return;
  }

  images.forEach(img => {
    if (img.complete) return;

    const done = () => {
      pending -= 1;
      if (pending <= 0) refresh();
    };

    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });

  window.setTimeout(refresh, 1200);
}
function createProjectMediaItem(item, base = getBasePath()) {
  if (!item) return null;
  if (item.type === "video") return createCustomVideoBlock(item, base);
  if (item.type === "compare") return createCompareBlock(item, base);
  if (isBlank(item.src)) return null;

  const img = document.createElement("img");
  img.src = normalizePath(item.src, base);
  img.alt = safeText(item.alt);
  img.loading = "lazy";
  img.decoding = "async";

  img.addEventListener("load", () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, { once: true });

  img.addEventListener("error", () => {
    const row = img.closest(".image-row");
    img.remove();
    if (row && !row.querySelector("img, video, .custom-video, .compare-tabs")) row.remove();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, { once: true });

  return img;
}

function createCustomVideoBlock(item, base = getBasePath()) {
  if (!item || isBlank(item.src)) return null;

  const template = document.createElement("template");
  const atmospheric = safeText(item.fit || item.presentation || item.mediaStyle).toLowerCase() === "cover"
    || safeText(item.presentation).toLowerCase() === "atmospheric";

  template.innerHTML = `
    <div class="custom-video${atmospheric ? " is-atmospheric" : ""}" data-custom-video>
      <video
        class="custom-video-media"
        playsinline
        preload="metadata"
        disablepictureinpicture
        disableremoteplayback
        controlslist="nodownload noplaybackrate noremoteplayback"
      ></video>

      <button class="custom-video-play" type="button" aria-label="Play video">
        <span class="play-blob">
          <span class="play-icon"></span>
        </span>
      </button>

      <div class="custom-video-controls">
        <button class="video-toggle-btn" type="button" aria-label="Play video" aria-pressed="false">
          <span class="video-toggle-icon" aria-hidden="true">▶</span>
        </button>

        <input class="video-progress" type="range" min="0" max="100" value="0" step="0.1" aria-label="Video progress">

        <div class="video-volume" data-volume-control>
          <button class="video-volume-btn" type="button" aria-label="Mute video" aria-pressed="false">
            <svg class="volume-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path class="volume-speaker" d="M4 9.5H8L13 5V19L8 14.5H4V9.5Z" />
              <path class="volume-wave volume-wave-one" d="M16 9C17 10 17 14 16 15" />
              <path class="volume-wave volume-wave-two" d="M18.5 6.5C21 9 21 15 18.5 17.5" />
              <path class="volume-muted-line" d="M5 5L19 19" />
            </svg>
          </button>

          <div class="volume-popover">
            <input class="volume-slider" type="range" min="0" max="1" step="0.01" value="1" aria-label="Volume">
          </div>
        </div>

        <span class="video-time">0:00</span>
      </div>
    </div>
  `;

  const block = template.content.firstElementChild;
  const video = qs("video", block);

  video.src = normalizePath(item.src, base);
  video.setAttribute("aria-label", safeText(item.alt || "Project video"));

  return block;
}

function createCompareBlock(item, base = getBasePath()) {
  if (!item || isBlank(item.before) || isBlank(item.after)) return null;

  const projectSlug = document.body.dataset.projectSlug || "";
  const isDBProject = normalizeSlug(projectSlug) === "dbnavigatorredesign";
  const beforeLabel = item.beforeLabel || (isDBProject ? "Darkmode" : "Before");
  const afterLabel = item.afterLabel || (isDBProject ? "Lightmode" : "After");

  const group = document.createElement("div");
  group.className = "compare-tabs";
  group.dataset.compareTabs = "";

  const controls = document.createElement("div");
  controls.className = "compare-tabs-controls";
  controls.setAttribute("role", "tablist");

  const afterButton = createCompareButton("after", afterLabel, true);
  const beforeButton = createCompareButton("before", beforeLabel, false);
  controls.appendChild(afterButton);
  controls.appendChild(beforeButton);

  const panels = document.createElement("div");
  panels.className = "compare-tabs-panels";
  panels.appendChild(createComparePanel("after", item.after, item.altAfter, true, base));
  panels.appendChild(createComparePanel("before", item.before, item.altBefore, false, base));

  group.appendChild(controls);
  group.appendChild(panels);

  return group;
}

function createCompareButton(target, label, isActive) {
  const button = document.createElement("button");
  button.className = `compare-tab-btn${isActive ? " active" : ""}`;
  button.dataset.target = target;
  button.setAttribute("aria-selected", String(isActive));
  button.type = "button";
  button.textContent = label;
  return button;
}

function createComparePanel(name, src, alt, isActive, base = getBasePath()) {
  const panel = document.createElement("div");
  panel.className = `compare-tab-panel${isActive ? " active" : ""}`;
  panel.dataset.panel = name;
  panel.hidden = !isActive;

  const row = document.createElement("div");
  row.className = "image-row one";

  const img = document.createElement("img");
  img.src = normalizePath(src, base);
  img.alt = safeText(alt);
  img.loading = "lazy";
  img.decoding = "async";

  row.appendChild(img);
  panel.appendChild(row);
  return panel;
}

function isPlaceholderExtraImage(project, image) {
  const slug = normalizeSlug(project.slug);
  const src = safeText(image && image.src).toLowerCase();
  const alt = safeText(image && image.alt).toLowerCase();
  const pointsToStoreGuide = src.includes("/store guide/") || src.includes("projects/store guide");
  const saysStoreGuide = alt.includes("store guide");

  return slug !== "storeguide" && pointsToStoreGuide && saysStoreGuide;
}

function getProjectSliderImages(project) {
  const detail = project.detail || {};
  const editorialImages = Array.isArray(detail.editorialArtDirectedCaseStudyImages)
    ? detail.editorialArtDirectedCaseStudyImages.filter(image => image && !isBlank(image.src))
    : [];

  if (editorialImages.length) return editorialImages;

  const extraImages = Array.isArray(detail.extraImages)
    ? detail.extraImages.filter(image => image && !isBlank(image.src) && !isPlaceholderExtraImage(project, image))
    : [];

  return extraImages;
}

function renderProjectExtraSlider(project) {
  const projectDetailSection = qs(".project-detail-section");
  let extraRectEl = document.getElementById("projectExtraRect");

  if (!extraRectEl && projectDetailSection) {
    extraRectEl = document.createElement("section");
    extraRectEl.id = "projectExtraRect";
    projectDetailSection.insertAdjacentElement("afterend", extraRectEl);
  }

  if (!extraRectEl) return;

  const sliderImages = getProjectSliderImages(project);

  if (!sliderImages.length) {
    extraRectEl.hidden = true;
    removeChildren(extraRectEl);
    return;
  }

  extraRectEl.hidden = false;
  removeChildren(extraRectEl);

  const sliderWrap = document.createElement("div");
  sliderWrap.className = "project-extra-slider-wrap";

  const leftArrow = createExtraArrow("project-extra-arrow-left", "Previous image", "←");
  const rightArrow = createExtraArrow("project-extra-arrow-right", "Next image", "→");

  const extraRect = document.createElement("div");
  extraRect.className = "project-extra-rect";

  const track = document.createElement("div");
  track.className = "project-extra-track";

  const base = getBasePath();

  sliderImages.forEach(image => {
    const item = document.createElement("figure");
    item.className = "project-extra-item";

    const img = document.createElement("img");
    img.className = "project-extra-img";
    img.src = normalizePath(image.src, base);
    img.alt = safeText(image.alt);
    img.loading = "lazy";
    img.decoding = "async";
    img.draggable = false;

    item.appendChild(img);
    track.appendChild(item);
  });

  extraRect.appendChild(track);
  sliderWrap.appendChild(leftArrow);
  sliderWrap.appendChild(extraRect);
  sliderWrap.appendChild(rightArrow);
  extraRectEl.appendChild(sliderWrap);

  initExtraImageSlider(sliderWrap);
}

function createExtraArrow(className, label, text) {
  const button = document.createElement("button");
  button.className = `project-extra-arrow ${className}`;
  button.type = "button";
  button.setAttribute("aria-label", label);
  button.textContent = text;
  return button;
}

/* EXTRA IMAGE SLIDER */
function initExtraImageSlider(sliderWrap) {
  if (!sliderWrap) return;

  if (sliderWrap._sliderCleanup) sliderWrap._sliderCleanup();

  const track = qs(".project-extra-track", sliderWrap);
  const items = qsa(".project-extra-item", sliderWrap);
  const leftArrow = qs(".project-extra-arrow-left", sliderWrap);
  const rightArrow = qs(".project-extra-arrow-right", sliderWrap);

  if (!track || !items.length || !leftArrow || !rightArrow) return;

  let currentIndex = 0;
  let scrollRaf = null;
  const controller = new AbortController();

  function getMaxScroll() {
    return Math.max(0, track.scrollWidth - track.clientWidth);
  }

  function getNearestIndex() {
    const trackCenter = track.scrollLeft + track.clientWidth / 2;

    let nearestIndex = 0;
    let nearestDistance = Infinity;

    items.forEach((item, index) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(itemCenter - trackCenter);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }

  function updateArrows() {
    const maxScroll = getMaxScroll();
    const atStart = track.scrollLeft <= 2;
    const atEnd = track.scrollLeft >= maxScroll - 2;

    currentIndex = getNearestIndex();

    leftArrow.hidden = atStart || maxScroll <= 2;
    rightArrow.hidden = atEnd || maxScroll <= 2;

    leftArrow.setAttribute("aria-hidden", String(leftArrow.hidden));
    rightArrow.setAttribute("aria-hidden", String(rightArrow.hidden));
  }

  function scrollToImage(index, behavior = "smooth") {
    currentIndex = Math.max(0, Math.min(index, items.length - 1));
    const item = items[currentIndex];

    const targetScroll = currentIndex === 0
      ? 0
      : item.offsetLeft + item.offsetWidth / 2 - track.clientWidth / 2;

    track.scrollTo({
      left: Math.max(0, Math.min(targetScroll, getMaxScroll())),
      behavior
    });

    window.setTimeout(updateArrows, behavior === "smooth" ? 420 : 0);
  }

  leftArrow.addEventListener("click", () => {
    scrollToImage(currentIndex - 1);
  }, { signal: controller.signal });

  rightArrow.addEventListener("click", () => {
    scrollToImage(currentIndex + 1);
  }, { signal: controller.signal });

  track.addEventListener("scroll", () => {
    if (scrollRaf) return;

    scrollRaf = requestAnimationFrame(() => {
      updateArrows();
      scrollRaf = null;
    });
  }, { passive: true, signal: controller.signal });

  window.addEventListener("resize", debounce(() => {
    scrollToImage(currentIndex, "auto");
    updateArrows();
  }, 120), { signal: controller.signal });

  items.forEach(item => {
    const img = qs("img", item);

    if (img && !img.complete) {
      img.addEventListener("load", () => {
        scrollToImage(currentIndex, "auto");
        updateArrows();
      }, {
        once: true,
        signal: controller.signal
      });
    }
  });

  sliderWrap._sliderCleanup = () => {
    controller.abort();
    if (scrollRaf) cancelAnimationFrame(scrollRaf);
  };

  scrollToImage(0, "auto");
  updateArrows();
}

/* FILTERS */
function initFilters() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  const projectItems = qsa(".project-item", projectsGrid);
  const originalOrder = [...projectItems];
  const filterBtns = qsa(".filter-btn, .archive-type-option").filter(btn => btn.dataset.filterValue || btn.dataset.filter);
  const showAllBtn = document.getElementById("showAllBtn");
  const typeToggle = qs("[data-type-toggle]");
  const typeToggleWrap = qs(".archive-type-toggle");
  const yearToggle = qs("[data-year-sort-toggle]");
  const yearToggleWrap = qs(".archive-year-toggle");
  const yearChoiceButtons = qsa("[data-year-sort-choice]");

  const totalCountEl = document.getElementById("totalCount");
  const visibleCountEl = document.getElementById("visibleCount");
  const hiddenCountEl = document.getElementById("hiddenCount");

  originalOrder.forEach((item, index) => {
    item.dataset.originalIndex = String(index);
  });

  const params = new URLSearchParams(window.location.search);
  const activeFilters = {
    category: params.get("category") || params.get("filter") || null,
    level: params.get("level") || null
  };

  let yearSort = params.get("sort") === "oldest" ? "oldest" : "newest";

  function hasActiveFilters() {
    return Object.values(activeFilters).some(Boolean);
  }

  function getButtonGroup(btn) {
    return btn.dataset.filterGroup || "category";
  }

  function getButtonValue(btn) {
    return btn.dataset.filterValue || btn.dataset.filter || "all";
  }

  function getItemYear(item) {
    const year = Number(item.dataset.year);
    return Number.isFinite(year) ? year : 0;
  }

  function sortItemsByYear() {
    const sortedItems = [...originalOrder].sort((a, b) => {
      const yearA = getItemYear(a);
      const yearB = getItemYear(b);
      const indexA = Number(a.dataset.originalIndex) || 0;
      const indexB = Number(b.dataset.originalIndex) || 0;

      if (yearA !== yearB) {
        return yearSort === "oldest" ? yearA - yearB : yearB - yearA;
      }

      return indexA - indexB;
    });

    sortedItems.forEach(item => projectsGrid.appendChild(item));
  }

  function updateTypeToggleState() {
    if (!typeToggle || !typeToggleWrap) return;

    const activeType = activeFilters.level || "all";
    typeToggleWrap.dataset.typeState = activeType === "Team Project" ? "team" : activeType === "Independent Project" ? "independent" : "all";
    typeToggle.setAttribute("aria-pressed", String(activeType === "Team Project"));
    typeToggle.setAttribute("aria-label", activeType === "Team Project" ? "Show independent projects" : "Show team projects");
  }

  function updateYearToggleState() {
    if (!yearToggleWrap) return;

    yearToggleWrap.dataset.yearState = yearSort;

    if (yearToggle) {
      yearToggle.setAttribute("aria-pressed", String(yearSort === "oldest"));
    }

    yearChoiceButtons.forEach(button => {
      const isActive = button.dataset.yearSortChoice === yearSort;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function updateButtonStates() {
    filterBtns.forEach(btn => {
      const group = getButtonGroup(btn);
      const value = getButtonValue(btn);
      const isAllButton = value === "all";
      const isActive = isAllButton ? !activeFilters[group] : activeFilters[group] === value;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    updateTypeToggleState();
    updateYearToggleState();

    if (showAllBtn) {
      showAllBtn.classList.toggle("active", !hasActiveFilters() && yearSort === "newest");
      showAllBtn.setAttribute("aria-pressed", String(!hasActiveFilters() && yearSort === "newest"));
    }
  }

  function updateStats() {
    const total = projectItems.length;
    const visible = projectItems.filter(item => !item.classList.contains("hide")).length;
    const hidden = total - visible;

    if (totalCountEl) totalCountEl.textContent = String(total);
    if (visibleCountEl) visibleCountEl.textContent = String(visible);
    if (hiddenCountEl) hiddenCountEl.textContent = String(hidden);
  }

  function restoreOriginalOrder() {
    originalOrder.forEach(item => projectsGrid.appendChild(item));
  }

  function syncUrl() {
    const nextUrl = new URL(window.location.href);

    Object.entries(activeFilters).forEach(([group, value]) => {
      if (value) nextUrl.searchParams.set(group, value);
      else nextUrl.searchParams.delete(group);
    });

    if (yearSort === "oldest") nextUrl.searchParams.set("sort", "oldest");
    else nextUrl.searchParams.delete("sort");

    nextUrl.searchParams.delete("filter");
    nextUrl.searchParams.delete("year");
    window.history.replaceState({}, "", nextUrl.toString());
  }

  function itemMatchesFilter(item, group, value) {
    if (!value) return true;

    if (group === "category") {
      return (item.dataset.category || "").split("|").filter(Boolean).includes(value);
    }

    return safeText(item.dataset[group]).trim() === value;
  }

  function applyFilters(updateUrl = false) {
    sortItemsByYear();

    projectItems.forEach(item => {
      const match = Object.entries(activeFilters).every(([group, value]) => itemMatchesFilter(item, group, value));
      item.classList.toggle("hide", !match);
      item.setAttribute("aria-hidden", String(!match));
    });

    updateButtonStates();
    updateStats();
    if (updateUrl) syncUrl();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const group = getButtonGroup(btn);
      const value = getButtonValue(btn);

      activeFilters[group] = value === "all" || activeFilters[group] === value ? null : value;
      applyFilters(true);
    });
  });

  if (typeToggle) {
    typeToggle.addEventListener("click", () => {
      activeFilters.level = activeFilters.level === "Team Project" ? "Independent Project" : "Team Project";
      applyFilters(true);
    });
  }

  yearChoiceButtons.forEach(button => {
    button.addEventListener("click", () => {
      yearSort = button.dataset.yearSortChoice === "oldest" ? "oldest" : "newest";
      applyFilters(true);
    });
  });

  if (yearToggle) {
    yearToggle.addEventListener("click", () => {
      yearSort = yearSort === "oldest" ? "newest" : "oldest";
      applyFilters(true);
    });
  }

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      Object.keys(activeFilters).forEach(group => {
        activeFilters[group] = null;
      });

      yearSort = "newest";
      restoreOriginalOrder();
      applyFilters(true);
    });
  }

  restoreOriginalOrder();
  applyFilters(false);

  if (hasActiveFilters()) {
    const section = document.getElementById("filters");
    if (section) {
      window.setTimeout(() => section.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" }), 100);
    }
  }
}

/* COMPARE TABS */
function initCompareTabs() {
  qsa("[data-compare-tabs]").forEach(group => {
    if (group.dataset.compareReady) return;
    group.dataset.compareReady = "true";

    const buttons = qsa(".compare-tab-btn", group);
    const panels = qsa(".compare-tab-panel", group);

    function activateTab(target) {
      buttons.forEach(button => {
        const isActive = button.dataset.target === target;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach(panel => {
        const isActive = panel.dataset.panel === target;
        panel.classList.toggle("active", isActive);
        panel.hidden = !isActive;
      });
    }

    buttons.forEach(button => {
      button.addEventListener("click", () => activateTab(button.dataset.target));

      button.addEventListener("keydown", event => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

        event.preventDefault();

        const currentIndex = buttons.indexOf(button);
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (currentIndex + direction + buttons.length) % buttons.length;
        const nextButton = buttons[nextIndex];

        nextButton.focus();
        activateTab(nextButton.dataset.target);
      });
    });
  });
}
function initProjectImagePreview(root = document) {
  const previewImages = qsa(`
    .project-detail-section .project-images img,
    .project-detail-section .compare-tab-panel img,
    .project-detail-section .before-after-slider img,
    .case-story-section .case-visual-img,
    .case-story-section .case-story-fullbleed-img,
    .case-story-section .compare-tab-panel img,
    .case-story-section .before-after-slider img
  `, root).filter(image => {
    if (!image || !image.src) return false;
    if (image.closest("#projectCoverBanner")) return false;
    if (image.closest(".project-card")) return false;
    if (image.closest(".other-projects-section")) return false;
    return true;
  });

  if (!previewImages.length) return;

  let preview = document.querySelector(".project-image-preview");

  if (!preview) {
    preview = document.createElement("div");
    preview.className = "project-image-preview";
    preview.setAttribute("aria-hidden", "true");
    preview.setAttribute("role", "dialog");
    preview.setAttribute("aria-modal", "true");
    preview.setAttribute("aria-label", "Image preview");
    preview.tabIndex = -1;

    const inner = document.createElement("div");
    inner.className = "project-image-preview-inner";

    const closeButton = document.createElement("button");
    closeButton.className = "project-image-preview-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Close image preview");
    closeButton.textContent = "×";

    const image = document.createElement("img");
    image.className = "project-image-preview-img";
    image.alt = "";

    inner.appendChild(closeButton);
    inner.appendChild(image);
    preview.appendChild(inner);
    document.body.appendChild(preview);

    preview._returnFocus = null;

    preview._closePreview = function closePreview() {
      if (!preview.classList.contains("is-visible")) return;
      preview.classList.remove("is-visible");
      preview.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-project-image-preview-open");
      const returnTarget = preview._returnFocus;
      preview._returnFocus = null;
      if (returnTarget && document.contains(returnTarget)) returnTarget.focus();
    };

    closeButton.addEventListener("click", preview._closePreview);
    inner.addEventListener("click", event => event.stopPropagation());
    preview.addEventListener("click", event => {
      if (event.target === preview) preview._closePreview();
    });

    document.addEventListener("keydown", event => {
      if (!preview.classList.contains("is-visible")) return;

      if (event.key === "Escape") {
        event.preventDefault();
        preview._closePreview();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = qsa('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])', preview)
        .filter(item => item.offsetParent !== null);
      if (!focusable.length) {
        event.preventDefault();
        preview.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  const previewImage = qs(".project-image-preview-img", preview);
  const closeButton = qs(".project-image-preview-close", preview);

  previewImages.forEach(image => {
    if (image.dataset.projectPreviewReady) return;
    image.dataset.projectPreviewReady = "true";

    // Each image is its own preview trigger. Shared rows and sliders must never redirect a click to a sibling image.
    const trigger = image;

    trigger.setAttribute("tabindex", "0");
    trigger.setAttribute("role", "button");
    trigger.setAttribute("aria-haspopup", "dialog");
    trigger.setAttribute("aria-label", image.alt ? `Open image preview: ${image.alt}` : "Open image preview");

    function openPreview() {
      preview._returnFocus = trigger;
      previewImage.src = image.currentSrc || image.src;
      previewImage.alt = image.alt || "";
      preview.classList.add("is-visible");
      preview.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-project-image-preview-open");
      requestAnimationFrame(() => closeButton?.focus());
    }

    trigger.addEventListener("click", event => {
      event.preventDefault();
      openPreview();
    });

    trigger.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openPreview();
    });
  });
}
/* SMOOTH SCROLL */
function registerScrollTrigger() {
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
}

function initSmoothScroll() {
  if (prefersReducedMotion || !window.Lenis || !window.gsap || !window.ScrollTrigger) return;

  lenis = new Lenis({
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5,
    infinite: false
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add(time => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

function initScrollToTop() {
  const button = qs("#toTop");
  if (!button) return;

  button.type = "button";
  button.setAttribute("aria-label", "Back to top");
  button.innerHTML = '<span class="to-top-icon" aria-hidden="true">↑</span><span class="to-top-label">Back to top</span>';

  button.addEventListener("click", () => {
    if (lenis && !prefersReducedMotion) {
      lenis.scrollTo(0, { duration: 1.2 });
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  });
}

/* SCROLL REVEAL */
const SCROLL_REVEAL_DEFAULTS = {
  enableBlur: true,
  baseOpacity: 0.12,
  baseRotation: 2,
  blurStrength: 4,
  wordStagger: 0.018,
  rotationStart: "top bottom",
  rotationEnd: "center 70%",
  wordStart: "top 85%",
  wordEnd: "center 62%",
  scroller: window
};

function applyReducedMotionState() {
  qsa(".reveal-title, .reveal-text, .reveal-list-item").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  });

  qsa(".project-item").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.transition = "none";
  });
}

function splitScrollRevealText(el) {
  if (!el || el.dataset.scrollRevealReady) return;

  const originalText = el.textContent;
  const parts = originalText.split(/(\s+)/);
  const fragment = document.createDocumentFragment();

  parts.forEach(part => {
    if (/^\s+$/.test(part)) {
      fragment.appendChild(document.createTextNode(part));
      return;
    }

    const span = document.createElement("span");
    span.className = "word";
    span.textContent = part;
    fragment.appendChild(span);
  });

  removeChildren(el);
  el.appendChild(fragment);
  el.dataset.scrollRevealReady = "true";
}

function createScrollReveal(el, options = {}) {
  if (!el || prefersReducedMotion || !window.gsap || !window.ScrollTrigger) return;

  const settings = { ...SCROLL_REVEAL_DEFAULTS, ...options };
  splitScrollRevealText(el);

  const words = qsa(".word", el);
  if (!words.length) return;

  const shouldRotate = !el.classList.contains("reveal-list-item");

  if (shouldRotate && settings.baseRotation !== 0) {
    gsap.fromTo(el, {
      transformOrigin: "0% 50%",
      rotate: settings.baseRotation
    }, {
      rotate: 0,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        scroller: settings.scroller,
        start: settings.rotationStart,
        end: settings.rotationEnd,
        scrub: true
      }
    });
  }

  gsap.fromTo(words, {
    opacity: settings.baseOpacity,
    filter: settings.enableBlur ? `blur(${settings.blurStrength}px)` : "blur(0px)"
  }, {
    opacity: 1,
    filter: "blur(0px)",
    stagger: settings.wordStagger,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      scroller: settings.scroller,
      start: settings.wordStart,
      end: settings.wordEnd,
      scrub: true
    }
  });
}

function initMotionSystem() {
  if (prefersReducedMotion) {
    applyReducedMotionState();
    return;
  }

  if (!window.gsap || !window.ScrollTrigger) return;

  qsa(".reveal-title").forEach(el => {
    createScrollReveal(el, {
      baseOpacity: 0.06,
      baseRotation: 3,
      blurStrength: 8,
      wordStagger: 0.025,
      wordStart: "top 88%",
      wordEnd: "center 68%",
      rotationEnd: "center 70%"
    });
  });

  qsa(".reveal-text").forEach(el => {
    createScrollReveal(el, {
      baseOpacity: 0.14,
      baseRotation: 1.5,
      blurStrength: 4,
      wordStagger: 0.014,
      wordStart: "top 86%",
      wordEnd: "center 64%",
      rotationEnd: "center 72%"
    });
  });

  qsa(".reveal-list-item").forEach(el => {
    createScrollReveal(el, {
      baseOpacity: 0.12,
      baseRotation: 0,
      blurStrength: 3,
      wordStagger: 0.018,
      wordStart: "top 88%",
      wordEnd: "center 70%"
    });
  });

  ScrollTrigger.refresh();
}

/* HOVER AND POP IN */
function canUseFineHover() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function initHoverEffects() {
  if (prefersReducedMotion || !canUseFineHover()) return;

  qsa(".projects-grid, .other-projects-grid").forEach(grid => {
    const items = qsa(".project-item", grid);
    if (!items.length) return;

    items.forEach(item => {
      if (item.dataset.hoverReady) return;
      item.dataset.hoverReady = "true";

      const card = qs(".project-card", item);
      if (!card) return;

      item.addEventListener("mouseenter", () => {
        grid.classList.add("has-hover");
        item.classList.add("is-active");
        card.classList.add("is-hovered");
      });

      item.addEventListener("mouseleave", () => {
        item.classList.remove("is-active");
        card.classList.remove("is-hovered");

        if (!qsa(".project-item.is-active", grid).length) {
          grid.classList.remove("has-hover");
        }
      });
    });
  });

  initCasePreviewCursor();
}

function initCasePreviewCursor() {
  if (prefersReducedMotion || !canUseFineHover() || document.body.dataset.casePreviewReady) return;

  const items = qsa(".project-item[data-preview]").filter(item => !isBlank(item.dataset.preview));
  if (!items.length) return;

  document.body.dataset.casePreviewReady = "true";

  const preview = document.createElement("div");
  preview.className = "case-preview-layer";
  preview.setAttribute("aria-hidden", "true");

  const image = document.createElement("img");
  image.className = "case-preview-image";
  image.alt = "";

  preview.appendChild(image);
  document.body.appendChild(preview);

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;

  function animate() {
    currentX += (targetX - currentX) * 0.16;
    currentY += (targetY - currentY) * 0.16;
    preview.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    rafId = requestAnimationFrame(animate);
  }

  function move(event) {
    targetX = event.clientX + 22;
    targetY = event.clientY + 22;
  }

  function show(item, event) {
    image.src = item.dataset.preview;
    currentX = event.clientX + 22;
    currentY = event.clientY + 22;
    targetX = currentX;
    targetY = currentY;
    preview.classList.add("is-visible");
    if (!rafId) rafId = requestAnimationFrame(animate);
  }

  function hide() {
    preview.classList.remove("is-visible");
  }

  items.forEach(item => {
    item.addEventListener("mouseenter", event => show(item, event));
    item.addEventListener("mousemove", move);
    item.addEventListener("mouseleave", hide);
  });
}

function initProjectPopIn() {
  const projectItems = qsa(".project-item");

  if (prefersReducedMotion) {
    projectItems.forEach(el => {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.transition = "none";
    });
    return;
  }

  projectItems.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";

    window.setTimeout(() => {
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, i * 80);
  });
}

/* STAMP IMAGES */
function initStampImages() {
  if (!window.gsap || !window.ScrollTrigger) return;

  const section = qs("#transformativeCreativity");
  if (!section) return;

  const frame = qs(".dc-content-frame", section);
  const layers = gsap.utils.toArray(qsa(".dc-image-layer", section));
  const images = layers.map(layer => qs("img", layer)).filter(Boolean);
  const typeStage = qs(".dc-type-stage", section);

  if (!frame || layers.length < 2) return;

  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.id === "stampImages" || trigger.vars.id === "shutterImages") {
      trigger.kill();
    }
  });

  gsap.killTweensOf(layers);
  gsap.killTweensOf(images);

  const CONFIG = {
    holdDuration: 1.35,
    stampDuration: 1.15,
    scrollPerUnit: 420,
    enterX: -90,
    enterY: 90,
    enterScale: 1.18,
    overshootX: -10,
    overshootY: 10,
    overshootScale: 1.32,
    finalScale: 1,
    imageScale: 1.04,
    topTextMove: 260,
    bottomTextMove: -260
  };

  gsap.set(layers, {
    autoAlpha: 0,
    xPercent: CONFIG.enterX,
    yPercent: CONFIG.enterY,
    scale: CONFIG.enterScale,
    transformOrigin: "0% 100%",
    force3D: true,
    zIndex: index => index + 1
  });

  gsap.set(layers[0], {
    autoAlpha: 1,
    xPercent: 0,
    yPercent: 0,
    scale: CONFIG.finalScale
  });

  gsap.set(images, {
    scale: CONFIG.imageScale,
    transformOrigin: "center center",
    force3D: true
  });

  if (prefersReducedMotion) return;

  const tl = gsap.timeline({ defaults: { ease: "none" }, paused: true });
  tl.addLabel("image-0", 0);

  for (let index = 1; index < layers.length; index++) {
    const layer = layers[index];
    const image = qs("img", layer);

    tl.to({}, { duration: CONFIG.holdDuration });

    tl.set(layer, {
      autoAlpha: 1,
      xPercent: CONFIG.enterX,
      yPercent: CONFIG.enterY,
      scale: CONFIG.enterScale,
      zIndex: index + 1,
      transformOrigin: "0% 100%"
    });

    tl.fromTo(layer, {
      xPercent: CONFIG.enterX,
      yPercent: CONFIG.enterY,
      scale: CONFIG.enterScale
    }, {
      xPercent: CONFIG.overshootX,
      yPercent: CONFIG.overshootY,
      scale: CONFIG.overshootScale,
      duration: CONFIG.stampDuration * 0.45,
      ease: "power2.out"
    });

    tl.to(layer, {
      xPercent: 0,
      yPercent: 0,
      scale: CONFIG.finalScale,
      duration: CONFIG.stampDuration * 0.55,
      ease: "power3.out"
    });

    if (image) {
      tl.fromTo(image, { scale: 1.1 }, {
        scale: CONFIG.imageScale,
        duration: CONFIG.stampDuration,
        ease: "power2.out"
      }, "<-" + CONFIG.stampDuration);
    }

    tl.addLabel(`image-${index}`);
  }

  if (typeStage) {
    tl.to(typeStage, {
      "--word-top-scroll": `${CONFIG.topTextMove}px`,
      "--word-bottom-scroll": `${CONFIG.bottomTextMove}px`,
      duration: tl.duration(),
      ease: "none"
    }, 0);
  }

  ScrollTrigger.create({
    id: "stampImages",
    trigger: section,
    start: "top top",
    end: () => "+=" + tl.duration() * CONFIG.scrollPerUnit,
    scrub: 1.15,
    pin: frame,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    animation: tl
  });
}

/* CUSTOM VIDEOS */
function initCustomVideos() {
  qsa("[data-custom-video]").forEach(block => {
    if (block.dataset.videoReady) return;
    block.dataset.videoReady = "true";

    const video = qs(".custom-video-media", block);
    const playButton = qs(".custom-video-play", block);
    const blob = qs(".play-blob", block);
    const progress = qs(".video-progress", block);
    const toggleButton = qs(".video-toggle-btn", block);
    const toggleIcon = qs(".video-toggle-icon", block);
    const controls = qs(".custom-video-controls", block);
    const time = qs(".video-time", block);
    const volumeButton = qs(".video-volume-btn", block);
    const volumeSlider = qs(".volume-slider", block);
    const hasGsap = Boolean(window.gsap);

    if (!video || !playButton) return;

    if (!blob || !progress || !controls || !time || !toggleButton || !volumeButton || !volumeSlider) {
      video.setAttribute("controls", "controls");
      return;
    }

    video.removeAttribute("controls");
    video.disablePictureInPicture = true;
    video.disableRemotePlayback = true;
    video.setAttribute("controlsList", "nodownload noplaybackrate noremoteplayback");

    video.addEventListener("contextmenu", event => event.preventDefault());

    let controlsTimeout = null;
    let blobReturnTween = null;
    let blobFollowTween = null;
    let fillExitTimeout = null;
    let fillResetTimeout = null;
    let previousVolume = 1;

    const FILL_EXIT_DURATION = 780;
    const FILL_RESET_DELAY = 180;
    const FILL_AFTER_BLOB_DELAY = 260;

    video.volume = 1;
    video.muted = false;
    volumeSlider.value = "1";

    function formatTime(seconds) {
      if (!Number.isFinite(seconds)) return "0:00";
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
      return `${minutes}:${remainingSeconds}`;
    }

    function showControls() {
      controls.hidden = false;
      block.classList.add("is-controls-visible");
      clearTimeout(controlsTimeout);

      if (!video.paused) {
        controlsTimeout = setTimeout(() => {
          block.classList.remove("is-controls-visible");
        }, 2200);
      }
    }

    function hideControls() {
      if (video.paused) {
        controls.hidden = false;
        block.classList.add("is-controls-visible");
        return;
      }

      block.classList.remove("is-controls-visible");

      window.setTimeout(() => {
        if (!block.classList.contains("is-controls-visible")) controls.hidden = true;
      }, 280);
    }

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function killBlobTweens() {
      if (blobReturnTween) blobReturnTween.kill();
      if (blobFollowTween) blobFollowTween.kill();
      blobReturnTween = null;
      blobFollowTween = null;
    }

    function setBlobAngle(angle) {
      const inverse = Number.isFinite(angle) ? angle * -1 : 0;
      return {
        "--blob-angle": `${angle || 0}rad`,
        "--blob-angle-inverse": `${inverse}rad`
      };
    }

    function setBlobVars(vars) {
      Object.entries(vars).forEach(([key, value]) => blob.style.setProperty(key, String(value)));
    }

    function startFillHover() {
      clearTimeout(fillExitTimeout);
      clearTimeout(fillResetTimeout);
      block.classList.remove("is-fill-exiting", "is-fill-resetting");
      block.classList.add("is-video-hovered");
    }

    function playFillExit() {
      clearTimeout(fillExitTimeout);
      clearTimeout(fillResetTimeout);
      block.classList.remove("is-fill-exiting", "is-fill-resetting");
      block.classList.add("is-video-hovered");
      void block.offsetWidth;
      block.classList.remove("is-video-hovered");
      block.classList.add("is-fill-exiting");

      fillExitTimeout = setTimeout(() => {
        block.classList.remove("is-fill-exiting");
        block.classList.add("is-fill-resetting");

        fillResetTimeout = setTimeout(() => {
          block.classList.remove("is-fill-resetting");
        }, FILL_RESET_DELAY);
      }, FILL_EXIT_DURATION);
    }

    function resetBlob(animate = true) {
      if (!block.classList.contains("is-fill-exiting")) block.classList.remove("is-near");
      killBlobTweens();

      const vars = {
        "--pull-x": "0px",
        "--pull-y": "0px",
        "--blob-scale-x": 1,
        "--blob-scale-y": 1,
        ...setBlobAngle(0)
      };

      if (!hasGsap) {
        setBlobVars(vars);
        return;
      }

      blobFollowTween = gsap.to(blob, {
        duration: animate ? 0.2 : 0,
        ...vars,
        ease: "power3.out",
        overwrite: "auto"
      });
    }

    function releaseBlobFromVideoEdge(event, onSettled = null) {
      const rect = block.getBoundingClientRect();
      const videoCenterX = rect.left + rect.width / 2;
      const videoCenterY = rect.top + rect.height / 2;
      const edgeX = clamp(event.clientX, rect.left, rect.right);
      const edgeY = clamp(event.clientY, rect.top, rect.bottom);
      const dx = edgeX - videoCenterX;
      const dy = edgeY - videoCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 1 || !hasGsap) {
        resetBlob(true);
        if (typeof onSettled === "function") onSettled();
        return;
      }

      const dirX = dx / distance;
      const dirY = dy / distance;
      const maxDistance = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));
      const edgeStrength = Math.min(distance / maxDistance, 1);
      const startPull = 46 + edgeStrength * 20;
      const overshootPull = 6 + edgeStrength * 4;

      killBlobTweens();
      block.classList.add("is-near");

      gsap.set(blob, {
        "--pull-x": `${dirX * startPull}px`,
        "--pull-y": `${dirY * startPull}px`,
        "--blob-scale-x": 1.06,
        "--blob-scale-y": 1.06,
        ...setBlobAngle(0)
      });

      blobReturnTween = gsap.timeline({
        defaults: { overwrite: true },
        onComplete: () => {
          block.classList.remove("is-near");
          if (typeof onSettled === "function") onSettled();
        }
      });

      blobReturnTween
        .to(blob, {
          duration: 0.48,
          "--pull-x": `${dirX * -overshootPull}px`,
          "--pull-y": `${dirY * -overshootPull}px`,
          "--blob-scale-x": 0.98,
          "--blob-scale-y": 0.98,
          ...setBlobAngle(0),
          ease: "power3.out"
        })
        .to(blob, {
          duration: 0.82,
          "--pull-x": "0px",
          "--pull-y": "0px",
          "--blob-scale-x": 1,
          "--blob-scale-y": 1,
          ...setBlobAngle(0),
          ease: "power4.out"
        });
    }

    function updateVolumeUI(animateSlider = true) {
      const isMuted = video.muted || video.volume === 0;
      const visibleVolume = isMuted ? 0 : video.volume;

      block.classList.toggle("is-muted", isMuted);
      volumeButton.setAttribute("aria-pressed", String(isMuted));
      volumeButton.setAttribute("aria-label", isMuted ? "Unmute video" : "Mute video");

      if (animateSlider && hasGsap) {
        gsap.to(volumeSlider, { duration: 0.28, value: visibleVolume, ease: "power2.out" });
      } else {
        volumeSlider.value = String(visibleVolume);
      }
    }

    async function playVideo() {
      try {
        await video.play();
      } catch (error) {
        warnLog("Video could not play:", error);
      }
    }

    function toggleVideo() {
      if (video.paused) playVideo();
      else video.pause();
    }

    function updatePlaybackUI() {
      const isPlaying = !video.paused && !video.ended;
      toggleButton.setAttribute("aria-pressed", String(isPlaying));
      toggleButton.setAttribute("aria-label", isPlaying ? "Pause video" : "Play video");
      if (toggleIcon) toggleIcon.textContent = isPlaying ? "Ⅱ" : "▶";
      playButton.setAttribute("aria-label", isPlaying ? "Pause video" : "Play video");
    }

    playButton.addEventListener("click", event => {
      event.preventDefault();
      toggleVideo();
    });

    toggleButton.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      toggleVideo();
      showControls();
    });

    block.addEventListener("click", event => {
      if (event.target.closest(".custom-video-play") || event.target.closest(".custom-video-controls")) return;
      toggleVideo();
    });

    volumeButton.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      if (video.muted || video.volume === 0) {
        video.muted = false;
        video.volume = previousVolume || 0.8;
      } else {
        previousVolume = video.volume > 0 ? video.volume : previousVolume;
        video.muted = true;
      }

      updateVolumeUI(true);
      showControls();
    });

    volumeSlider.addEventListener("input", event => {
      event.stopPropagation();
      const nextVolume = Number(volumeSlider.value);
      video.volume = nextVolume;
      video.muted = nextVolume === 0;
      if (nextVolume > 0) previousVolume = nextVolume;
      updateVolumeUI(false);
      showControls();
    });

    ["click", "pointerdown"].forEach(type => {
      volumeSlider.addEventListener(type, event => event.stopPropagation());
    });

    video.addEventListener("play", () => {
      clearTimeout(fillExitTimeout);
      clearTimeout(fillResetTimeout);
      block.classList.add("is-playing");
      block.classList.remove("is-near", "is-video-hovered", "is-fill-exiting", "is-fill-resetting");
      controls.hidden = false;
      updatePlaybackUI();
      showControls();
    });

    video.addEventListener("pause", () => {
      block.classList.remove("is-playing");
      updatePlaybackUI();
      showControls();
      resetBlob();
    });

    video.addEventListener("ended", () => {
      block.classList.remove("is-playing");
      updatePlaybackUI();
      progress.value = 0;
      video.currentTime = 0;
      hideControls();
      resetBlob();
    });

    video.addEventListener("loadedmetadata", () => {
      time.textContent = "0:00";
      controls.hidden = false;
      updatePlaybackUI();
      showControls();
    });

    video.addEventListener("timeupdate", () => {
      if (!video.duration) return;
      progress.value = (video.currentTime / video.duration) * 100;
      time.textContent = formatTime(video.currentTime);
    });

    progress.addEventListener("input", () => {
      if (!video.duration) return;
      video.currentTime = (progress.value / 100) * video.duration;
      showControls();
    });

    block.addEventListener("mouseenter", () => {
      if (!block.classList.contains("is-playing")) startFillHover();
      if (!video.paused) showControls();
    });

    block.addEventListener("mousemove", event => {
      showControls();
      if (block.classList.contains("is-playing")) return;

      const buttonRect = playButton.getBoundingClientRect();
      const centerX = buttonRect.left + buttonRect.width / 2;
      const centerY = buttonRect.top + buttonRect.height / 2;
      const dx = event.clientX - centerX;
      const dy = event.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const deadZone = 46;
      const influenceRadius = 260;

      if (distance < deadZone || distance > influenceRadius || !hasGsap) {
        resetBlob(true);
        return;
      }

      if (blobReturnTween) {
        blobReturnTween.kill();
        blobReturnTween = null;
      }

      const rawStrength = (distance - deadZone) / (influenceRadius - deadZone);
      const strength = Math.pow(rawStrength, 0.85);
      const angle = Math.atan2(dy, dx);
      const pullX = dx * strength * 0.3;
      const pullY = dy * strength * 0.3;
      const scaleX = 1 + strength * 0.28;
      const scaleY = 1 - strength * 0.14;

      block.classList.add("is-near");

      blobFollowTween = gsap.to(blob, {
        duration: 0.24,
        "--pull-x": `${pullX}px`,
        "--pull-y": `${pullY}px`,
        "--blob-scale-x": scaleX,
        "--blob-scale-y": scaleY,
        ...setBlobAngle(angle),
        ease: "power3.out",
        overwrite: "auto"
      });
    });

    block.addEventListener("mouseleave", event => {
      if (!block.classList.contains("is-playing")) {
        releaseBlobFromVideoEdge(event, () => {
          window.setTimeout(() => {
            if (!block.matches(":hover") && !block.classList.contains("is-playing")) {
              playFillExit();
            }
          }, FILL_AFTER_BLOB_DELAY);
        });
      }

      if (!video.paused) hideControls();
    });

    controls.hidden = false;
    updatePlaybackUI();
    updateVolumeUI(false);
    showControls();
  });
}

/* HERO */
function cloneHeroOutlineLayer() {
  const fillGrid = document.getElementById("heroGridFill");
  const outlineGrid = document.getElementById("heroGridOutline");

  if (!fillGrid || !outlineGrid || outlineGrid.dataset.ready) return;

  outlineGrid.innerHTML = fillGrid.innerHTML;
  outlineGrid.dataset.ready = "true";
}

function initHeroRollSync() {
  const section = qs(".hero-grid-section");
  if (!section || section.dataset.rollSyncReady) return;

  section.dataset.rollSyncReady = "true";

  if (prefersReducedMotion) {
    section.style.setProperty("--hero-roll-y", "0em");
    return;
  }

  const duration = 6200;
  const delay = 1150;
  const startTime = performance.now();

  let rafId = null;
  let isActive = false;

  function easeInOut(t) {
    return 0.5 - Math.cos(Math.PI * t) / 2;
  }

  function getRollValue(progress) {
    if (progress <= 0.36) return 0;

    if (progress <= 0.46) {
      const localProgress = (progress - 0.36) / 0.10;
      return -easeInOut(localProgress);
    }

    if (progress <= 0.82) return -1;

    if (progress <= 0.92) {
      const localProgress = (progress - 0.82) / 0.10;
      return -1 - easeInOut(localProgress);
    }

    return -2;
  }

  function update(now) {
    if (!isActive) return;

    const elapsed = now - startTime - delay;

    if (elapsed < 0) {
      section.style.setProperty("--hero-roll-y", "0em");
      rafId = requestAnimationFrame(update);
      return;
    }

    const progress = (elapsed % duration) / duration;
    const y = getRollValue(progress);
    section.style.setProperty("--hero-roll-y", `${y}em`);

    rafId = requestAnimationFrame(update);
  }

  function start() {
    if (isActive && rafId) return;
    isActive = true;
    rafId = requestAnimationFrame(update);
  }

  function stop() {
    isActive = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry && entry.isIntersecting) start();
      else stop();
    }, { rootMargin: "300px 0px" });

    observer.observe(section);
  } else {
    start();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });
}

function initHeroDecryptAnimation() {
  const nodes = qsa("[data-hero-decrypt]");
  if (!nodes.length) return;

  const groups = new Map();

  nodes.forEach(node => {
    const key = node.dataset.heroDecrypt;
    const text = node.dataset.heroText || node.textContent.trim();
    node.dataset.heroText = text;

    if (!groups.has(key)) groups.set(key, { text, nodes: [] });
    groups.get(key).nodes.push(node);
  });

  groups.forEach(group => {
    group.nodes.forEach(node => {
      node.textContent = group.text;
    });
  });

  if (prefersReducedMotion) return;

  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()_+";

  function randomChar() {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  function scrambleText(text, revealedCount) {
    return text.split("").map((char, index) => {
      if (char === " ") return " ";
      if (index < revealedCount) return char;
      return randomChar();
    }).join("");
  }

  Array.from(groups.values()).forEach((group, groupIndex) => {
    const { text, nodes: groupNodes } = group;
    const stepSize = Math.max(1, Math.ceil(text.length / 12));
    const startDelay = 120 + groupIndex * 85;

    groupNodes.forEach(node => {
      node.textContent = scrambleText(text, 0);
    });

    window.setTimeout(() => {
      let revealedCount = 0;

      const interval = window.setInterval(() => {
        revealedCount = Math.min(text.length, revealedCount + stepSize);
        const nextText = revealedCount >= text.length ? text : scrambleText(text, revealedCount);

        groupNodes.forEach(node => {
          node.textContent = nextText;
        });

        if (revealedCount >= text.length) {
          window.clearInterval(interval);
          groupNodes.forEach(node => {
            node.textContent = text;
          });
        }
      }, 42);
    }, startDelay);
  });
}
function initProjectScrollIndicator() {
  if (document.querySelector(".project-scroll-indicator")) return;

  const indicator = document.createElement("div");
  indicator.className = "project-scroll-indicator";
  indicator.setAttribute("aria-hidden", "true");

  const fill = document.createElement("div");
  fill.className = "project-scroll-fill";

  const percent = document.createElement("span");
  percent.className = "project-scroll-percent";
  percent.textContent = "0%";

  indicator.appendChild(fill);
  indicator.appendChild(percent);
  document.body.appendChild(indicator);

  let ticking = false;

  function update() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, scrollTop / maxScroll));
    const roundedProgress = Math.round(progress * 100);

    indicator.style.setProperty("--project-scroll-progress", progress.toFixed(4));
    percent.textContent = `${roundedProgress}%`;

    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  update();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("load", requestUpdate);
}

function renderSelectedWorks() {
  const grid = document.getElementById("selectedWorksGrid");
  if (!grid) return;

  const projects = getRenderableProjects();
  if (!projects.length) {
    warnLog("projectsData is not loaded or has no renderable projects");
    return;
  }

  const slugs = ["dazn", "bodique", "DBNavigatorRedesign"];
  const base = getBasePath();

  removeChildren(grid);
  const fragment = document.createDocumentFragment();

  slugs.forEach(slug => {
    const project = projects.find(p => normalizeSlug(p.slug) === normalizeSlug(slug));
    if (project) fragment.appendChild(createProjectCard(project, base));
  });

  grid.appendChild(fragment);
}
/* INIT */
document.addEventListener("DOMContentLoaded", () => {
  registerScrollTrigger();

  loadNavbar();
  setActiveNav();
  initThemeToggle();
  initMobileMenu();
  initNavbarScrollState();
  initProjectScrollIndicator();

  cloneHeroOutlineLayer();
  initHeroDecryptAnimation();
  initHeroRollSync();

  loadFooter();


  setupArchivePageLayout();
  const projectsLoaded = renderProjects();
  if (projectsLoaded) initFilters();

  renderSelectedWorks(); 
  renderProjectDetail();
  renderOtherProjects();
  initCompareTabs();
  initCustomVideos();

  initSmoothScroll();
  initStampImages();
  initMotionSystem();
  initHoverEffects();
  initProjectPopIn();
  initScrollToTop();


  requestAnimationFrame(() => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
});
