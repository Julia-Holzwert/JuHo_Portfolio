const projectsData = {
  projects: [
    //Heads Up Display
    {
      slug: "offline",
      title: "OFFLINE",
      href: "./projectSites/offline.html",
      categories: ["Spatial Experience"],

      level: "Private",
      coverImage: "./pngs/Projects/Offline/Logo.png",
      coverBannerImage: "./pngs/Projects/Offline/Logo.png",
      coverBackgroundColor: "#ffffff",
      coverZoom: 5,
      imageScale: 1.15,
      cardCategory: "Museum für Kommunikation Berlin X Offline",

      detail: {
        meta: "Independent Exhibition Concept · 2026 · Unofficial Museum für Kommunikation Berlin Exhibition",

        sections: {
          summary: "HeadsUp is an adaptive automotive HUD concept for navigation, calls, setup, rear camera access, and safety warnings. It reduces distraction by showing only situation-relevant information in the driver’s field of view.",

          challenge: "The core challenge was deciding what should disappear. The HUD had to connect phone setup, windshield feedback, device transfer, and safety warnings without creating hesitation or visual overload in a driving context.",

          approach: "I owned the HUD information architecture and interaction logic, translating phone setup, navigation, calls, rear camera access, and safety warnings into task flows and screen states. We tested with 12 participants and found that users hesitated on the start screen due to equal visual weight between setup and transfer actions — leading to a clearer hierarchy, improved wording, and a saved profile overview.",

          creativeDirection: "HeadsUp is positioned as a calm safety interface rather than a futuristic automotive display — clear hierarchy, controlled warning states, direct feedback, and situational modules prioritize understanding over visual impact. Decorative motion and dashboard density were stripped to reduce cognitive load under driving pressure.",

          keyVisualSystem: "The visual system uses Inter for neutral, legible interface typography and a focused color logic where blue marks active guidance, green confirms safe states, and red is reserved for critical warnings only. Module placement is consistent across navigation, calls, and alerts, so drivers never search for information — it appears in predictable zones.",

          result: [
            "System Structuring: I owned HUD information architecture and interaction logic across 5 driving scenarios. ",
            "Validated with 12 drivers: task completion increased 40% after iteration, and setup hesitation dropped to 12% when actions had clear visual hierarchy.",
            "Iteration from Evidence: Test observations revealed that users needed explicit profile confirmation and transfer wording that explained system action.",
            "Constraint-Aware System: Phone setup, HUD display, transfer logic, and safety warnings were designed as one connected flow instead of isolated modules."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "Safety-critical UX depends on subtraction, hierarchy, and confirmation. Users did not need more elements. They needed clearer priorities, stronger feedback, and wording that explained system actions at the exact moment of use. It also clarified my strongest role in group projects: I turn broad requirements, test observations, and scattered prototype feedback into structured flows and interface rules the team can build from."
        }

        ,

        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/HeadsUp/Greeting.jpg",
                alt: "HeadsUp Greeting"
              }
            ]
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/HeadsUp/iPhone 16 - Connect.jpg",
                alt: "HeadsUp amount to display "
              },
              {
                src: "../pngs/Projects/HeadsUp/iPhone 16 - Übertragen.jpg",
                alt: "HeadsUp transfer data app screen"
              }
            ]
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/HeadsUp/iPhone 16 - Amount.jpg",
                alt: "HeadsUp amount to display on hud"
              },
              {
                src: "../pngs/Projects/HeadsUp/iPhone 16 - Speichern 2.jpg",
                alt: "HeadsUp app overview"
              }
            ]
          }
        ],

        editorialArtDirectedCaseStudyImages: [
          {
            src: "./pngs/Projects/HeadsUp/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/HeadsUp/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/HeadsUp/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/HeadsUp/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/HeadsUp/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/HeadsUp/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/HeadsUp/Editorial/Desktop and Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/HeadsUp/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],

        editorial: {
          color: "#00AEEF",

          variant: "routeMapEditorial",

          thesis: "Safety-critical interfaces become stronger when they remove decisions before the driver has to make them.",

          scopeNote: "Group HUD concept from 2025. Evaluated through prototype testing with 12 participants, task-flow iteration, hierarchy review, and warning-state checks. Not a production-ready automotive system.",

          wowFactor: {
            module: "growingLine",
          },

          blocks: [
            {
              claim: "The problem is not missing information. It is too much at the wrong moment.",
              headline: "Driving interfaces fail when they make users search.",
              body: "Drivers need navigation, calls, setup, transfer, rear camera access, and warnings without losing focus. If every action has the same weight, hesitation becomes a safety problem.",
              labels: ["Driving context", "Distraction risk", "Visual overload"]
            },
            {
              claim: "Subtraction over density.",
              headline: "The decision: Show only what the situation needs.",
              body: "Instead of building a futuristic dashboard full of modules, HeadsUp reduces the interface to task-specific states. The HUD reacts to the driving moment, not to decoration.",
              labels: ["Design decision", "Adaptive HUD", "Calm safety interface"]
            },
            {
              claim: "One system connects phone setup, HUD feedback, and driving states.",
              headline: "Layer 1: The HUD becomes a connected flow.",
              body: "Setup, profile selection, data transfer, navigation, calls, rear camera access, and warnings follow one logic. Drivers do not jump between separate systems.",
              labels: ["Phone setup", "HUD display", "Transfer logic", "Warning states"]
            },
            {
              claim: "Users need confirmation before the road takes priority.",
              headline: "Layer 2: Setup becomes explicit before driving.",
              body: "Testing showed hesitation when setup and transfer actions looked equally important. The iteration added clearer wording, stronger hierarchy, and a saved profile overview.",
              labels: ["User testing", "Setup hierarchy", "Profile confirmation"],
              stats: [
                {
                  value: "12",
                  label: "Participants tested"
                },
                {
                  value: "12%",
                  label: "Setup hesitation after iteration"
                },
                {
                  value: "40%",
                  label: "Task completion increase"
                }
              ]
            },
            {
              claim: "Critical details appear only when they matter.",
              headline: "Layer 3: Warning states explain priority without overload.",
              body: "Blue guides active navigation, green confirms safe states, and red is reserved for critical warnings. Drivers learn the priority system without reading the whole interface.",
              labels: ["Blue guidance", "Green confirmation", "Red warnings"]
            },
            {
              claim: "Validated concept. Production risk still open.",
              headline: "Scope: Tested interaction logic, not a road-ready system.",
              body: "HeadsUp shows how an adaptive HUD can reduce hesitation through hierarchy, confirmation, and situational modules. It does not claim regulatory approval, real-road validation, or production implementation.",
              labels: ["Group concept", "Prototype tested", "Not production-ready"],
              stats: [
                {
                  value: "Proves",
                  label: "Hierarchy reduces setup hesitation"
                },
                {
                  value: "Shows",
                  label: "HUD states can stay calm"
                },
                {
                  value: "Open",
                  label: "Road testing and regulation"
                }
              ]
            }
          ]
        }
      }
    },

    //CampusTalk
    {
      slug: "campusTalk",
      title: "CampusTalk",
      href: "./projectSites/campusTalk.html",
      categories: ["Communication System"],

      level: "Group Project",
      coverImage: "./pngs/Projects/CampusTalk/Logo 1.png",
      coverBannerImage: "./pngs/Projects/CampusTalk/Logo 1.png",
      coverBackgroundColor: "linear-gradient(90deg, #2D2077 50%, #35278F 68%)",
      coverZoom: 100,
      imageScale: 3.00,
      cardCategory: "Social media for reflecting prejudice",

      detail: {
        meta: "Group Project from 2025 for 4 Months",

        sections: {
          summary: "CampusTalk is a mobile web app that helps students reflect on prejudice through guided quizzes, anonymous discussion, and curated learning content. The platform avoids accusatory language and uses structured participation to make sensitive topics feel safer and easier to enter.",

          challenge: "The core challenge was reducing defensiveness. Students needed recognition and safe ways to share real experiences, while outsiders needed low pressure entry points that would not make them feel attacked. The second challenge was information overload: too much text, too many features, or an overly moral tone would make users leave before reflection could happen.",

          approach: "I synthesized 12 interviews with students and non-students into 4 distinct personas, then mapped their needs into 5 core content areas: Learn, Reflect, Share Anonymously, Community Forum, and Profile. I designed the homepage topic card structure, quiz flows with progress feedback, anonymous contribution areas with moderation workflows, and privacy-aware profile settings — all based on early card sorting research that showed users preferred guided exploration over open feeds.",

          creativeDirection: "CampusTalk is positioned as a calm credibility space rather than an activist campaign or social network — making participation feel guided and safe instead of confrontational. Loud advocacy aesthetics, technical jargon, and aggressive messaging were avoided because they trigger defensiveness in users who already approach the topic with skepticism or distance.",

          keyVisualSystem: "The visual system uses violet (#6E368C) as the primary identity, giving the platform a reflective and educational character without feeling institutional or political. White content surfaces create calm reading spaces for sensitive topics, while black text and muted gray hierarchy prevent visual noise from interrupting reflection.",

          result: [
            "Content Architecture: Built a structured content architecture from 12 interviews, 4 personas, and card sorting insights.",
            "Guided Participation: Users move through Learn → Reflect → Share flow instead of unstructured community exploration.",
            "Evidence-Based Iteration: Card sorting research revealed users preferred guided topic cards over open feeds, leading to a structured discovery model. ",
            "Tonal Direction: Avoided activist language and technical complexity; every label and CTA was tested for emotional neutrality."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "Designing for prejudice is less about explaining more and more about lowering resistance. The strongest decisions were structural and tonal: reduce overload, make participation safe, avoid accusatory language, and guide users through small moments of reflection. It also clarified my strongest role in group projects. I work best when I turn messy research, sensitive context, and many feature ideas into a clear system the team can build from."
        },


        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/CampusTalk/Games.jpg",
                alt: "CampusTalk desktop quiz overview"
              }
            ]
          },
          {
            layout: "two",
            items: [
              {
                src: "../pngs/Projects/CampusTalk/Create Topic.jpg",
                alt: "CampusTalk add a post on mobile"
              },
              {
                src: "../pngs/Projects/CampusTalk/Game(2).jpg",
                alt: "CampusTalk mobile quiz frontpage"
              }
            ]
          },

          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/CampusTalk/Forum, übersicht über alle topics, (allgemeiner Feed).jpg",
                alt: "CampusTalk desktop forum"
              }
            ]
          }
        ],
        editorialArtDirectedCaseStudyImages: [
          {
            src: "./pngs/Projects/CampusTalk/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/CampusTalk/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/CampusTalk/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/CampusTalk/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/CampusTalk/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/CampusTalk/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/CampusTalk/Editorial/Desktop and Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/CampusTalk/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#6E368C",
          variant: "routeMapEditorial",

          thesis: "Sensitive topics become easier to enter when reflection feels guided, not confrontational.",

          scopeNote: "Group communication concept from 2025. Built from 12 interviews, 4 personas, card sorting insights, content architecture, and tone review. No live community testing was conducted.",

          wowFactor: {
            module: "growingLine"
          },

          blocks: [
            {
              claim: "The problem is defensiveness before reflection can start.",
              headline: "Students need safety before they share honestly.",
              body: "Prejudice is personal, sensitive, and easy to reject when the interface sounds accusatory. CampusTalk lowers the entry barrier through calm language, guided topics, and anonymous participation.",
              labels: ["Sensitive context", "Student voices", "Low-pressure entry"]
            },
            {
              claim: "Guidance over confrontation.",
              headline: "The decision: Structure participation before discussion.",
              body: "Instead of opening with an unfiltered feed, users move through Learn, Reflect, and Share. The platform gives users a path before asking them to take a position.",
              labels: ["Design decision", "Guided flow", "Reflection first"]
            },
            {
              claim: "Five content areas turn a sensitive topic into a usable system.",
              headline: "Layer 1: The platform becomes structured.",
              body: "Learn, Reflect, Share Anonymously, Community Forum, and Profile separate different participation needs. Users can read, think, contribute, or discuss without being pushed into one mode.",
              labels: ["Learn", "Reflect", "Share", "Forum", "Profile"]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "Critical constraint",
              "headline": "Too much text or moral pressure would stop reflection early.",
              "body": "The concept had to explain prejudice without using an accusatory tone. Content density, feature count and wording were treated as participation barriers.",
              "labels": [
                "Tone",
                "Content density",
                "Defensiveness"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "My contribution",
              "headline": "I translated 12 interviews into a structured content model.",
              "body": "I synthesized the interviews into four personas and mapped their needs into Learn, Reflect, Share Anonymously, Community Forum and Profile.",
              "labels": [
                "12 interviews",
                "Four personas",
                "Five content areas"
              ],
              "stats": [
                {
                  value: "12",
                  label: "Interviews synthesized"
                },
                {
                  value: "4",
                  label: "Personas created"
                },
                {
                  value: "5",
                  label: "Core content areas"
                }
              ]
            },
            {
              claim: "Depth appears after trust is built.",
              headline: "Layer 3: Quizzes and anonymous posts create safer reflection.",
              body: "Quizzes use progress feedback to make reflection feel contained. Anonymous sharing lets users contribute real experiences without exposing themselves immediately.",
              labels: ["Quiz flow", "Anonymous sharing", "Moderation logic"]
            },
            {
              claim: "Research-backed concept. Live validation still open.",
              headline: "Scope: Structured concept, not a tested community product.",
              body: "CampusTalk shows how tone, content architecture, and guided participation can reduce resistance around prejudice. It does not claim measured behavior change, long-term moderation success, or live platform validation.",
              labels: ["Group concept", "Research-based", "No live testing"],
              stats: [
                {
                  value: "Proves",
                  label: "Structure lowers entry pressure"
                },
                {
                  value: "Shows",
                  label: "Tone can reduce defensiveness"
                },
                {
                  value: "Open",
                  label: "Live testing and moderation"
                }
              ]
            }
          ]
        }
      }
    },

    //Après
    {
      slug: "Après",
      title: "Après",
      href: "./projectSites/Après.html",
      categories: ["Service Experience"],

      level: "Private",
      coverImage: "./pngs/Projects/Aprés/Frame 59 1.png",
      coverBannerImage: "./pngs/Projects/Aprés/Frame 59 1.png",
      coverBackgroundColor: "#F4EFE5",
      coverZoom: 70,
      imageScale: 2.30,
      cardCategory: "Post-Purchase experience",

      detail: {
        meta: "Independent Concept Project from 2026",
        sections: {
          summary: "“Buying a luxury watch is just the start — the real experience happens after the purchase.” Most apps focus on the “Buy” button, leaving customers anxious about tracking, returns, and support. In 2026, a premium post-purchase experience isn’t optional — it defines the brand. ",
          challenge: "Making post-purchase simple, transparent, and reassuring. Customers often struggle with unclear tracking updates, slow or complicated returns, and limited support. Critical flows like “My package missing” create frustration and stress. For a luxury brand, this uncertainty undermines trust and loyalty, especially for German customers accustomed to precision, while still needing to resonate globally. ",
          approach: "I designed the complete post-purchase flow across 6 screens: dashboard, tracking, alert states, return flow, care guide, and warranty management. The 3D tracker shows every stage from Bavarian workshop to doorstep; alerts combine color, icon, and microcopy for accessibility; and return management simplifies handoff through step-by-step guidance and pickup scheduling.",

          creativeDirection: "Après positions post-purchase care as luxury service, not logistics. The design prioritizes reassurance over information density — using calm alerts, generous spacing, consistent navigation, and a warm color system that echoes Bavarian craftsmanship instead of corporate efficiency. Every decision reinforces trust: customers feel guided, not transactional.",
          keyVisualSystem: "Color system uses Tannengrün (#1A2E1A) for headlines and primary actions, with Cognac (#8B6B47) exclusively for borders and details — avoiding corporate grays. Typographically, Cormorant Garamond gives headlines editorial heritage, while Jost keeps tracking and support microcopy clear and scannable. 8px baseline spacing throughout creates a mathematical precision that feels handcrafted, not mechanical.",
          result: [
            "Real-Time Confidence: The 3D shipment tracker turned uncertainty into clarity, letting customers see exactly where their watch is at every stage, from Bavarian workshop to doorstep.",
            "Proactive Resolution: The “My Package Missing” flow and return concierge anticipate issues before they escalate, giving users clear guidance and fast support.",
            "Global Luxury, Local Precision: The experience balances Bavarian attention to detail with international usability, ensuring customers worldwide feel informed, cared for, and confident.",
            "Post-Purchase as Brand: Every interaction after checkout reinforces trust and loyalty, making post-purchase care a defining part of the luxury experience rather than an afterthought. "
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Most designers focus on the 'Buy' button, but few address the 'My package missing' flow. This project taught me that post-purchase experience is where luxury brands prove they care — and that trust is built through clarity, not complexity."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Aprés/Post-Purchase Landing.png",
                alt: "Aprés desktop Post-Purchase Landing"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/Aprés/3D Shipment Tracker.png",
                alt: "Aprés mobile 3D Shipment Tracker"
              },
              {
                src: "../pngs/Projects/Aprés/My Package Missing_ Flow.png",
                alt: "Aprés mobile My Package Missing Flow"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Aprés/Proaktiver Alert (Zollverzögerung).png",
                alt: "Aprés desktop proactive alert"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/Aprés/Return Concierge.png",
                alt: "Aprés mobile Return Concierge"
              },
              {
                src: "../pngs/Projects/Aprés/After-Care & Loyalität.png",
                alt: "Aprés mobile after care & loyalty"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/Aprés/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Aprés/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Aprés/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Aprés/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Aprés/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Aprés/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Aprés/Editorial/Desktop and Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Aprés/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#8B6B47",
          variant: "routeMapEditorial",

          thesis: "Luxury trust is built after checkout, when uncertainty turns into guided care.",

          scopeNote: "Independent service concept from 2026. Built through post-purchase journey mapping, alert-state logic, return-flow design, and premium visual system definition. No user testing or live logistics validation was conducted.",

          wowFactor: {
            module: "growingLine"
          },
          "blocks": [
            {
              claim: "The problem starts after the purchase.",
              headline: "Luxury customers lose trust when tracking, returns, and support feel unclear.",
              body: "A customer who just bought a premium watch should not feel anxious about delivery, customs, or returns. Unclear updates turn a luxury moment into a support problem.",
              labels: ["Post-purchase anxiety", "Luxury service", "Support gap"]
            },
            {
              claim: "Care over logistics.",
              headline: "The decision: Treat post-purchase as part of the brand.",
              body: "Instead of ending the experience at checkout, Après turns tracking, alerts, returns, warranty, and care into one guided service flow. The customer feels supported, not handed off.",
              labels: ["Design decision", "Service experience", "Brand trust"]
            },
            {
              claim: "Six screens turn uncertainty into a service system.",
              headline: "Layer 1: The post-purchase journey becomes structured.",
              body: "Dashboard, tracking, alert states, return flow, care guide, and warranty management cover the moments where customers need reassurance most.",
              labels: ["Dashboard", "Tracking", "Returns", "Warranty", "Care"]
            },
            {
              claim: "Customers see progress instead of waiting blindly.",
              headline: "Layer 2: The 3D tracker makes delivery visible.",
              body: "The shipment journey shows each stage from Bavarian workshop to doorstep. Customers can understand where the watch is and what happens next without contacting support.",
              labels: ["3D tracker", "Workshop to doorstep", "Delivery clarity"],
              stats: [
                {
                  value: "6",
                  label: "Core service screens"
                },
                {
                  value: "1",
                  label: "Connected post-purchase flow"
                },
                {
                  value: "24/7",
                  label: "Self-service reassurance"
                }
              ]
            },
            {
              claim: "Problems need guidance, not panic.",
              headline: "Layer 3: Alerts and returns explain the next step.",
              body: "The missing package flow, customs delay alerts, and return concierge give users clear actions before frustration grows. Color, icons, and microcopy support accessibility without making the interface feel technical.",
              labels: ["Missing package", "Proactive alerts", "Return concierge"]
            },
            {
              claim: "Concept first. Service validation still open.",
              headline: "Scope: A premium service concept, not an operational product.",
              body: "Après shows how post-purchase care can become a luxury brand touchpoint through clarity, reassurance, and structured support. It does not claim measured loyalty impact, real logistics integration, or production readiness.",
              labels: ["Independent concept", "Service logic", "No user testing"],
              stats: [
                {
                  value: "Proves",
                  label: "Post-purchase can define trust"
                },
                {
                  value: "Shows",
                  label: "Support flows can feel premium"
                },
                {
                  value: "Open",
                  label: "Testing and logistics validation"
                }
              ]
            }
          ]
        }
      }
    },

    //DAZN
    {
      slug: "dazn",
      title: "DAZN",
      href: "./projectSites/dazn.html",
      categories: ["Interaction System"],

      level: "Private",
      coverImage: "./pngs/Projects/DAZN/DAZN_logo.png",
      coverBannerImage: "./pngs/Projects/DAZN/DAZN_logo.png",
      coverBackgroundColor: "#000000",
      cardCategory: "De-Darking-Subscription-UX",

      detail: {
        meta: "Independent Concept Project from 2026 · Unofficial DAZN Redesign",

        sections: {
          summary:
            "“Users should be able to understand, manage, and end a subscription without friction.” This independent concept redesign examines the DAZN subscription experience through the lens of transparency and user control. It focuses on plan selection, billing clarity, account management, cancellation, and retention offers. The goal was to create a subscription journey that supports conversion while making costs, terms, and exit options easy to understand.",

          challenge:
            "DAZN offers different subscription plans, payment models, and commitment periods. This creates a high-stakes decision for users, especially when price, contract duration, renewal dates, and included sports content need to be compared quickly. The challenge was to simplify the full subscription lifecycle without reducing DAZN’s ability to retain customers, promote relevant plans, and communicate the value of its sports offering.",

          approach:
            "I mapped the journey from plan discovery to cancellation and identified moments where users could lose context or feel pressured. The redesign introduced a central subscription hub that shows the active plan, monthly price, billing cycle, next payment date, commitment period, and available account actions in one place. Plan comparisons use consistent language and a clear overview of included content. Cancellation becomes a direct account action with a visible end date, a clear confirmation state, and optional retention offers that can be skipped without friction. The concept uses plain-language microcopy to explain every financial and contractual decision before users confirm it.",

          creativeDirection:
            "The creative direction reframes DAZN subscription management as a confident and transparent part of the streaming experience. The interface keeps the energy of live sport, but applies it with disciplined hierarchy, direct language, and clear decision points. Subscription information becomes readable at a glance. Prices, contract terms, renewal dates, and cancellation options remain visible instead of being treated as secondary account details. Retention offers appear as optional alternatives, such as pausing, changing plans, or receiving a limited promotion. They never block the user from continuing. The redesign treats clarity as a brand asset. It shows that a premium sports platform can protect revenue while giving users control over their membership.",

          keyVisualSystem:
            "The visual system builds on DAZN’s bold sports identity while introducing a calmer structure for account decisions. Strong black and white contrast creates a direct, high-confidence interface. Bright accent colour is reserved for primary actions, live status, and key subscription information. Large plan cards make price, duration, and included content scannable. Clear spacing separates commercial choices from account controls. Progress indicators, confirmation states, and calm microcopy reduce uncertainty during plan changes and cancellation.",

          result: [
            "Clear Subscription Overview: Users can view their active plan, billing date, payment amount, contract duration, and included content from one account screen.",
            "Transparent Plan Decisions: Monthly and annual options are easier to compare because price, commitment period, renewal behaviour, and included sports content follow one consistent structure.",
            "Respectful Retention Flow: Cancellation remains accessible while downgrade, pause, and offer options are presented as optional alternatives instead of barriers.",
            "Stronger Trust Signal: Direct language and visible account controls position transparency as part of the DAZN product experience.",
            "Business-Aligned UX: The redesign supports conversion and retention through relevant value communication rather than unclear contract details or pressured decision-making."
          ],

          takeawayTitle: "Takeaway",

          takeaway:
            "Subscription UX affects trust long after the checkout flow. Clear pricing, visible contract details, and an accessible cancellation path do not weaken a business model. They create a product experience users can understand, recommend, and return to."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/DAZN/Cancellation Intelligence.png",
                alt: "DAZN Cancellation Intelligence"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/DAZN/Intelligent Alternative - Price.png",
                alt: "DAZN Intelligent Alternative - Price"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/DAZN/Intelligent Alternative - Usage.png",
                alt: "DAZN Intelligent Alternative - Usage"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/DAZN/Transparency Confirmation.png",
                alt: "DAZN Transparency Confirmation"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/DAZN/Informed Decision Summary.png",
                alt: "DAZN Informed Decision Summary"
              }
            ]
          },

        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/DAZN/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/DAZN/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/DAZN/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/DAZN/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/DAZN/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/DAZN/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/DAZN/Editorial/Desktop and Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/DAZN/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#D6FF00",
          variant: "routeMapEditorial",

          thesis: "Subscription trust grows when users can understand, manage, and leave without pressure.",

          scopeNote: "Independent DAZN concept redesign from 2026. Built through subscription journey mapping, cancellation-flow analysis, plan-comparison logic, and transparency-focused microcopy. No user testing or business validation was conducted.",

          wowFactor: {
            module: "growingLine"
          },
          "blocks": [
            {
              claim: "The problem is not the subscription. It is the loss of control.",
              headline: "Users lose trust when costs, terms, and exit options feel unclear.",
              body: "DAZN users compare price, contract length, renewal dates, and included sports under time pressure. If cancellation or billing details feel hidden, the product starts to feel risky.",
              labels: ["Subscription clarity", "Billing trust", "User control"]
            },
            {
              claim: "Transparency over friction.",
              headline: "The decision: Make account control part of the product experience.",
              body: "Instead of using unclear terms or blocked cancellation paths, the redesign keeps plan details, billing dates, and account actions visible. Retention works through relevant alternatives, not pressure.",
              labels: ["Design decision", "Transparent UX", "Respectful retention"]
            },
            {
              claim: "One hub turns the subscription lifecycle into a system.",
              headline: "Layer 1: Plan, billing, and account actions become connected.",
              body: "The subscription hub shows the active plan, monthly price, billing cycle, next payment date, commitment period, and available actions in one place.",
              labels: ["Subscription hub", "Active plan", "Billing cycle", "Account actions"]
            },
            {
              claim: "Users compare plans before they commit.",
              headline: "Layer 2: Plan cards make financial decisions scannable.",
              body: "Monthly and annual options use the same structure for price, duration, renewal behavior, and included sports content. Users can compare value without decoding different wording.",
              labels: ["Plan comparison", "Price clarity", "Included content"],
              stats: [
                {
                  value: "1",
                  label: "Central account hub"
                },
                {
                  value: "3",
                  label: "Retention alternatives"
                },
                {
                  value: "0",
                  label: "Forced cancellation barriers"
                }
              ]
            },
            {
              claim: "Cancellation needs clarity, not guilt.",
              headline: "Layer 3: Retention offers stay optional.",
              body: "Users can pause, downgrade, or accept a relevant offer, but every option can be skipped. The final confirmation shows the end date, remaining access, and billing impact before the user confirms.",
              labels: ["Pause", "Downgrade", "Offer", "End date"]
            },
            {
              claim: "Concept first. Business validation still open.",
              headline: "Scope: A transparency concept, not a tested retention model.",
              body: "This redesign shows how DAZN could protect trust while still supporting conversion and retention. It does not claim measured churn reduction, legal validation, user testing, or production readiness.",
              labels: ["Independent concept", "No user testing", "Unofficial redesign"],
              stats: [
                {
                  value: "Proves",
                  label: "Control can support trust"
                },
                {
                  value: "Shows",
                  label: "Retention can stay respectful"
                },
                {
                  value: "Open",
                  label: "Testing and business impact"
                }
              ]
            }
          ]
        }
      }
    },

    //Bodique
    {
      slug: "bodique",
      title: "Bodique",
      href: "./projectSites/bodique.html",
      categories: ["Product System"],

      level: "Group Project",
      coverImage: "./pngs/Projects/Bodique/Logo.png",
      coverBannerImage: "./pngs/Projects/Bodique/Logo.png",
      coverBackgroundColor: "#FEFEFE",
      coverZoom: 35,
      imageScale: 1.50,
      cardCategory: "Digital-Twin shopping experience",

      detail: {
        meta: "Group Project from Winter Semester 2026 for 4 months",

        sections: {
          summary: "Bodique is a digital twin and virtual try-on experience designed to reduce fashion returns by showing customers their actual size fit before purchase — addressing one of retail's biggest problems: size-related return rates.",

          challenge: "The challenge was addressing a real business problem with high complexity. Fashion has one of the highest return rates, mainly due to fit uncertainty, while users still expect speed, convenience, and trust. At the same time, the team had to align different understandings of the product, manage time pressure, and keep the process structured despite fast project shifts.",

          approach: "I used a Lean UX process: developed 3 competitor hypotheses, tested with 8 participants on digital twin credibility, and iterated based on feedback showing that users prioritized realistic visualization over playful effects. The redesign simplified the interface, moved from a rigid sidebar to modular controls, and added a compact control strip for different guidance levels.",

          creativeDirection: "Bodique is positioned as a precise fitting assistant, not a fashion gimmick or tech showcase. The visual system prioritizes realistic body representation and clear recommendations over impressive effects — because the main barrier to adoption is trust, not entertainment.",
          keyVisualSystem: "Glassmorphism creates soft interface layers while keeping the digital twin and garment in focus. White and gray elements support readability under bright store lighting, while a large central interaction area lets users evaluate fit and silhouette without competing UI elements. Navigation works as full bar or compact movable strip, supporting different levels of guidance preference.",
          result: [
            "Validated Core Value: Users understood the digital twin concept and saw strong potential for reducing size related returns.",
            "Trust as Key Factor: Realistic visualization, recommendation clarity, and careful handling of personal data proved critical for acceptance.",
            "Simplified Experience: Testing led to a leaner and more modular interface that reduced visual overload and improved usability.",
            "Lean UX in Practice: The project demonstrates an iterative, hypothesis driven design process that connects user needs with measurable business impact."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "In fashion, realistic visualization earns trust faster than impressive technology. Users chose size recommendations based on how their body looked, not on the confidence of the algorithm. It also showed that when users have control over the interface (compact vs. full bar), they engage more — and that personal preference matters more than 'best practice'."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                type: "video",
                src: "../pngs/Projects/Bodique/video.mp4",
                alt: "Bodique trailer"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/Bodique/WhatsApp Image 2026-03-27 at 23.13.44.jpeg",
                alt: "Bodique homescreen"
              },
              {
                src: "../pngs/Projects/Bodique/WhatsApp Image 2026-03-28 at 01.17.01.jpeg",
                alt: "Bodique testing insights"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Bodique/WhatsApp Image 2026-03-28 at 01.19.51.jpeg",
                alt: "Bodique interaction screens"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Bodique/WhatsApp Image 2026-03-28 at 01.19.34.jpeg",
                alt: "Bodique brands and clothe preferences"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/Bodique/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Bodique/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Bodique/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Bodique/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Bodique/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Bodique/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Bodique/Editorial/Desktop and Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Bodique/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#8FAF9F",
          variant: "routeMapEditorial",

          thesis: "Fit technology only creates value when users trust what they see before they buy.",

          scopeNote: "Group digital-twin concept from Winter Semester 2026. Built through Lean UX hypotheses, competitor analysis, prototype testing with 8 participants, interface iteration, and trust-focused fit evaluation. No live retail integration or return-rate validation was conducted.",

          wowFactor: {
            module: "growingLine"
          },
          "blocks": [
            {
              claim: "The problem is fit uncertainty before checkout.",
              headline: "Fashion returns happen when customers cannot trust the size decision.",
              body: "Customers want speed, but they still need confidence that the garment fits their real body. If the visualization feels unrealistic, the recommendation loses credibility.",
              labels: ["Fit uncertainty", "Return risk", "Customer trust"]
            },
            {
              claim: "Trust over spectacle.",
              headline: "The decision: Make the digital twin a fitting assistant, not a gimmick.",
              body: "Instead of using playful effects to impress users, Bodique focuses on realistic body representation and clear fit guidance. The interface supports the purchase decision instead of distracting from it.",
              labels: ["Design decision", "Virtual try-on", "Realistic fit"]
            },
            {
              claim: "One system connects body, garment, and recommendation.",
              headline: "Layer 1: The fitting experience becomes structured.",
              body: "The digital twin, garment preview, size recommendation, and control settings work as one product system. Users can judge silhouette, fit, and guidance without switching context.",
              labels: ["Digital twin", "Garment preview", "Size guidance", "Fit logic"]
            },
            {
              claim: "Users need control over how much guidance they see.",
              headline: "Layer 2: Modular controls reduce visual overload.",
              body: "Testing showed that users preferred clear visualization over a dense sidebar. The redesign introduced modular controls and a compact strip for different guidance levels.",
              labels: ["Modular controls", "Compact strip", "Guidance levels"],
              stats: [
                {
                  value: "8",
                  label: "Participants tested"
                },
                {
                  value: "3",
                  label: "Competitor hypotheses"
                },
                {
                  value: "2",
                  label: "Control modes"
                }
              ]
            },
            {
              claim: "Recommendation clarity decides whether users believe the system.",
              headline: "Layer 3: Fit details explain the size decision.",
              body: "Users can compare how the garment sits on their body and understand why a size is recommended. The system makes fit visible before the user has to trust the algorithm.",
              labels: ["Fit preview", "Size recommendation", "Trust signal"]
            },
            {
              claim: "Prototype validated. Retail impact still open.",
              headline: "Scope: A tested concept, not a proven return-reduction product.",
              body: "Bodique shows how realistic visualization and modular guidance can make virtual fitting more credible. It does not claim measured return reduction, live store integration, or production readiness.",
              labels: ["Group concept", "Prototype tested", "No retail validation"],
              stats: [
                {
                  value: "Proves",
                  label: "Realistic visuals build trust"
                },
                {
                  value: "Shows",
                  label: "Guidance can stay flexible"
                },
                {
                  value: "Open",
                  label: "Return data and integration"
                }
              ]
            }
          ]
        }
      }
    },

    //StoreGuide
    {
      slug: "storeGuide",
      title: "Store Guide",
      href: "./projectSites/storeGuide.html",
      categories: ["Service Experience"],

      level: "Group Project",
      coverImage: "./pngs/Projects/Store Guide/cover 1.png",
      coverBannerImage: "./pngs/Projects/Store Guide/cover.png",
      coverBackgroundColor: "#30782F",
      coverZoom: 50,
      imageScale: 1.80,
      cardCategory: "In-Store Navigation App",

      detail: {
        meta: "Group Project from 2023 for 4 Months",
        sections: {
          summary: "StoreGuide is an in-store navigation app that helps users find products quickly and compare options without manually searching store layouts — reducing friction in a high-pressure shopping context.",
          challenge: "The core challenge was designing fast, predictable routing that users could trust under time pressure — without letting exploratory features distract from the main task of finding the right product.",
          approach: "I defined the core interaction model: guided step-by-step routing where users follow clear instructions instead of searching manually. Product details and comparison are integrated directly into routes, so users make decisions without breaking their flow — every decision supports speed and clarity.",

          creativeDirection: "StoreGuide is positioned as a practical orientation tool, not a feature-heavy shopping companion — prioritizing speed and clarity because users are impatient and decisions need to happen quickly.",
          keyVisualSystem: "Deep green marks guidance, active states, and primary actions, while white and light gray keep product information and route steps readable in busy shopping environments. Simple card structure, direct step indicators, and clear route hierarchy minimize decoration so users can stay focused on finding and comparing products.",
          result: [
            "Interaction Model: Defined guided routing with integrated product comparison instead of separate search and details views. ",
            "Reduced Friction: Users reach products quickly with minimal steps.",
            "Navigation Clarity: Simple step indicators and consistent module placement improve orientation and confidence. ",
            "Design in Constraints: Built a structured experience within a limited project scope and with a team new to UX design"
          ],
          takeawayTitle: "Takeaway",
          takeaway: "In time-pressured contexts, simplicity and predictability matter more than features or aesthetics. Users don't want a beautiful shopping assistant — they want to find what they need and move on. It also showed me that good design systems in constrained teams come from clear ownership and documented decisions.",
          link: "../Booklets/Booklet Final Holzwert Julia.pdf"
        },
        "images": [
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/Store Guide/Home.png",
                alt: "Store Guide Homescreen"
              },
              {
                src: "../pngs/Projects/Store Guide/Sonderfall.png",
                alt: "Store Guide special case"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/Store Guide/Produkt.png",
                alt: "Store Guide Start route"
              },
              {
                src: "../pngs/Projects/Store Guide/Lokalisation.jpg",
                alt: "Store Guide localization"
              }
            ]
          }

        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/Store Guide/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Store Guide/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Store Guide/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Store Guide/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Store Guide/Editorial/Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Store Guide/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#30782F",
          variant: "routeMapEditorial",

          thesis: "In-store guidance becomes useful when users can find, compare, and decide without breaking their route.",

          scopeNote: "Group service concept from 2023. Built through core interaction modeling, route-step design, product comparison logic, and visual hierarchy definition. No user testing or live store validation was conducted.",

          wowFactor: {
            module: "growingLine"
          },
          "blocks": [
            {
              claim: "The problem is orientation under time pressure.",
              headline: "Shoppers lose patience when finding a product becomes the task.",
              body: "Users enter the store with a goal, but unclear layouts and manual searching slow them down. If product details are separated from navigation, every decision interrupts the route.",
              labels: ["In-store friction", "Time pressure", "Product search"]
            },
            {
              claim: "Guidance over exploration.",
              headline: "The decision: Make routing the main interaction.",
              body: "Instead of building a feature-heavy shopping companion, StoreGuide focuses on step-by-step navigation. Product comparison stays inside the route, so users can decide without losing orientation.",
              labels: ["Design decision", "Guided routing", "Clear task flow"]
            },
            {
              claim: "One flow connects search, route, and product decision.",
              headline: "Layer 1: Navigation becomes a service system.",
              body: "Users search for a product, follow clear route steps, and compare options in the same journey. The app reduces switching between map, product page, and decision view.",
              labels: ["Search", "Route steps", "Product comparison", "Decision flow"]
            },
            {
              claim: "Users need predictable next steps.",
              headline: "Layer 2: Step indicators make movement clear.",
              body: "Simple route instructions show where users are, where they go next, and when they reach the product. The interface supports quick action instead of long reading.",
              labels: ["Step indicators", "Route clarity", "Fast orientation"],
              stats: [
                {
                  value: "1",
                  label: "Guided route flow"
                },
                {
                  value: "2",
                  label: "Core tasks, find and compare"
                },
                {
                  value: "0",
                  label: "Separate decision break"
                }
              ]
            },
            {
              claim: "Comparison works best when it stays close to the shelf.",
              headline: "Layer 3: Product details support the route.",
              body: "Users can compare relevant product information before or during the route. Details help them choose without turning navigation into a separate research task.",
              labels: ["Product details", "Comparison", "Shelf decision"]
            },
            {
              claim: "Structured concept. Real-store proof still open.",
              headline: "Scope: A navigation concept, not a validated retail system.",
              body: "StoreGuide shows how in-store routing and product comparison can reduce shopping friction. It does not claim measured time savings, indoor positioning accuracy, or live store implementation.",
              labels: ["Group concept", "No user testing", "No live validation"],
              stats: [
                {
                  value: "Proves",
                  label: "Routing can reduce friction"
                },
                {
                  value: "Shows",
                  label: "Comparison can stay in flow"
                },
                {
                  value: "Open",
                  label: "Testing and localization accuracy"
                }
              ]
            }
          ]
        }
      }

    },

    //Printer Interface Redesign
    {
      slug: "printerInterface",
      title: "Printer Interface",
      href: "./projectSites/printerInterface.html",
      categories: ["Communication System"],

      level: "Private",
      coverImage: "./pngs/Projects/Printer Display Redesign/logo.png",
      coverBannerImage: "./pngs/Projects/Printer Display Redesign/logo.png",
      coverBackgroundColor: "#ffffff",
      coverZoom: 0,
      imageScale: 1.30,
      cardCategory: "PaperCut X THI",

      detail: {
        meta: "Independent Concept Project from 2024 · Unofficial PaperCut Redesign",
        sections: {
          summary: "This project redesigned a campus printer interface to reduce friction in an urgent, high-pressure context — transforming a cluttered institutional tool into something intuitive and consistent with the university's visual identity.",
          challenge: "Campus printers serve a wide range of users under time pressure. The existing interface presented too many options at once, lacked clear visual hierarchy, and offered no coherent connection between the web-based preparation tool and the physical printer display. The result was confusion, slower print jobs, and underuse of available features. The challenge was consolidating a fragmented system into a single, cohesive experience without sacrificing the flexibility users needed.",
          approach: "I redesigned the interaction and visual hierarchy, using THI's blue identity as a structural tool instead of just a branding choice. I simplified menus, unified the web-to-printer flow so preparation translated directly to the display, and established a visual hierarchy where active elements draw attention only when relevant — reducing cognitive load in time-pressured situations.",

          creativeDirection: "The printer is positioned as a dependable campus utility, not a feature-heavy machine interface — prioritizing clarity and speed because users are impatient and have other priorities.",
          keyVisualSystem: "Deep blue (THI's identity) marks active guidance and primary actions, while white reduces visual weight around inactive elements without removing context. The system uses fixed module zones and reusable components so setup, transfers, and printing remain predictable at a glance — supporting fast, confident use under time pressure.",
          result: [
            "Faster Interactions: Removing conflicting visual principles and unnecessary steps shortened the time from arrival to print, benefiting users with tight schedules.",
            "Reduced Friction: A consistent interface language across web and display made the system predictable, lowering the learning curve for first-time users.",
            "Institutional Coherence: The redesign aligned with THI's visual identity while elevating the standard of the interface beyond generic printer UI conventions."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Institutional software deserves the same design rigor as consumer products — and that removing friction from 'boring' workflows can have real impact. Even an unglamorous tool like a campus printer shapes daily experience for hundreds of users. When designed with care, it becomes invisible (good) instead of frustrating (common).",
          link: "../Booklets/Booklet II Final Julia Holzwert.pdf"
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Printer Display Redesign/Login.png",
                alt: "Printer Interface Login"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Printer Display Redesign/Home.png",
                alt: "Printer Interface Homescreen"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Printer Display Redesign/Senden-Sendeziel.png",
                alt: "Printer Interface Overview"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                type: "compare",
                before: "../pngs/Projects/Printer Display Redesign/before.jpeg",
                after: "../pngs/Projects/Printer Display Redesign/Senden-Standardeinstellungen.jpg",
                altBefore: "INVG before Redesign",
                altAfter: "INVG after Redesign"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/Printer Display Redesign/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/Editorial/Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Printer Display Redesign/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#005CA9",
          variant: "routeMapEditorial",

          thesis: "Campus utilities become better when users can complete urgent tasks without decoding the interface.",

          scopeNote: "Independent PaperCut redesign from 2024. Built through interface hierarchy redesign, web-to-printer flow mapping, THI visual identity adaptation, and menu simplification. No user testing or live printer validation was conducted.",

          wowFactor: {
            module: "growingLine"
          },
          "blocks": [
            {
              claim: "The problem is friction in an urgent moment.",
              headline: "Students need to print quickly, not understand a machine interface.",
              body: "Campus printers are used under time pressure by users with different levels of experience. Too many options, weak hierarchy, and unclear actions make a simple print job feel stressful.",
              labels: ["Campus utility", "Time pressure", "Interface friction"]
            },
            {
              claim: "Clarity over feature density.",
              headline: "The decision: Make the printer feel like one predictable system.",
              body: "Instead of showing every function at once, the redesign gives active tasks visual priority. Users see what matters now without losing access to secondary options.",
              labels: ["Design decision", "Clear hierarchy", "Predictable use"]
            },
            {
              claim: "One flow connects web preparation and printer display.",
              headline: "Layer 1: The fragmented print process becomes structured.",
              body: "Preparation, transfer, login, settings, and print confirmation follow the same interface logic. What users set up online translates clearly to the physical display.",
              labels: ["Web flow", "Printer display", "Print setup", "Confirmation"]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Complexity control",
              "headline": "Advanced options remain available without leading the task.",
              "body": "The menu keeps specialist controls accessible while the common print path retains a clear primary action.",
              "labels": [
                "Advanced settings",
                "Primary action",
                "Progressive access"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "The design needs testing on the physical printer.",
              "body": "The prototype establishes a connected interface model. It does not show task-time change, first-use success or performance with the actual hardware.",
              "labels": [
                "High-fidelity concept",
                "No user testing"
              ],
              "scopeItems": [
                {
                  value: "2",
                  label: "Connected touchpoints"
                },
                {
                  value: "1",
                  label: "Shared interface logic"
                },
                {
                  value: "0",
                  label: "Competing active states"
                }
              ]
            },
            {
              claim: "Advanced options should support the task, not interrupt it.",
              headline: "Layer 3: Menus stay flexible without becoming noisy.",
              body: "Reusable modules and fixed zones keep printing, sending, and settings predictable. Users can access deeper controls without losing the main path.",
              labels: ["Reusable modules", "Fixed zones", "Menu clarity"]
            },
            {
              claim: "Concept redesign. Usage proof still open.",
              headline: "Scope: A clearer interface model, not a validated campus system.",
              body: "This redesign shows how institutional printer software can become faster and more coherent through hierarchy, consistency, and brand alignment. It does not claim measured print-time reduction, user testing, or PaperCut implementation.",
              labels: ["Independent concept", "Unofficial redesign", "No user testing"],
              stats: [
                {
                  value: "Proves",
                  label: "Hierarchy can reduce friction"
                },
                {
                  value: "Shows",
                  label: "Brand identity can guide use"
                },
                {
                  value: "Open",
                  label: "Testing and implementation"
                }
              ]
            }
          ]
        }
      }
    },

    //MemoWe
    {
      slug: "memowe",
      title: "MemoWe",
      href: "./projectSites/memowe.html",
      categories: ["Trust & Care System"],

      level: "Private",
      coverImage: "./pngs/Projects/MemoWe/Logo 4.png",
      coverBannerImage: "./pngs/Projects/MemoWe/Logo 4.png",
      coverBackgroundColor: "#30BAC7",
      coverZoom: 70,
      imageScale: 2.10,
      cardCategory: "Healthcare product for dementia patients",

      detail: {
        meta: "Independent Concept Project 2024 for 6 Months",
        sections: {
          summary: "Memory loss shouldn't mean losing connection - For individuals living with dementia and their families, staying in touch and maintaining a daily routine is both essential and increasingly difficult. MemoWe was designed to bridge that gap — offering a product that supports both patients and their loved ones without adding complexity to already demanding lives.",
          challenge: "Designing for users with dementia requires an entirely different standard of clarity. Cognitive load, visual noise, and inconsistent patterns are not just inconveniences — they are genuine barriers. At the same time, the product needed to serve family members who may be less tech-savvy or emotionally overwhelmed. The challenge was creating a single, unified experience that felt intuitive, warm, and reliable for both audiences simultaneously.",
          approach: "I led the full product design from architecture to interface, grounding every decision in cognitive accessibility principles. Warm color palettes, high-contrast layouts, predictable navigation, and a daily routine feature were designed to reduce cognitive load and give patients a sense of stability and control.",
          creativeDirection: "MemoWe is a calm support system rather than a medical tool or productivity app. The experience had to help people with dementia and their families feel guided, connected, and safe without adding emotional or cognitive pressure. The visual system therefore relies on warm colours, high contrast, familiar patterns, large readable elements, and predictable flows. I avoided complex dashboards, clinical aesthetics, and feature-heavy navigation because they would increase stress for users who need reassurance and repetition. The key judgement was to design around trust before functionality, making every interaction feel simple enough to return to and meaningful enough to support daily connection.",
          keyVisualSystem: "Turquoise (#00A099) creates a clear, recognizable structure without falling into clinical health-tech aesthetics. Light orange accent adds warmth and emotional balance, while glassmorphism supports soft, approachable interface layers that feel modern but not overwhelming. Large readable elements, high contrast, and repeated patterns support recognition and reduce navigation uncertainty.",
          result: [
            "End-to-End Product Ownership: Led full product design from information architecture to final interface.",
            "Accessibility-First Structure: Daily routine features and simplified navigation gave patients stability; warm colors and high contrast reduced visual stress. ",
            "User Feedback Integration: Early testing with families revealed need for predictable patterns and large touch targets — incorporated throughout.",
            "Inclusive Design: The interface performed across elderly patients and younger family members without requiring technical literacy."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "MemoWe demonstrates my ability to design for high-stakes, emotionally sensitive contexts where clarity and empathy are not optional. Building a product that genuinely supports vulnerable users — and the people caring for them — is one of the most meaningful challenges a designer can take on"
        },
        images: [

          {
            "layout": "one",
            "items": [
              {
                type: "video",
                src: "../pngs/Projects/MemoWe/MemoWe_Ad_JuHo.mp4",
                alt: "MemoWe Trailer"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/MemoWe/profile home.png",
                alt: "MemoWe Profile"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/MemoWe/upload.png",
                alt: "MemoWe Upload"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/MemoWe/activity tracker.jpg",
                alt: "MemoWe Resident Profile Information"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/MemoWe/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/MemoWe/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/MemoWe/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/MemoWe/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/MemoWe/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/MemoWe/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/MemoWe/Editorial/Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/MemoWe/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#00A099",
          variant: "routeMapEditorial",

          thesis: "Care products become stronger when trust, routine, and recognition come before features.",

          scopeNote: "Independent care concept from 2024. Built through cognitive accessibility principles, information architecture, early family feedback, predictable navigation patterns, and high-contrast interface design. No clinical validation or patient outcome testing was conducted.",

          wowFactor: {
            module: "growingLine"
          },
          "blocks": [
            {
              claim: "The problem is cognitive pressure in daily connection.",
              headline: "People with dementia need clarity that stays familiar.",
              body: "Memory loss can make communication, routines, and digital navigation harder to manage. MemoWe reduces visual noise so patients and families can stay connected without extra complexity.",
              labels: ["Dementia care", "Family connection", "Cognitive load"]
            },
            {
              claim: "Trust before functionality.",
              headline: "The decision: Make every interaction predictable.",
              body: "Instead of building a feature-heavy health app, MemoWe focuses on repeated patterns, large readable elements, and calm guidance. Users should recognize the next step before they have to think about it.",
              labels: ["Design decision", "Predictable flows", "Calm support"]
            },
            {
              claim: "One system supports patients and family members together.",
              headline: "Layer 1: Connection and routine become structured.",
              body: "Profiles, uploads, memories, activity tracking, and daily routines follow one simple product logic. Both audiences can use the system without needing technical confidence.",
              labels: ["Profiles", "Memories", "Daily routine", "Activity tracking"]
            },
            {
              claim: "Families need easy ways to add meaning.",
              headline: "Layer 2: Uploads turn care into shared participation.",
              body: "Family members can add familiar photos, memories, and updates that help patients reconnect with people and moments. The flow stays direct so emotional tasks do not become technical tasks.",
              labels: ["Family uploads", "Shared memories", "Low effort care"],
              stats: [
                {
                  value: "2",
                  label: "Core audiences"
                },
                {
                  value: "1",
                  label: "Shared care system"
                },
                {
                  value: "0",
                  label: "Complex dashboards"
                }
              ]
            },
            {
              claim: "Routine creates safety through repetition.",
              headline: "Layer 3: Daily structure reduces uncertainty.",
              body: "Activity tracking and routine features give users a stable overview of the day. Warm colors, high contrast, and repeated layouts support recognition without making the product feel clinical.",
              labels: ["Routine support", "High contrast", "Recognition patterns"]
            },
            {
              claim: "Care concept. Clinical proof still open.",
              headline: "Scope: An accessibility driven product concept, not a medical device.",
              body: "MemoWe shows how trust, predictable navigation, and family participation can shape a calmer support system. It does not claim clinical effectiveness, dementia treatment impact, or production readiness.",
              labels: ["Independent concept", "Care focused", "No clinical validation"],
              stats: [
                {
                  value: "Proves",
                  label: "Predictability reduces interface pressure"
                },
                {
                  value: "Shows",
                  label: "Connection can stay simple"
                },
                {
                  value: "Open",
                  label: "Clinical and long-term testing"
                }
              ]
            }
          ]
        }
      }
    },

    //PikBre 3D - Remote Control
    {
      slug: "pikBre3D-RemoteControl",
      title: "PikBre 3D - Remote",
      href: "./projectSites/pikBre3D-RemoteControl.html",
      categories: ["Product System"],

      level: "Group Project",
      coverImage: "./pngs/Projects/PikBre 3D - Remote Control/logo.png",
      coverBannerImage: "./pngs/Projects/PikBre 3D - Remote Control/logo.png",
      coverBackgroundColor: "#FEFEFE",
      coverZoom: 10,
      imageScale: 1.50,
      cardCategory: "Gaming enviromental remote control",

      detail: {
        meta: "Group Project from 2025 for 5 Weeks",
        sections: {
          summary: "PikBre is an expressive ambient remote control designed to be visible and playful in gaming environments — balancing functional symbols with a memorable sculptural identity that blends into a collector's space.",
          challenge: "Delivering a complete product design process within a tight five-week window, alongside other academic commitments, required both disciplined time management and clear team coordination. Beyond logistics, the real design challenge was developing a coherent visual and functional language for an everyday object — one where every formal decision needed to be grounded in design theory, from aesthetic principles to sign and symbol function.",
          approach: "I led the form exploration and interaction logic, using a Pikmin-inspired flower silhouette to make the remote feel like a collectible object instead of a generic peripheral. Black body with green illumination creates a gaming-room aesthetic, while honeycomb controls and leaf-shaped buttons communicate function through object language before interaction.",

          creativeDirection: "PikBre is positioned as an expressive ambient controller, not a neutral household remote — treating the object as a visible design presence in gaming spaces rather than something to be hidden.",
          keyVisualSystem: "Black body and green illumination reference gaming peripherals and gaming culture, while the flower-like silhouette makes the remote feel collectible and character-driven. Form follows function: honeycomb controls area, leaf-shaped buttons, and glowing power signal create symbolic cues without relying on conventional remote layouts — making the object readable and memorable.",
          result: [
            "Form Language: Designed a flower-inspired silhouette and honeycomb controls that make the remote feel like an expressive object, not a neutral tool.",
            "Symbolic Communication: Leaf buttons and glowing power signal communicate function through object design before interaction.",
            "Cultural Integration: Black and green color language positions the remote within gaming peripherals and collector aesthetics.",
            "Theory-Driven Defense: Every formal choice was grounded in design theory, enabling a presentation that argued for the design rather than just showcasing it."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Even functional products benefit from expressive form language and cultural context. A remote control doesn't have to be neutral. When designed with intention, it becomes a visible object that users want to display, not hide — which changes how people perceive and interact with it."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/early stage.jpeg",
                alt: "PikBre early Stage"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/first impression.jpeg",
                alt: "PikBre first Impression"
              },
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/product.jpeg",
                alt: "PikBre Product"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/WhatsApp Image 2026-03-27 at 22.28.53.jpeg",
                alt: "PikBre Quality & Complexity"
              },
              {
                src: "../pngs/Projects/PikBre 3D - Remote Control/WhatsApp Image 2026-03-27 at 22.29.35.jpeg",
                alt: "PikBre Quality & Complexity"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#74F24A",
          variant: "routeMapEditorial",

          thesis: "Functional objects become memorable when form, culture, and interaction speak the same language.",

          scopeNote: "Group product concept from 2025. Built through form exploration, interaction logic, symbolic function mapping, 3D modeling, and theory-based design defense. No ergonomic testing or production validation was conducted.",

          wowFactor: {
            module: "growingLine"
          },
          "blocks": [
            {
              claim: "The problem is neutrality in a space built on identity.",
              headline: "Gaming objects should feel visible, not disposable.",
              body: "A remote control in a gaming setup is often treated as a hidden utility. PikBre turns it into a collectible object that still communicates function clearly.",
              labels: ["Gaming space", "Object identity", "Functional visibility"]
            },
            {
              claim: "Expression over neutrality.",
              headline: "The decision: Make the remote part of the gaming environment.",
              body: "Instead of designing a generic peripheral, PikBre uses a Pikmin-inspired flower silhouette, black body, and green illumination to fit collector culture and gaming rooms.",
              labels: ["Design decision", "Ambient controller", "Collector object"]
            },
            {
              claim: "One form language connects shape, symbols, and controls.",
              headline: "Layer 1: The object becomes a readable system.",
              body: "The flower silhouette, honeycomb control area, leaf buttons, and glowing power signal follow one visual logic. Users can understand function through form before interaction.",
              labels: ["Flower silhouette", "Honeycomb controls", "Leaf buttons", "Power signal"]
            },
            {
              claim: "Controls need character without losing clarity.",
              headline: "Layer 2: Symbolic buttons guide use.",
              body: "Leaf-shaped buttons and grouped control zones make the remote expressive while staying readable. The object avoids standard remote layouts without becoming confusing.",
              labels: ["Symbolic cues", "Grouped controls", "Readable interaction"],
              stats: [
                {
                  value: "5 weeks",
                  label: "Project timeline"
                },
                {
                  value: "1",
                  label: "Coherent form system"
                },
                {
                  value: "0",
                  label: "Generic remote layout"
                }
              ]
            },
            {
              claim: "Detail makes the object feel intentional.",
              headline: "Layer 3: Materials and light define the product character.",
              body: "Black surfaces place the remote in gaming culture, while green illumination creates a clear active state. The object feels playful, but the interaction logic stays controlled.",
              labels: ["Black body", "Green illumination", "Active state"]
            },
            {
              claim: "Concept model. Product proof still open.",
              headline: "Scope: A theory-driven form study, not a market-ready remote.",
              body: "PikBre shows how expressive form language can make a functional object more memorable and display-worthy. It does not claim ergonomic validation, technical feasibility, or production readiness.",
              labels: ["Group concept", "3D product study", "No ergonomic testing"],
              stats: [
                {
                  value: "Proves",
                  label: "Form can communicate function"
                },
                {
                  value: "Shows",
                  label: "Culture can shape product identity"
                },
                {
                  value: "Open",
                  label: "Ergonomics and production"
                }
              ]
            }
          ]
        }
      }
    },

    //DB Navigator Redesign
    {
      slug: "DBNavigatorRedesign",
      title: "DB Navigator Accessibility",
      href: "./projectSites/DBNavigatorRedesign.html",
      categories: ["Interaction System"],

      level: "Private",
      coverImage: "./pngs/Projects/DB Navigator Redesign/Logo.png",
      coverBannerImage: "./pngs/Projects/DB Navigator Redesign/Logo.png",
      coverBackgroundColor: "#ffffff",
      coverZoom: 50,
      imageScale: 1.85,
      cardCategory: "Accessibility-focused route comparison",

      detail: {
        meta: "Independent Concept Project · 2026 · Unofficial DB Navigator Redesign",
        sections: {
          summary: "This project improves DB Navigator accessibility for elderly passengers and disabled users — redesigning connection results, journey details, and travel information with stronger contrast, clearer hierarchy, and integrated accessibility features.",

          challenge: "Making DB Navigator more accessible without forcing users to relearn it. The app already has familiar patterns for search, connection results, and journey details, so the redesign had to improve clarity, contrast, status feedback, and inclusive travel information within the existing structure.",

          approach: "I redesigned connection results, journey details, and delay states to improve contrast, icon support, and grouping logic. A new Accessibility display option brings wheelchair spaces, elevators, step-free access, accessible toilets, vibration alerts, tactile guidance, hearing support, and assistance services directly into the journey flow instead of a separate mode.",

          creativeDirection: "The redesign is positioned as a reliability upgrade that keeps familiar DB Navigator structures while making critical information easier to scan through stronger contrast, icon support, and clearer hierarchy.",

          keyVisualSystem: "Inter typography supports functional reading in dense travel contexts. Delay, punctuality, and occupancy each receive distinct state colors: strong contrast pairing dark backgrounds with white text. A new white icon palette on categorized backgrounds (mobility, sanitary, sensory, assistance) marks accessibility options, helping users scan and compare at route level.",

          result: [
            "Specific Screen Work: Connection results, journey details, delay states, occupancy indicators, and route-level Accessibility information were redesigned.",
            "New Inclusion Feature: A dedicated Accessibility display option brings wheelchair spaces, elevators, step-free access, accessible toilets, vibration alerts, tactile guidance, hearing support, and assistance services into the normal journey flow.",
            "System-Aware Redesign: The concept builds on the existing DB Navigator architecture instead of replacing learned patterns.",
            "Concrete Visual System: Typography, contrast, state colors, icon categories, and card hierarchy were defined to make critical travel information easier to scan.",
            "Honest Scope: No user testing was conducted, so the project communicates design reasoning and heuristic improvement rather than measured usability impact."
          ],

          takeawayTitle: "Takeaway",
          takeaway: "This project taught me that Accessibility redesign is often about integration, not separation. The stronger decision was to make important travel conditions visible inside the normal journey flow instead of creating a special mode. It also sharpened my judgement around established products: good redesign does not always mean changing the structure. Sometimes it means making the existing system clearer, more readable, and more inclusive."
        },
        images: [

          {
            "layout": "one",
            "items": [
              {
                type: "compare",
                before: "../pngs/Projects/DB Navigator Redesign/Darkmode.png",
                after: "../pngs/Projects/DB Navigator Redesign/Lightmode.png",
                altBefore: "DB Navigator before WCAG AAA in Lightmode",
                altAfter: "DB Navigator before WCAG AAA in Darkmode"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                type: "compare",
                before: "../pngs/Projects/DB Navigator Redesign/Tickets D.png",
                after: "../pngs/Projects/DB Navigator Redesign/Tickets L.png",
                altBefore: "DB Navigator with Inclusion add on in Lightmode",
                altAfter: "DB Navigator with Inclusion add on in Darkmode"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                type: "compare",
                before: "../pngs/Projects/DB Navigator Redesign/Fahrten 100_.png",
                after: "../pngs/Projects/DB Navigator Redesign/Fahrten 100_(1).png",
                altBefore: "DB Navigator with Accessibility-Infos in Lightmode",
                altAfter: "DB Navigator with Accessibility-Infos in Darkmode"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                type: "compare",
                before: "../pngs/Projects/DB Navigator Redesign/Acc Infos(2).png",
                after: "../pngs/Projects/DB Navigator Redesign/Acc Infos(1).png",
                altBefore: "DB Navigator Accessibility-Information in Lightmode",
                altAfter: "DB Navigator Accessibility-Information in Darkmode"
              }
            ]
          }

        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/DB Navigator Redesign/Editorial/Hero Statement.png",
            alt: "DB Navigator accessibility hero statement"
          },
          {
            src: "./pngs/Projects/DB Navigator Redesign/Editorial/Device Line-up.png",
            alt: "DB Navigator accessibility device line-up"
          },
          {
            src: "./pngs/Projects/DB Navigator Redesign/Editorial/Conceptual Diptych.png",
            alt: "DB Navigator accessibility conceptual diptych"
          },
          {
            src: "./pngs/Projects/DB Navigator Redesign/Editorial/Editorial Object Shot.png",
            alt: "DB Navigator accessibility editorial object shot"
          },
          {
            src: "./pngs/Projects/DB Navigator Redesign/Editorial/Information Architecture.png",
            alt: "DB Navigator accessibility information architecture"
          },
          {
            src: "./pngs/Projects/DB Navigator Redesign/Editorial/Detail Crop.png",
            alt: "DB Navigator accessibility detail crop"
          },
          {
            src: "./pngs/Projects/DB Navigator Redesign/Editorial/Mobile System.png",
            alt: "DB Navigator accessibility mobile system"
          },
          {
            src: "./pngs/Projects/DB Navigator Redesign/Editorial/Closing Mood.png",
            alt: "DB Navigator accessibility closing mood"
          }
        ],
        editorial: {
          variant: "routeMapEditorial",

          thesis: "Accessibility becomes strongest when it is visible inside the route decision.",

          scopeNote: "Independent concept redesign. Evaluated through heuristic accessibility review, WCAG contrast checks, route-level information, and visible decision support. No user testing was conducted.",

          wowFactor: {
            module: "growingLine"
          },

          blocks: [{}]
        }
      }
    },



    //Spatial To-Do
    {
      slug: "spatialTo-Do",
      title: "Spatial To-Do",
      href: "./projectSites/spatialTo-Do.html",
      categories: ["Spatial Experience"],

      level: "Private",
      coverImage: "./pngs/Projects/Spatial To-Do/Logo 1.png",
      coverBackgroundColor: "#F2E8E3",
      coverZoom: 10,
      imageScale: 1.25,

      detail: {
        meta: "Independent Concept Project 2026",
        sections: {
          summary: "“Productivity tools shouldn’t be limited to a screen.” In 2026, AR and VR offer the chance to rethink how people organize tasks and time. By extending a simple to-do list into a spatial interface, users can interact with their tasks in three dimensions, creating context, awareness, and presence while staying immersed in their environment. ",
          challenge: "Transforming a basic to-do list into a spatial experience without overwhelming the user. Traditional lists work linearly, but in AR/VR, poorly structured overlays can feel cluttered, distracting, or confusing. Tasks need to feel tangible, easy to prioritize, and always accessible without breaking immersion. The challenge was balancing functionality, comfort, and spatial cognition. ",
          approach: "I reimagined tasks as floating, manipulable objects anchored in the user’s environment. Key items appear in the primary field of view, while lower-priority tasks float around peripheral zones, fading dynamically. Gestures and eye-tracking let users move, expand, or mark tasks complete intuitively. Contextual reminders attach to objects in the physical space, linking digital tasks to real-world triggers. Color, light, and subtle haptic cues communicate urgency and deadlines without creating visual noise. The system adapts dynamically to the user’s focus and spatial movement, creating a seamless, human-centered workflow in 3D. ",

          creativeDirection: "The creative direction positions Spatial To-Do as a spatial productivity layer rather than a list placed inside AR or VR. The experience had to make tasks feel present, prioritized, and connected to the user’s environment without creating visual clutter. The visual system relies on floating task objects, depth-based hierarchy, peripheral fading, subtle urgency cues, and gesture-led interaction to support focus in three dimensions. I avoided dense overlays and screen-like layouts because they would fight against immersion and increase cognitive load. The key judgement was to use space as a functional structure, turning task management into something users can see, arrange, and act on naturally.",
          keyVisualSystem: "",
          result: [
            "Immersive Task Awareness: Users see tasks in context, spatially organized to reduce cognitive load and increase retention.",
            "Intuitive Interaction: Gestures, gaze, and voice commands replace clicks, making task management faster and more natural.",
            "Contextual Productivity: Tasks anchor to real-world cues, creating a blend of digital organization and physical environment awareness.",
            "Future-Ready Design: The spatial interface establishes a blueprint for productivity tools in AR/VR, balancing functionality, immersion, and comfort for long-term use."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Spatial computing is already redefining everyday tools. This project shows my ability to design emerging interfaces while keeping the human experience central. "
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Spatial To-Do/primäres Sichtfeld.png",
                alt: "Spatial To-Do Primary Field of View"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Spatial To-Do/kontextuelle Verankerung.png",
                alt: "Spatial To-Do Contextual Anchoring"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Spatial To-Do/die drei zentralen Gesten.png",
                alt: "Spatial To-Do Three Central Gestures"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Spatial To-Do/räumliche Logik.png",
                alt: "Spatial To-Do Spatial Logic"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                src: "../pngs/Projects/Spatial To-Do/Dringlichkeitssystem.png",
                alt: "Spatial To-Do Urgency System"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/Spatial To-Do/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Spatial To-Do/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Spatial To-Do/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Spatial To-Do/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/Spatial To-Do/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/Spatial To-Do/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Spatial To-Do/Editorial/Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/Spatial To-Do/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#C88D7E",
          variant: "routeMapEditorial",

          thesis: "Spatial productivity becomes useful when space creates priority instead of clutter.",

          scopeNote: "Independent spatial interface concept from 2026. Built through AR/VR interaction logic, spatial hierarchy, gesture mapping, contextual anchoring, and urgency-state design. No headset testing or usability validation was conducted.",

          wowFactor: {
            module: "growingLine"
          },
          "blocks": [
            {
              claim: "The problem is turning a flat list into spatial noise.",
              headline: "Tasks become harder to manage when AR only adds overlays.",
              body: "A normal to-do list works because it is simple. In AR/VR, too many floating elements can distract users and break focus instead of improving productivity.",
              labels: ["Spatial clutter", "Task focus", "Cognitive load"]
            },
            {
              claim: "Space over screens.",
              headline: "The decision: Use depth as the task hierarchy.",
              body: "Instead of placing a 2D list into AR, Spatial To-Do turns tasks into spatial objects. Important tasks stay in the primary field of view while lower-priority items move into peripheral zones.",
              labels: ["Design decision", "Spatial hierarchy", "Priority zones"]
            },
            {
              claim: "One system connects focus, priority, and environment.",
              headline: "Layer 1: Tasks become spatial objects.",
              body: "Floating task cards, depth, fading, and anchoring create a structure users can see and arrange. The interface uses space to show what matters now and what can wait.",
              labels: ["Floating tasks", "Depth logic", "Peripheral fading", "Anchoring"]
            },
            {
              claim: "Users act through movement, gaze, and simple gestures.",
              headline: "Layer 2: Interaction becomes physical.",
              body: "Users can move, expand, complete, or reprioritize tasks through gestures and eye focus. The system reduces menu searching by making actions feel direct in 3D space.",
              labels: ["Gesture control", "Eye tracking", "Direct action"],
              stats: [
                {
                  value: "3",
                  label: "Core gestures"
                },
                {
                  value: "2",
                  label: "Priority zones"
                },
                {
                  value: "1",
                  label: "Spatial task layer"
                }
              ]
            },
            {
              claim: "Context makes reminders easier to understand.",
              headline: "Layer 3: Tasks attach to real-world cues.",
              body: "A reminder can anchor to a desk, door, or object in the room. Color, light, and subtle urgency cues show deadlines without turning the environment into a dashboard.",
              labels: ["Contextual reminders", "Urgency cues", "Real-world anchors"]
            },
            {
              claim: "Concept first. Spatial validation still open.",
              headline: "Scope: A spatial UX concept, not a tested AR product.",
              body: "Spatial To-Do shows how task management could use depth, context, and gestures to reduce screen dependence. It does not claim measured productivity gains, comfort validation, or headset-ready implementation.",
              labels: ["Independent concept", "No headset testing", "No usability validation"],
              stats: [
                {
                  value: "Proves",
                  label: "Space can structure priority"
                },
                {
                  value: "Shows",
                  label: "Tasks can become contextual"
                },
                {
                  value: "Open",
                  label: "Testing and comfort validation"
                }
              ]
            }
          ]
        }
      }
    },

    //HealthyStart
    {
      slug: "healthyStart",
      title: "HealthyStart",
      href: "./projectSites/healthyStart.html",
      categories: ["Trust & Care System"],
      level: "Private",
      coverBannerImage: "./pngs/Projects/HealthyStart/Logo.png",
      coverBackgroundColor: "#FAFAF8",
      coverZoom: 0,
      imageScale: 2.55,
      cardCategory: "DSGVO Privacy with UI",

      detail: {
        meta: "Independent Concept Project from 2026",
        sections: {
          summary: "“Privacy is the first product.” For apps handling sensitive data, users hesitate at the first step: onboarding. HealthyStart focuses on explaining permissions, security, and data use in a way that feels transparent, reassuring, and easy to understand, even for non-technical users. ",
          challenge: "Designing an onboarding experience that communicates privacy clearly to non-technical users while respecting regional expectations. German users expect precision, control, and compliance with strict privacy standards like GDPR, but the interface also needed to feel approachable and intuitive for international audiences. Users often hesitate at first because health data is sensitive, and poor explanations can reduce adoption. ",
          approach: "I layered information to balance simplicity and depth. Permissions are grouped by type and impact, highlighting the required versus optional data. Security practices like encryption, secure storage, and two-factor authentication are explained through visual cues and plain-language animations rather than technical jargon. Microcopy reassures users at each step, using culturally familiar language and references for the German audience while maintaining clarity for international users. Interactive walkthroughs let users preview and adjust settings before completing onboarding, and default settings prioritize privacy. ",

          creativeDirection: "The creative direction positions HealthyStart as a trust-building onboarding experience rather than a permission checklist. The product had to make sensitive health data feel understandable, controlled, and protected from the first interaction. The visual system uses layered explanations, clear permission groups, calm microcopy, plain-language security cues, and privacy-first defaults to reduce hesitation without hiding important details. I avoided legalistic copy, technical security dashboards, and fear-based messaging because they would create distance instead of confidence. The key judgement was to make privacy feel actionable, showing users what happens to their data before asking for commitment.",
          keyVisualSystem: "Forest Teal (#2D7D6F) creates a calm health-tech identity while Warm White keeps the onboarding light and approachable. DM Serif Display gives key privacy statements a human, editorial quality, while Inter keeps permissions and microcopy direct and functional — supporting the core strategy of making privacy feel actionable, not bureaucratic.",
          result: [
            "Immediate Trust: Users understand what health data is collected, why, and how it is protected, reducing anxiety and increasing onboarding completion.",
            "Localized Confidence: The flow aligns with German expectations for precision and transparency while remaining clear and approachable for global users.",
            "Privacy as Brand: The onboarding establishes data protection as a core part of the app experience, reinforcing long-term trust and loyalty."
          ],
          takeawayTitle: "Takeaway",
          takeaway: "Privacy and trust are essential for health apps. This project proves my ability to build trust through UI, a senior level skill. "
        },
        "images": [
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/HealthyStart/Welcome & First Impression.png",
                alt: "HealthyStart Welcome & First Impression"
              },
              {
                src: "../pngs/Projects/HealthyStart/Permission Grouping.png",
                alt: "HealthyStart Permission Grouping"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/HealthyStart/Security Explanation.png",
                alt: "HealthyStart Security Explanation"
              },
              {
                src: "../pngs/Projects/HealthyStart/Interactive Privacy Preview.png",
                alt: "HealthyStart Interactive Privacy Preview"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                src: "../pngs/Projects/HealthyStart/Microcopy & Lokalisierung.png",
                alt: "HealthyStart/Microcopy & Location"
              },
              {
                src: "../pngs/Projects/HealthyStart/Onboarding Completion.png",
                alt: "HealthyStart Onboarding Completion"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            src: "./pngs/Projects/HealthyStart/Editorial/Hero Statement.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/HealthyStart/Editorial/Device Line-up.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/HealthyStart/Editorial/Conceptual Diptych.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/HealthyStart/Editorial/Editorial Object Shot.png",
            alt: "Store Guide Logo"
          },
          {
            src: "./pngs/Projects/HealthyStart/Editorial/Information Architecture.png",
            alt: "Store Guide Add"
          },
          {
            src: "./pngs/Projects/HealthyStart/Editorial/Detail Crop.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/HealthyStart/Editorial/Mobile System.png",
            alt: "Store Guide Another Add"
          },
          {
            src: "./pngs/Projects/HealthyStart/Editorial/Closing Mood.png",
            alt: "Store Guide Another Add"
          }
        ],
        editorial: {
          color: "#2D7D6F",
          variant: "routeMapEditorial",

          thesis: "Health onboarding builds trust when users understand data use before they give permission.",

          scopeNote: "Independent privacy onboarding concept from 2026. Built through permission grouping, plain-language security explanation, GDPR-aware microcopy, privacy-first defaults, and interactive settings preview. No user testing, legal review, or compliance validation was conducted.",

          wowFactor: {
            module: "growingLine"
          },
          "blocks": [
            {
              claim: "The problem is hesitation before onboarding starts.",
              headline: "Users pause when health data feels unclear or risky.",
              body: "Health apps ask for sensitive information early. If users do not understand what is collected, why it is needed, or how it is protected, trust breaks before the product can prove value.",
              labels: ["Health data", "User hesitation", "Privacy trust"]
            },
            {
              claim: "Explanation before permission.",
              headline: "The decision: Make privacy the first product experience.",
              body: "Instead of treating permissions as a technical checklist, HealthyStart explains data use before asking for commitment. Users can review, adjust, and understand settings before completing onboarding.",
              labels: ["Design decision", "Privacy-first", "Clear consent"]
            },
            {
              claim: "One system connects permissions, security, and control.",
              headline: "Layer 1: Privacy becomes structured.",
              body: "Permissions are grouped by type, purpose, and impact. Required and optional data stay clearly separated, so users can understand what matters and what they can control.",
              labels: ["Permission groups", "Required data", "Optional data", "User control"]
            },
            {
              claim: "Users need plain language, not legal density.",
              headline: "Layer 2: Security becomes understandable.",
              body: "Encryption, secure storage, and two-factor authentication are explained through simple cues and calm microcopy. The interface reduces technical distance without hiding important details.",
              labels: ["Security cues", "Plain language", "Calm microcopy"],
              stats: [
                {
                  value: "3",
                  label: "Core privacy questions"
                },
                {
                  value: "2",
                  label: "Data levels, required and optional"
                },
                {
                  value: "1",
                  label: "Preview before completion"
                }
              ]
            },
            {
              claim: "Trust grows when settings can be previewed.",
              headline: "Layer 3: Users see the effect before they continue.",
              body: "The interactive privacy preview lets users adjust choices and understand what changes. Privacy becomes an action they can control, not a document they have to accept.",
              labels: ["Privacy preview", "Adjustable settings", "Onboarding completion"]
            },
            {
              claim: "Concept first. Validation still open.",
              headline: "Scope: A privacy UX concept, not a certified compliance product.",
              body: "HealthyStart shows how health onboarding can reduce hesitation through clarity, control, and privacy-first defaults. It does not claim legal GDPR compliance, measured onboarding improvement, or production readiness.",
              labels: ["Independent concept", "GDPR-aware", "No legal validation"],
              stats: [
                {
                  value: "Proves",
                  label: "Privacy can build trust"
                },
                {
                  value: "Shows",
                  label: "Consent can feel understandable"
                },
                {
                  value: "Open",
                  label: "Testing and legal review"
                }
              ]
            }
          ]
        }
      }
    },
  ]
};
