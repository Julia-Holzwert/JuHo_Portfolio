const projectsData = {
  "projects": [
    //OFFLINE
    {
      slug: "offline",
      title: "OFFLINE",
      href: "./projectSites/offline.html",
      categories: ["Spatial Experience"],

      level: "Private",
      coverImage: "./pngs/Projects/Offline/logo.png",
      coverBannerImage: "./pngs/Projects/Offline/logo.png",
      coverBackgroundColor: "#ffffff",
      coverZoom: 5,
      imageScale: 1.15,
      cardCategory: "Museum für Kommunikation Berlin X Offline",

      detail: {
        meta: "Independent Exhibition Concept · 2026 · Unofficial Museum für Kommunikation Berlin Exhibition",

        sections: {
          summary:
            "OFFLINE is an interactive exhibition concept for the Museum für Kommunikation Berlin. Across seven connected spaces, visitors experience notification pressure, delayed responses, orientation without GPS, outsourced memory, and communication through movement, objects, light, sound, and other people.",

          challenge:
            "The challenge was turning digital absence into a physical experience. Being offline can feel like rejection, relief, uncertainty, or intentional distance. A screen-led exhibition would contradict the subject, while a simple digital-detox message would ignore how complex communication has become.",

          approach:
            "I developed the curatorial premise, seven-room visitor journey, physical interaction principles, accessibility approach, environmental identity, and key installations. The route moves from overload and interruption to waiting, disorientation, memory, shared presence, and conscious reconnection.",

          creativeDirection:
            "OFFLINE is positioned as a communication exhibition rather than a wellness campaign or technology showcase. Displays are replaced by paper, mechanical indicators, directional sound, light, distance, waiting, and collective action. Historical communication objects connect current digital behaviour with earlier expectations around speed, memory, and availability.",

          keyVisualSystem:
            "Warm paper white, carbon black, and signal orange form the visual system. A broken horizontal line connects the wordmark, room sequence, signage, tactile guidance, and installations. The identity begins dense and fragmented, then becomes quieter and more open as visitors move through the exhibition.",

          result: [
            "Spatial Experience Architecture: Defined a seven-room journey from digital overload to conscious reconnection.",
            "Interaction Beyond Displays: Used movement, waiting, sound, paper, mechanical objects, light, and cooperation as interface materials.",
            "Museum Integration: Connected contemporary communication behaviour with historical objects and changing communication systems.",
            "Inclusive Experience Principles: Included low-stimulus routes, multisensory cues, optional participation, and equivalent interaction paths.",
            "Prototype-Ready Concept: Defined clear behavioural hypotheses and installations for future spatial prototyping.",
          ],

          takeawayTitle: "Takeaway",

          takeaway:
            "This project expanded my design practice beyond screens. Instead of arranging information inside an interface, I designed what visitors hear, follow, carry, wait for, remember, and do together. It showed that an interface can also be a space, an object, a delay, or another person.",
        },

        images: [
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Offline/01 Connected Entrance.png",
                alt: "OFFLINE exhibition entrance with dense communication signals",
              },
            ],
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Offline/02 Signal Storm.png",
                alt: "Responsive Signal Storm installation",
              },
            ],
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Offline/03 Waiting Room.png",
                alt: "OFFLINE exhibition waiting room with delayed messages",
              },
            ],
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Offline/04 Offline Map.png",
                alt: "Screenless spatial navigation system",
              },
            ],
          },
          {
            layout: "one",
            items: [
              {
                src: "../pngs/Projects/Offline/05 Memory Exchange.png",
                alt: "Physical memory exchange using paper and objects",
              },
            ],
          },
        ],

        editorialArtDirectedCaseStudyImages: [
          {
            src: "./pngs/Projects/Offline/Editorial/Hero Statement.png",
            alt: "OFFLINE exhibition hero statement",
          },
          {
            src: "./pngs/Projects/Offline/Editorial/Experience Sequence.png",
            alt: "Seven-stage exhibition sequence",
          },
          {
            src: "./pngs/Projects/Offline/Editorial/Signal Storm.png",
            alt: "Responsive notification overload installation",
          },
          {
            src: "./pngs/Projects/Offline/Editorial/Waiting Object.png",
            alt: "Mechanical delayed-message object",
          },
          {
            src: "./pngs/Projects/Offline/Editorial/Offline Map.png",
            alt: "Screenless spatial navigation system",
          },
          {
            src: "./pngs/Projects/Offline/Editorial/Collection Dialogue.png",
            alt: "Historical communication objects within the exhibition",
          },
          {
            src: "./pngs/Projects/Offline/Editorial/Silent Network.png",
            alt: "Collective interaction through light and movement",
          },
          {
            src: "./pngs/Projects/Offline/Editorial/Closing Mood.png",
            alt: "Final reflection space of the exhibition",
          },
        ],

        editorial: {
          color: "#F05A28",
          variant: "routeMapEditorial",

          thesis:
            "Offline does not end communication. It changes how we connect.",

          scopeNote:
            "Unofficial exhibition concept for the Museum für Kommunikation Berlin. Hypothesis-driven, unbuilt, and not visitor-tested.",
          wowFactor: {
            module: "growingLine",
          },

          blocks: [
            {
              type: "problem",
              layoutRole: "rail-left",
              claim: "Digital absence does not feel the same to everyone.",
              headline:
                "The problem: Offline can mean rejection, relief, or control.",
              body: "The exhibition avoids presenting disconnection as universally positive. It lets visitors question their own expectations around availability, silence, memory, and attention.",
              labels: [
                "Behavioural hypotheses",
                "Digital absence",
                "No universal answer",
              ],
              dominantVisual: {
                src: "./pngs/Projects/Offline/Editorial/Experience Sequence.png",
                alt: "Seven-stage exhibition sequence",
              },
            },
            {
              type: "proof",
              layoutRole: "rail-right",
              claim: "The exhibition removes the display from the centre.",
              headline: "The decision: Make communication physical again.",
              body: "Delay, distance, paper, sound, light, movement, and cooperation replace touchscreen-led interaction. Technology remains in the background.",
              labels: [
                "Curatorial decision",
                "Screenless interaction",
                "Embodied experience",
              ],
              dominantVisual: {
                src: "./pngs/Projects/Offline/Editorial/Signal Storm.png",
                alt: "Responsive notification overload installation",
              },
            },
            {
              type: "proof",
              layoutRole: "rail-left",
              claim: "Seven rooms change the conditions of communication.",
              headline: "Layer 1: The journey moves from overload to agency.",
              body: "Each room removes a familiar digital certainty and introduces a different way to send, receive, interpret, or share information.",
              labels: [
                "7 spatial chapters",
                "Narrative pacing",
                "Visitor journey",
              ],
              stats: [
                {
                  value: "7",
                  label: "Connected exhibition spaces",
                },
                {
                  value: "0",
                  label: "Required personal devices",
                },
                {
                  value: "1",
                  label: "Continuous spatial narrative",
                },
              ],
              dominantVisual: {
                src: "./pngs/Projects/Offline/Editorial/Offline Map.png",
                alt: "Screenless spatial navigation system",
              },
            },
            {
              type: "sticky",
              layoutRole: "rail-right",
              claim: "Waiting, navigating, and remembering become interfaces.",
              headline:
                "Layer 2: Visitors interact through physical conditions.",
              body: "Signal Storm, Waiting Room, and Offline Map turn attention, delay, sound, material, and orientation into interaction principles.",
              labels: [
                "Responsive space",
                "Delayed feedback",
                "Physical navigation",
              ],
              dominantVisual: {
                src: "./pngs/Projects/Offline/Editorial/Waiting Object.png",
                alt: "Mechanical delayed-message object",
              },
            },
            {
              type: "proof",
              layoutRole: "rail-left",
              claim: "The final installation only works through other people.",
              headline: "Layer 3: Shared attention becomes the interface.",
              body: "Silent Network activates only when visitors notice one another and coordinate their positions. Communication becomes a collective spatial action.",
              labels: [
                "Collective behaviour",
                "Proximity",
                "Non-verbal communication",
              ],
              dominantVisual: {
                src: "./pngs/Projects/Offline/Editorial/Silent Network.png",
                alt: "Collective interaction through light and movement",
              },
            },
            {
              type: "spread",
              layoutRole: "rail-right",
              claim: "Accessibility changes intensity, not meaning.",
              headline: "Scope: A hypothesis-driven spatial experience.",
              body: "Low-stimulus routes preserve the same central moments with reduced sensory intensity. Spatial prototyping, engineering, and visitor observation remain the next steps.",
              labels: [
                "Equivalent experience",
                "Hypothesis-driven",
                "Prototype-ready",
              ],
              stats: [
                {
                  value: "Defines",
                  label: "A complete spatial concept",
                },
                {
                  value: "Explores",
                  label: "Interaction beyond displays",
                },
                {
                  value: "Next",
                  label: "Spatial prototyping",
                },
              ],
              scopeItems: [
                {
                  title: "Concept contribution",
                  text: "A seven-room spatial journey from digital overload to conscious reconnection.",
                },
                {
                  title: "Current evidence",
                  text: "Curatorial premise, spatial narrative, and defined installations with behavioural hypotheses.",
                },
                {
                  title: "Next validation",
                  text: "Spatial prototyping, engineering, and visitor observation.",
                },
              ],
              dominantVisual: {
                src: "./pngs/Projects/Offline/Editorial/Collection Dialogue.png",
                alt: "Historical communication objects within the exhibition",
              },
            },
          ],

          headerEvidence:
            "Curatorial concept, seven-room spatial narrative, and defined installations. Not visitor-tested.",
          headerNextValidation:
            "Spatial prototyping, engineering, and visitor observation",
        },

        role: "Exhibition concept, spatial experience and interaction design",
        team: "Independent project",
        ownership:
          "Curatorial premise, seven-room visitor journey, physical interaction principles, accessibility approach, environmental identity and key installations",
        methods: [
          "Curatorial concept development",
          "Spatial journey mapping",
          "Interaction principle design",
          "Accessibility-informed design",
        ],
        evidence:
          "Curatorial concept, seven-room spatial narrative, and defined installations. Not visitor-tested.",
        nextValidation:
          "Spatial prototyping, engineering, and visitor observation",
        metaItems: [
          {
            label: "Year",
            value: "2026",
          },
          {
            label: "Type",
            value: "Private",
          },
          {
            label: "Role",
            value: "Exhibition concept, spatial experience and interaction design",
          },
          {
            label: "Methods",
            value: [
              "Curatorial concept development",
              "Spatial journey mapping",
              "Interaction principle design",
              "Accessibility-informed design",
            ],
          },
          {
            label: "Ownership",
            value:
              "Curatorial premise, seven-room visitor journey, physical interaction principles, accessibility approach, environmental identity and key installations",
          },
        ],
      },

      year: "2026",
      role: "Exhibition concept, spatial experience and interaction design",
      team: "Independent project",
      ownership:
        "Curatorial premise, seven-room visitor journey, physical interaction principles, accessibility approach, environmental identity and key installations",
      methods: [
        "Curatorial concept development",
        "Spatial journey mapping",
        "Interaction principle design",
        "Accessibility-informed design",
      ],
    },
    //HEADSUP
    {
      "slug": "headsUp",
      "title": "HeadsUp",
      "href": "./projectSites/headsUp.html",
      "categories": [
        "Interaction System"
      ],
      "level": "Team Project",
      "coverImage": "./pngs/Projects/HeadsUp/Logo.png",
      "coverBannerImage": "./pngs/Projects/HeadsUp/Logo_original.png",
      "coverBackgroundColor": "#FEFEFE",
      "coverZoom": 110,
      "imageScale": 2.15,
      "cardCategory": "Adaptive automotive HUD system",
      "detail": {
        "meta": "2025 · Team Project · 4 months",
        "sections": {
          "summary": "HeadsUp is an adaptive automotive HUD concept for navigation, calls, setup, rear camera access and safety warnings. It is designed to keep situation-relevant information in the driver’s field of view while limiting competing interface states.",
          "challenge": "The core challenge was deciding what should disappear. The HUD had to connect phone setup, windshield feedback, device transfer, and safety warnings without creating hesitation or visual overload in a driving context.",
          "approach": "I owned the HUD information architecture and interaction logic, translating phone setup, navigation, calls, rear camera access, and safety warnings into task flows and screen states. We tested with 12 participants and found that users hesitated on the start screen due to equal visual weight between setup and transfer actions — leading to a clearer hierarchy, improved wording, and a saved profile overview.",
          "creativeDirection": "HeadsUp is positioned as a calm safety interface rather than a futuristic dashboard. Clear hierarchy, controlled warning states, direct feedback and situational modules keep priority visible under driving pressure.",
          "keyVisualSystem": "Inter supports neutral, legible interface typography. Blue marks active guidance, green confirms safe states and red is reserved for critical warnings. Navigation, calls and alerts use consistent zones so each state follows the same scanning pattern.",
          "result": [
            "Design ownership: I defined the HUD information architecture and interaction logic across five driving scenarios.",
            "Testing observation: 12 participants hesitated when setup and transfer actions carried equal visual weight.",
            "Prototype result: After iteration, task completion increased 40% and setup hesitation dropped to 12%.",
            "Open validation: Real-road use, regulation and production constraints were not tested."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "Safety-critical UX depends on subtraction, hierarchy, and confirmation. Users did not need more elements. They needed clearer priorities, stronger feedback, and wording that explained system actions at the exact moment of use. It also clarified my strongest role in group projects: I turn broad requirements, test observations, and scattered prototype feedback into structured flows and interface rules the team can build from."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/HeadsUp/Greeting.jpg",
                "alt": "HeadsUp Greeting"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/HeadsUp/iPhone 16 - Connect.jpg",
                "alt": "HeadsUp connect app screen"
              },
              {
                "src": "../pngs/Projects/HeadsUp/iPhone 16 - Übertragen.jpg",
                "alt": "HeadsUp transfer data app screen"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/HeadsUp/iPhone 16 - Amount.jpg",
                "alt": "HeadsUp amount to display on hud"
              },
              {
                "src": "../pngs/Projects/HeadsUp/iPhone 16 - Speichern 2.jpg",
                "alt": "HeadsUp app overview"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/HeadsUp/Editorial/Hero Statement.png",
            "alt": "HeadsUp hero statement about adaptive HUD navigation, setup and warning states"
          },
          {
            "src": "./pngs/Projects/HeadsUp/Editorial/Device Line-up.png",
            "alt": "HeadsUp phone setup and windshield interface states"
          },
          {
            "src": "./pngs/Projects/HeadsUp/Editorial/Conceptual Diptych.png",
            "alt": "HeadsUp conceptual diptych showing driving context beside the adaptive HUD hierarchy"
          },
          {
            "src": "./pngs/Projects/HeadsUp/Editorial/Editorial Object Shot.png",
            "alt": "HeadsUp HUD warning and guidance modules as a focused object study"
          },
          {
            "src": "./pngs/Projects/HeadsUp/Editorial/Information Architecture.png",
            "alt": "HeadsUp information architecture showing the flow from phone setup to navigation and safety alerts"
          },
          {
            "src": "./pngs/Projects/HeadsUp/Editorial/Detail Crop.png",
            "alt": "HeadsUp detail crop showing color-coded guidance, confirmation and critical warning states"
          },
          {
            "src": "./pngs/Projects/HeadsUp/Editorial/Desktop and Mobile System.png",
            "alt": "HeadsUp the connected phone and automotive HUD system"
          },
          {
            "src": "./pngs/Projects/HeadsUp/Editorial/Closing Mood.png",
            "alt": "HeadsUp closing scene showing the HUD concept positioned in a driving environment"
          }
        ],
        "editorial": {
          "color": "#00AEEF",
          "variant": "routeMapEditorial",
          "thesis": "Driver attention needs a clear hierarchy before the car starts moving.",
          "scopeNote": "Team concept from 2025. Evidence comes from prototype testing with 12 participants. Road use, regulation and production remain open.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "Critical constraint",
              "headline": "Driver attention cannot be treated as spare screen space.",
              "body": "Navigation, calls, setup, transfer, rear camera access and warnings compete for the same field of view. The interface needed a rule for what appears, what waits and what disappears.",
              "labels": [
                "Driving context",
                "Attention priority",
                "Five scenarios"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "My contribution",
              "headline": "I structured one interaction model across the HUD states.",
              "body": "I owned the information architecture and interaction logic, translating phone setup, navigation, calls, camera access and warnings into connected task flows and screen states.",
              "labels": [
                "Information architecture",
                "Interaction logic",
                "Task flows"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Testing observation",
              "headline": "Equal visual weight caused hesitation on the start screen.",
              "body": "Testing with 12 participants showed that setup and transfer actions looked equally important. Users needed a clearer primary action and explicit system feedback.",
              "labels": [
                "12 participants",
                "Observed hesitation",
                "Start screen"
              ],
              "stats": [
                {
                  "value": "12",
                  "label": "Participants tested"
                }
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Iteration",
              "headline": "Hierarchy, wording and profile confirmation were revised together.",
              "body": "The next prototype separated setup from transfer, clarified the wording and added a saved profile overview before the driving state took priority.",
              "labels": [
                "Clear primary action",
                "Revised microcopy",
                "Profile overview"
              ],
              "stats": [
                {
                  "value": "40%",
                  "label": "Task completion increase after iteration"
                },
                {
                  "value": "12%",
                  "label": "Setup hesitation after iteration"
                }
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "System logic",
              "headline": "Color and placement explain urgency without adding another dashboard.",
              "body": "Blue carries active guidance, green confirms safe states and red is limited to critical warnings. Repeated module zones keep the state changes predictable.",
              "labels": [
                "Blue guidance",
                "Green confirmation",
                "Red warnings"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "The prototype needs road-context and regulatory review.",
              "body": "The tested prototype supports a clearer setup flow. It does not establish safety in traffic, regulatory compliance or production feasibility.",
              "labels": [
                "Prototype tested",
                "Not road validated"
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "A connected HUD hierarchy for setup, transfer, navigation, calls and safety warnings."
                },
                {
                  "title": "Current evidence",
                  "text": "Prototype testing with 12 participants and measured iteration results."
                },
                {
                  "title": "Next validation",
                  "text": "Real-road attention testing, regulation review and production constraints."
                }
              ]
            }
          ],
          "headerEvidence": "Prototype testing with 12 participants across five driving scenarios",
          "headerNextValidation": "Real-road testing, regulation review and production feasibility"
        },
        "role": "Interaction design and information architecture",
        "team": "Adaptive HUD concept developed as a team",
        "ownership": "HUD information architecture, interaction logic, task flows, screen states and test synthesis",
        "methods": [
          "Task-flow mapping",
          "High-fidelity prototyping",
          "Usability testing with 12 participants",
          "Iteration from test observations"
        ],
        "evidence": "Prototype testing with 12 participants across five driving scenarios",
        "nextValidation": "Real-road testing, regulation review and production feasibility",
        "metaItems": [
          {
            "label": "Year",
            "value": "2025"
          },
          {
            "label": "Type",
            "value": "Team Project"
          },
          {
            "label": "Team",
            "value": "Adaptive HUD concept developed as a team"
          },
          {
            "label": "Duration",
            "value": "4 months"
          },
          {
            "label": "Role",
            "value": "Interaction design and information architecture"
          },
          {
            "label": "Methods",
            "value": [
              "Task-flow mapping",
              "High-fidelity prototyping",
              "Usability testing with 12 participants",
              "Iteration from test observations"
            ]
          },
          {
            "label": "Ownership",
            "value": "HUD information architecture, interaction logic, task flows, screen states and test synthesis"
          }
        ]
      },
      "year": "2025",
      "duration": "4 months",
      "role": "Interaction design and information architecture",
      "team": "Adaptive HUD concept developed as a team",
      "ownership": "HUD information architecture, interaction logic, task flows, screen states and test synthesis",
      "methods": [
        "Task-flow mapping",
        "High-fidelity prototyping",
        "Usability testing with 12 participants",
        "Iteration from test observations"
      ]
    },
    //CAMPUSTALK
    {
      "slug": "campusTalk",
      "title": "CampusTalk",
      "href": "./projectSites/campusTalk.html",
      "categories": [
        "Communication System"
      ],
      "level": "Team Project",
      "coverImage": "./pngs/Projects/CampusTalk/Logo 1.png",
      "coverBannerImage": "./pngs/Projects/CampusTalk/Logo 1.png",
      "coverBackgroundColor": "linear-gradient(90deg, #2D2077 50%, #35278F 68%)",
      "coverZoom": 100,
      "imageScale": 3,
      "cardCategory": "Guided reflection and anonymous discussion",
      "detail": {
        "meta": "2025 · Team Project · 4 months",
        "sections": {
          "summary": "CampusTalk is a mobile web concept for students reflecting on prejudice through guided quizzes, anonymous discussion and curated learning content. The structure uses gradual entry points and neutral language for a sensitive topic.",
          "challenge": "The core challenge was reducing defensiveness. Students needed recognition and safe ways to share real experiences, while outsiders needed low pressure entry points that would not make them feel attacked. The second challenge was information overload: too much text, too many features, or an overly moral tone would make users leave before reflection could happen.",
          "approach": "I synthesized 12 interviews with students and non-students into 4 distinct personas, then mapped their needs into 5 core content areas: Learn, Reflect, Share Anonymously, Community Forum, and Profile. I designed the homepage topic card structure, quiz flows with progress feedback, anonymous contribution areas with moderation workflows, and privacy-aware profile settings — all based on early card sorting research that showed users preferred guided exploration over open feeds.",
          "creativeDirection": "CampusTalk is positioned as a calm credibility space rather than an activist campaign or open social feed. Quiet content surfaces and direct language support reading without turning the subject into a visual confrontation.",
          "keyVisualSystem": "Violet gives the platform a reflective educational identity. White reading surfaces, black text and restrained gray hierarchy keep topic cards, quizzes and anonymous contributions distinct without adding visual pressure.",
          "result": [
            "Research input: I synthesized 12 interviews into four personas and five core content areas.",
            "Design decision: The platform moves from Learn to Reflect to Share instead of opening with an unstructured feed.",
            "Research evidence: Card sorting indicated a preference for guided topic cards over open exploration.",
            "Open validation: Usability, moderation workflows and live community behaviour were not tested."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "Designing for prejudice required a lower-pressure entry into the topic. The strongest decisions were structural and tonal: shorten the first reading step, avoid accusatory language, separate learning from anonymous contribution, and guide users through small moments of reflection. It also clarified my strongest role in group projects. I work best when I turn research, sensitive context, and many feature ideas into a clear system the team can build from."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/CampusTalk/Games.jpg",
                "alt": "CampusTalk desktop quiz overview"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/CampusTalk/Create Topic.jpg",
                "alt": "CampusTalk add a post on mobile"
              },
              {
                "src": "../pngs/Projects/CampusTalk/Game(2).jpg",
                "alt": "CampusTalk mobile quiz frontpage"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/CampusTalk/Forum, übersicht über alle topics, (allgemeiner Feed).jpg",
                "alt": "CampusTalk desktop forum"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/CampusTalk/Editorial/Hero Statement.png",
            "alt": "CampusTalk hero statement about guided reflection, quizzes and anonymous discussion"
          },
          {
            "src": "./pngs/Projects/CampusTalk/Editorial/Device Line-up.png",
            "alt": "CampusTalk topic cards, quiz and anonymous sharing screens"
          },
          {
            "src": "./pngs/Projects/CampusTalk/Editorial/Conceptual Diptych.png",
            "alt": "CampusTalk conceptual diptych showing student reflection beside the structured participation flow"
          },
          {
            "src": "./pngs/Projects/CampusTalk/Editorial/Editorial Object Shot.png",
            "alt": "CampusTalk a topic card and quiz interaction as an editorial object study"
          },
          {
            "src": "./pngs/Projects/CampusTalk/Editorial/Information Architecture.png",
            "alt": "CampusTalk information architecture showing the Learn, Reflect, Share, Forum and Profile structure"
          },
          {
            "src": "./pngs/Projects/CampusTalk/Editorial/Detail Crop.png",
            "alt": "CampusTalk detail crop showing quiz progress, neutral microcopy and anonymous contribution controls"
          },
          {
            "src": "./pngs/Projects/CampusTalk/Editorial/Desktop and Mobile System.png",
            "alt": "CampusTalk the responsive CampusTalk learning and discussion system"
          },
          {
            "src": "./pngs/Projects/CampusTalk/Editorial/Closing Mood.png",
            "alt": "CampusTalk closing scene showing the platform framed as a calm campus discussion space"
          }
        ],
        "editorial": {
          "color": "#6E368C",
          "variant": "routeMapEditorial",
          "thesis": "Sensitive topics need a clear entry point before they ask for participation.",
          "scopeNote": "Team project from 2025. The structure draws on 12 interviews, four personas and card sorting. Live community use remains untested.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "Research insight",
              "headline": "Students approached the subject with different levels of trust.",
              "body": "Some participants needed recognition and a safe place to share. Others needed a low-pressure way to learn without feeling accused. One open feed could not serve both situations.",
              "labels": [
                "Students",
                "Sensitive topic",
                "Different entry needs"
              ]
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
                  "value": "12",
                  "label": "Interviews synthesized"
                },
                {
                  "value": "4",
                  "label": "Personas created"
                },
                {
                  "value": "5",
                  "label": "Core content areas"
                }
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Interaction model",
              "headline": "Topic cards guide users before discussion opens.",
              "body": "Card sorting indicated that participants preferred guided exploration. The homepage therefore starts with structured topics, then moves into quizzes, learning content and optional contribution.",
              "labels": [
                "Card sorting",
                "Topic cards",
                "Guided exploration"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Safety decision",
              "headline": "Anonymous sharing includes privacy and moderation states.",
              "body": "Contribution areas separate identity settings, posting states and moderation logic. The design makes the limits of anonymity visible instead of treating it as a single toggle.",
              "labels": [
                "Anonymous posting",
                "Privacy settings",
                "Moderation workflow"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "A community concept needs behaviour and moderation testing.",
              "body": "The current work establishes research-backed structure and prototype flows. It does not show how people would participate over time or how moderation would perform at scale.",
              "labels": [
                "Research-backed structure",
                "No live community test"
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "A guided Learn, Reflect and Share model for a sensitive campus topic."
                },
                {
                  "title": "Current evidence",
                  "text": "12 interviews, four personas and card sorting insights."
                },
                {
                  "title": "Next validation",
                  "text": "Usability sessions, moderation scenarios and live participation behaviour."
                }
              ]
            }
          ],
          "headerEvidence": "12 interviews, four personas and card sorting insights",
          "headerNextValidation": "Usability testing, moderation testing and live community behaviour"
        },
        "role": "UX research, information architecture and interaction design",
        "team": "Mobile web concept developed as a team",
        "ownership": "Interview synthesis, personas, content architecture, topic cards, quiz flows, anonymous sharing and privacy settings",
        "methods": [
          "12 interviews",
          "Persona synthesis",
          "Card sorting",
          "Flow design",
          "Prototype iteration"
        ],
        "evidence": "12 interviews, four personas and card sorting insights",
        "nextValidation": "Usability testing, moderation testing and live community behaviour",
        "metaItems": [
          {
            "label": "Year",
            "value": "2025"
          },
          {
            "label": "Type",
            "value": "Team Project"
          },
          {
            "label": "Team",
            "value": "Mobile web concept developed as a team"
          },
          {
            "label": "Duration",
            "value": "4 months"
          },
          {
            "label": "Role",
            "value": "UX research, information architecture and interaction design"
          },
          {
            "label": "Methods",
            "value": [
              "12 interviews",
              "Persona synthesis",
              "Card sorting",
              "Flow design",
              "Prototype iteration"
            ]
          },
          {
            "label": "Ownership",
            "value": "Interview synthesis, personas, content architecture, topic cards, quiz flows, anonymous sharing and privacy settings"
          }
        ]
      },
      "year": "2025",
      "duration": "4 months",
      "role": "UX research, information architecture and interaction design",
      "team": "Mobile web concept developed as a team",
      "ownership": "Interview synthesis, personas, content architecture, topic cards, quiz flows, anonymous sharing and privacy settings",
      "methods": [
        "12 interviews",
        "Persona synthesis",
        "Card sorting",
        "Flow design",
        "Prototype iteration"
      ]
    },
    //APRÉS
    {
      "slug": "Après",
      "title": "Après",
      "href": "./projectSites/Après.html",
      "categories": [
        "Service Experience"
      ],
      "level": "Independent Project",
      "coverImage": "./pngs/Projects/Aprés/Frame 59 1.png",
      "coverBannerImage": "./pngs/Projects/Aprés/Frame 59 1.png",
      "coverBackgroundColor": "#F4EFE5",
      "coverZoom": 70,
      "imageScale": 2.3,
      "cardCategory": "Luxury post-purchase service",
      "detail": {
        "meta": "2026 · Independent Project",
        "sections": {
          "summary": "Après explores the period after a luxury watch purchase, when customers need tracking, support, returns, care and warranty information. The concept treats these service moments as one connected product flow.",
          "challenge": "The design challenge was to make post-purchase status and support steps clear without presenting logistics as a generic parcel tracker. Missing-package and return states needed direct next actions while retaining the existing premium visual direction.",
          "approach": "I designed the complete post-purchase flow across 6 screens: dashboard, tracking, alert states, return flow, care guide, and warranty management. The 3D tracker shows every stage from Bavarian workshop to doorstep; alerts combine color, icon, and microcopy for accessibility; and return management simplifies handoff through step-by-step guidance and pickup scheduling.",
          "creativeDirection": "Après positions post-purchase care as luxury service, not logistics. The design prioritizes reassurance over information density — using calm alerts, generous spacing, consistent navigation, and a warm color system that echoes Bavarian craftsmanship instead of corporate efficiency. Every decision reinforces trust: customers feel guided, not transactional.",
          "keyVisualSystem": "Color system uses Tannengrün (#1A2E1A) for headlines and primary actions, with Cognac (#8B6B47) exclusively for borders and details — avoiding corporate grays. Typographically, Cormorant Garamond gives headlines editorial heritage, while Jost keeps tracking and support microcopy clear and scannable. 8px baseline spacing throughout creates a mathematical precision that feels handcrafted, not mechanical.",
          "result": [
            "Concept contribution: Six screens connect dashboard, tracking, alerts, returns, care and warranty management.",
            "Design decision: The shipment view shows each stage from the workshop to delivery instead of a single status line.",
            "Accessibility decision: Alert states combine color, icon and direct microcopy rather than relying on color alone.",
            "Open validation: Customer comprehension, support handoff and operational feasibility have not been tested."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "The project shifted the design focus from checkout to the service moments that follow it. Clear status, direct recovery steps and visible care information form the main design argument. User and operational validation remain open."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Aprés/Post-Purchase Landing.png",
                "alt": "Aprés desktop Post-Purchase Landing"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/Aprés/3D Shipment Tracker.png",
                "alt": "Aprés mobile 3D Shipment Tracker"
              },
              {
                "src": "../pngs/Projects/Aprés/My Package Missing_ Flow.png",
                "alt": "Aprés mobile My Package Missing Flow"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Aprés/Proaktiver Alert (Zollverzögerung).png",
                "alt": "Aprés desktop proactive alert"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/Aprés/Return Concierge.png",
                "alt": "Aprés mobile Return Concierge"
              },
              {
                "src": "../pngs/Projects/Aprés/After-Care & Loyalität.png",
                "alt": "Aprés mobile after care & loyalty"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/Aprés/Editorial/Hero Statement.png",
            "alt": "Après hero statement about luxury watch tracking, returns, care and warranty"
          },
          {
            "src": "./pngs/Projects/Aprés/Editorial/Device Line-up.png",
            "alt": "Après dashboard, delivery tracking and support screens"
          },
          {
            "src": "./pngs/Projects/Aprés/Editorial/Conceptual Diptych.png",
            "alt": "Après conceptual diptych showing the physical watch journey beside the digital service flow"
          },
          {
            "src": "./pngs/Projects/Aprés/Editorial/Editorial Object Shot.png",
            "alt": "Après the shipment tracker and watch packaging as an object study"
          },
          {
            "src": "./pngs/Projects/Aprés/Editorial/Information Architecture.png",
            "alt": "Après information architecture showing the post-purchase path from dashboard to support and warranty"
          },
          {
            "src": "./pngs/Projects/Aprés/Editorial/Detail Crop.png",
            "alt": "Après detail crop showing delivery status, missing-package guidance and return actions"
          },
          {
            "src": "./pngs/Projects/Aprés/Editorial/Desktop and Mobile System.png",
            "alt": "Après the desktop and mobile post-purchase service"
          },
          {
            "src": "./pngs/Projects/Aprés/Editorial/Closing Mood.png",
            "alt": "Après closing scene showing the watch and service interface in a premium delivery context"
          }
        ],
        "editorial": {
          "color": "#8B6B47",
          "variant": "routeMapEditorial",
          "thesis": "The post-purchase flow should explain what happens next before customers need support.",
          "scopeNote": "Independent concept from 2026. The evidence is a six-screen high-fidelity prototype. Customer and operational testing remain open.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "Service gap",
              "headline": "The purchase ends before the customer’s questions do.",
              "body": "Tracking, missing-package support, returns, care and warranty information often sit in separate places. The concept starts from that fragmented post-purchase situation.",
              "labels": [
                "Luxury customer",
                "After checkout",
                "Service uncertainty"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "Design decision",
              "headline": "Post-purchase care becomes one product area.",
              "body": "The dashboard connects shipment status, support, returns, care guidance and warranty management instead of sending customers through unrelated service pages.",
              "labels": [
                "Connected service",
                "Dashboard",
                "Support access"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Interaction model",
              "headline": "The tracker shows stages, not a vague delivery label.",
              "body": "A 3D route presents the watch moving from the Bavarian workshop to the doorstep. Each stage has a visible status and a clear place in the sequence.",
              "labels": [
                "Delivery stages",
                "3D tracker",
                "Status sequence"
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Recovery flow",
              "headline": "Missing-package and return states show the next action.",
              "body": "Alerts lead into step-by-step guidance, pickup scheduling and support contact. The flow keeps the recovery path inside the same product context.",
              "labels": [
                "Missing package",
                "Return flow",
                "Pickup scheduling"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Accessibility decision",
              "headline": "Status does not depend on color alone.",
              "body": "Icons and direct microcopy accompany alert colors so the state and required action remain readable across the service flow.",
              "labels": [
                "Color and icon",
                "Direct microcopy",
                "Readable status"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "The service logic needs customer and operational testing.",
              "body": "The prototype defines a connected post-purchase model. It does not confirm comprehension, support response times, logistics integration or business impact.",
              "labels": [
                "Six prototype states",
                "No user testing"
              ],
              "stats": [
                {
                  "value": "6",
                  "label": "High-fidelity screens"
                }
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "A connected post-purchase area for tracking, support, returns, care and warranty."
                },
                {
                  "title": "Current evidence",
                  "text": "Six high-fidelity interface states and a complete service flow."
                },
                {
                  "title": "Next validation",
                  "text": "Customer comprehension, support handoff and operational feasibility."
                }
              ]
            }
          ],
          "headerEvidence": "Six high-fidelity post-purchase prototype states. No user testing.",
          "headerNextValidation": "Comprehension testing, support handoff testing and operational feasibility"
        },
        "role": "Product and service design",
        "team": "Independent project",
        "ownership": "Post-purchase dashboard, tracking, alert states, returns, care guide and warranty flow",
        "methods": [
          "Service-flow design",
          "Interface design",
          "Accessibility-informed alert design"
        ],
        "evidence": "Six high-fidelity post-purchase prototype states. No user testing.",
        "nextValidation": "Comprehension testing, support handoff testing and operational feasibility",
        "metaItems": [
          {
            "label": "Year",
            "value": "2026"
          },
          {
            "label": "Type",
            "value": "Independent Project"
          },
          {
            "label": "Role",
            "value": "Product and service design"
          },
          {
            "label": "Methods",
            "value": [
              "Service-flow design",
              "Interface design",
              "Accessibility-informed alert design"
            ]
          },
          {
            "label": "Ownership",
            "value": "Post-purchase dashboard, tracking, alert states, returns, care guide and warranty flow"
          }
        ]
      },
      "year": "2026",
      "role": "Product and service design",
      "team": "Independent project",
      "ownership": "Post-purchase dashboard, tracking, alert states, returns, care guide and warranty flow",
      "methods": [
        "Service-flow design",
        "Interface design",
        "Accessibility-informed alert design"
      ]
    },
    //DAZN
    {
      "slug": "dazn",
      "title": "DAZN",
      "href": "./projectSites/dazn.html",
      "categories": [
        "Service Experience"
      ],
      "level": "Independent Project",
      "coverImage": "./pngs/Projects/DAZN/DAZN_logo.png",
      "coverBannerImage": "./pngs/Projects/DAZN/DAZN_logo.png",
      "coverBackgroundColor": "#000000",
      "cardCategory": "Transparent subscription management",
      "detail": {
        "meta": "2026 · Independent Project",
        "sections": {
          "summary": "“Users should be able to understand, manage, and end a subscription without friction.” This independent concept redesign examines the DAZN subscription experience through the lens of transparency and user control. It focuses on plan selection, billing clarity, account management, cancellation, and retention offers. The goal was to create a subscription journey that supports conversion while making costs, terms, and exit options easy to understand.",
          "challenge": "DAZN offers different subscription plans, payment models, and commitment periods. This creates a high-stakes decision for users, especially when price, contract duration, renewal dates, and included sports content need to be compared quickly. The challenge was to simplify the full subscription lifecycle without reducing DAZN’s ability to retain customers, promote relevant plans, and communicate the value of its sports offering.",
          "approach": "I mapped the journey from plan discovery to cancellation and identified moments where users could lose context or feel pressured. The redesign introduced a central subscription hub that shows the active plan, monthly price, billing cycle, next payment date, commitment period, and available account actions in one place. Plan comparisons use consistent language and a clear overview of included content. Cancellation becomes a direct account action with a visible end date, a clear confirmation state, and optional retention offers that can be skipped without friction. The concept uses plain-language microcopy to explain every financial and contractual decision before users confirm it.",
          "creativeDirection": "The creative direction reframes DAZN subscription management as a confident and transparent part of the streaming experience. The interface keeps the energy of live sport, but applies it with disciplined hierarchy, direct language, and clear decision points. Subscription information becomes readable at a glance. Prices, contract terms, renewal dates, and cancellation options remain visible instead of being treated as secondary account details. Retention offers appear as optional alternatives, such as pausing, changing plans, or receiving a limited promotion. They never block the user from continuing. The redesign treats clarity as a brand asset. It shows that a premium sports platform can protect revenue while giving users control over their membership.",
          "keyVisualSystem": "The visual system builds on DAZN’s bold sports identity while introducing a calmer structure for account decisions. Strong black and white contrast creates a direct interface. Bright accent colour is reserved for primary actions, live status, and key subscription information. Large plan cards group price, duration, and included content. Clear spacing separates commercial choices from account controls. Progress indicators, confirmation states, and direct microcopy keep each plan change and cancellation step explicit.",
          "result": [
            "Concept contribution: One account hub combines active plan, price, billing cycle, next payment and commitment period.",
            "Design decision: Monthly and annual plans use the same language and comparison structure.",
            "Interaction decision: Cancellation stays visible and retention offers remain optional.",
            "Open validation: Pricing comprehension, cancellation usability and business impact have not been tested."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "The redesign treats pricing, contract details and cancellation as core interface content. The current prototype shows a transparent account model, while user comprehension and retention effects still need testing."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/DAZN/Cancellation Intelligence.png",
                "alt": "DAZN Cancellation Intelligence"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/DAZN/Intelligent Alternative - Price.png",
                "alt": "DAZN Intelligent Alternative - Price"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/DAZN/Intelligent Alternative - Usage.png",
                "alt": "DAZN Intelligent Alternative - Usage"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/DAZN/Transparency Confirmation.png",
                "alt": "DAZN Transparency Confirmation"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/DAZN/Informed Decision Summary.png",
                "alt": "DAZN Informed Decision Summary"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/DAZN/Editorial/Hero Statement.png",
            "alt": "DAZN hero statement about transparent plan, billing and cancellation controls"
          },
          {
            "src": "./pngs/Projects/DAZN/Editorial/Device Line-up.png",
            "alt": "DAZN plan comparison, account hub and cancellation screens"
          },
          {
            "src": "./pngs/Projects/DAZN/Editorial/Conceptual Diptych.png",
            "alt": "DAZN conceptual diptych showing sports content beside the subscription decision flow"
          },
          {
            "src": "./pngs/Projects/DAZN/Editorial/Editorial Object Shot.png",
            "alt": "DAZN the active subscription card as an editorial object study"
          },
          {
            "src": "./pngs/Projects/DAZN/Editorial/Information Architecture.png",
            "alt": "DAZN information architecture showing the journey from plan discovery to cancellation"
          },
          {
            "src": "./pngs/Projects/DAZN/Editorial/Detail Crop.png",
            "alt": "DAZN detail crop showing price, commitment period, renewal and confirmation states"
          },
          {
            "src": "./pngs/Projects/DAZN/Editorial/Desktop and Mobile System.png",
            "alt": "DAZN the desktop and mobile subscription management system"
          },
          {
            "src": "./pngs/Projects/DAZN/Editorial/Closing Mood.png",
            "alt": "DAZN closing scene showing the account experience framed around user control"
          }
        ],
        "editorial": {
          "color": "#a3a322",
          "variant": "routeMapEditorial",
          "thesis": "Subscription control should remain clear from plan selection to cancellation.",
          "scopeNote": "Independent unofficial redesign from 2026. Evidence comes from journey mapping and high-fidelity prototype states. No user testing was conducted.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "Decision risk",
              "headline": "Price, duration and renewal terms compete in one moment.",
              "body": "Users compare plans while trying to understand monthly cost, commitment period, renewal behaviour and included sports content. Losing any of that context weakens the decision.",
              "labels": [
                "Plan selection",
                "Billing terms",
                "Commitment period"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "Journey review",
              "headline": "The subscription lifecycle was mapped beyond checkout.",
              "body": "The concept follows plan discovery, purchase, account management, cancellation and optional retention. Each stage keeps the current contract state visible.",
              "labels": [
                "Journey mapping",
                "Account management",
                "Cancellation"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "System logic",
              "headline": "One account hub carries the contract details.",
              "body": "The active plan, monthly price, billing cycle, next payment date, commitment period and account actions appear in one structured overview.",
              "labels": [
                "Active plan",
                "Next payment",
                "Account actions"
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Content decision",
              "headline": "Plan comparisons use one financial language.",
              "body": "Monthly and annual options follow the same order for price, duration, renewal and included content. The layout removes wording changes that make plans harder to compare.",
              "labels": [
                "Consistent labels",
                "Plan comparison",
                "Plain language"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Exit flow",
              "headline": "Cancellation stays direct and retention stays optional.",
              "body": "The end date and confirmation state remain visible. Pause, downgrade and offer options can be skipped without blocking the cancellation action.",
              "labels": [
                "Visible end date",
                "Optional offers",
                "Clear confirmation"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "Transparency and retention need to be tested together.",
              "body": "The prototype proposes a clearer subscription model. It does not establish comprehension gains, cancellation completion or business impact.",
              "labels": [
                "Unofficial concept",
                "No user testing"
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "A connected plan, billing, account and cancellation model."
                },
                {
                  "title": "Current evidence",
                  "text": "Journey mapping and high-fidelity subscription states."
                },
                {
                  "title": "Next validation",
                  "text": "Pricing comprehension, cancellation usability and retention impact."
                }
              ]
            }
          ],
          "headerEvidence": "Journey review and high-fidelity prototype states. No user testing.",
          "headerNextValidation": "Pricing comprehension, cancellation usability and retention impact"
        },
        "role": "Product and interaction design",
        "team": "Independent project",
        "ownership": "Subscription journey, account hub, plan comparison, cancellation and retention states",
        "methods": [
          "Journey mapping",
          "Content design",
          "Interaction design",
          "High-fidelity prototyping"
        ],
        "evidence": "Journey review and high-fidelity prototype states. No user testing.",
        "nextValidation": "Pricing comprehension, cancellation usability and retention impact",
        "metaItems": [
          {
            "label": "Year",
            "value": "2026"
          },
          {
            "label": "Type",
            "value": "Independent Project"
          },
          {
            "label": "Role",
            "value": "Product and interaction design"
          },
          {
            "label": "Methods",
            "value": [
              "Journey mapping",
              "Content design",
              "Interaction design",
              "High-fidelity prototyping"
            ]
          },
          {
            "label": "Ownership",
            "value": "Subscription journey, account hub, plan comparison, cancellation and retention states"
          }
        ]
      },
      "year": "2026",
      "role": "Product and interaction design",
      "team": "Independent project",
      "ownership": "Subscription journey, account hub, plan comparison, cancellation and retention states",
      "methods": [
        "Journey mapping",
        "Content design",
        "Interaction design",
        "High-fidelity prototyping"
      ]
    },
    //BODIQUE
    {
      "slug": "bodique",
      "title": "Bodique",
      "href": "./projectSites/bodique.html",
      "categories": [
        "Product System"
      ],
      "level": "Team Project",
      "coverImage": "./pngs/Projects/Bodique/Logo.png",
      "coverBannerImage": "./pngs/Projects/Bodique/Logo.png",
      "coverBackgroundColor": "#FEFEFE",
      "coverZoom": 35,
      "imageScale": 1.5,
      "cardCategory": "Digital twin fit guidance",
      "detail": {
        "meta": "2026 · Team Project · 4 months",
        "sections": {
          "summary": "Bodique is a digital twin and virtual try-on concept for fashion sizing. The project examines whether realistic body and garment visualization can support a more informed size decision before purchase.",
          "challenge": "The challenge was addressing a real business problem with high complexity. Fashion has one of the highest return rates, mainly due to fit uncertainty, while users still expect speed, convenience, and trust. At the same time, the team had to align different understandings of the product, manage time pressure, and keep the process structured despite fast project shifts.",
          "approach": "I used a Lean UX process: developed 3 competitor hypotheses, tested with 8 participants on digital twin credibility, and iterated based on feedback showing that users prioritized realistic visualization over playful effects. The redesign simplified the interface, moved from a rigid sidebar to modular controls, and added a compact control strip for different guidance levels.",
          "creativeDirection": "Bodique is positioned as a precise fitting assistant, not a fashion gimmick or tech showcase. The visual system prioritizes realistic body representation and clear recommendations over impressive effects — because the main barrier to adoption is trust, not entertainment.",
          "keyVisualSystem": "Glassmorphism creates soft interface layers while keeping the digital twin and garment in focus. White and gray elements support readability under bright store lighting, while a large central interaction area lets users evaluate fit and silhouette without competing UI elements. Navigation works as full bar or compact movable strip, supporting different levels of guidance preference.",
          "result": [
            "Research setup: The team developed three competitor hypotheses and tested the concept with eight participants.",
            "Testing observation: Participants prioritized realistic visualization and recommendation clarity over playful effects.",
            "Prototype iteration: The interface moved from a rigid sidebar to modular controls and a compact guidance strip.",
            "Open validation: Fit accuracy, privacy comprehension and return behaviour were not measured."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "The testing shifted the concept from spectacle toward credibility. Realistic representation, recommendation logic and control over guidance became the core design priorities. Retail performance and fit accuracy remain open."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "type": "video",
                "src": "../pngs/Projects/Bodique/video.mp4",
                "alt": "Bodique trailer"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/Bodique/WhatsApp Image 2026-03-27 at 23.13.44.jpeg",
                "alt": "Bodique homescreen"
              },
              {
                "src": "../pngs/Projects/Bodique/WhatsApp Image 2026-03-28 at 01.17.01.jpeg",
                "alt": "Bodique testing insights"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Bodique/WhatsApp Image 2026-03-28 at 01.19.51.jpeg",
                "alt": "Bodique interaction screens"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Bodique/WhatsApp Image 2026-03-28 at 01.19.34.jpeg",
                "alt": "Bodique brands and clothe preferences"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/Bodique/Editorial/Hero Statement.png",
            "alt": "Bodique hero statement about digital twin fit guidance before fashion purchase"
          },
          {
            "src": "./pngs/Projects/Bodique/Editorial/Device Line-up.png",
            "alt": "Bodique body model, garment and size recommendation screens"
          },
          {
            "src": "./pngs/Projects/Bodique/Editorial/Conceptual Diptych.png",
            "alt": "Bodique conceptual diptych showing the physical garment beside its digital twin representation"
          },
          {
            "src": "./pngs/Projects/Bodique/Editorial/Editorial Object Shot.png",
            "alt": "Bodique the digital twin and fit controls as an object study"
          },
          {
            "src": "./pngs/Projects/Bodique/Editorial/Information Architecture.png",
            "alt": "Bodique information architecture showing the flow from body model to garment and size recommendation"
          },
          {
            "src": "./pngs/Projects/Bodique/Editorial/Detail Crop.png",
            "alt": "Bodique detail crop showing modular guidance controls and recommendation details"
          },
          {
            "src": "./pngs/Projects/Bodique/Editorial/Desktop and Mobile System.png",
            "alt": "Bodique the desktop and mobile virtual try-on system"
          },
          {
            "src": "./pngs/Projects/Bodique/Editorial/Closing Mood.png",
            "alt": "Bodique closing scene showing the digital twin concept in a fashion shopping context"
          }
        ],
        "editorial": {
          "color": "#8FAF9F",
          "variant": "routeMapEditorial",
          "thesis": "A digital twin needs visual credibility before it can influence a size decision.",
          "scopeNote": "Team project from 2026. Evidence comes from three hypotheses and testing with eight participants. Fit accuracy and return impact remain open.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "Research hypothesis",
              "headline": "Fit uncertainty starts before the size is selected.",
              "body": "The concept examines the gap between a standard size label and how a garment may sit on a specific body. The digital twin had to support that decision without becoming a novelty layer.",
              "labels": [
                "Fashion sizing",
                "Fit uncertainty",
                "Digital twin"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "Lean UX setup",
              "headline": "Three hypotheses framed the competitor review and prototype.",
              "body": "The team compared how existing products present body credibility, garment fit and guidance. Those hypotheses shaped the first testable interface.",
              "labels": [
                "Three hypotheses",
                "Competitor review",
                "Prototype"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Testing observation",
              "headline": "Eight participants preferred realism over playful effects.",
              "body": "Feedback centred on believable visualization, clear recommendations and careful handling of personal data. Decorative effects did not carry the same value.",
              "labels": [
                "Eight participants",
                "Realism",
                "Recommendation clarity"
              ],
              "stats": [
                {
                  "value": "8",
                  "label": "Participants tested"
                },
                {
                  "value": "3",
                  "label": "Hypotheses evaluated"
                }
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Iteration",
              "headline": "The rigid sidebar became a modular control system.",
              "body": "The revised prototype reduces persistent controls and introduces a compact strip that lets users choose how much fit guidance they see.",
              "labels": [
                "Modular controls",
                "Compact strip",
                "Guidance levels"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "System logic",
              "headline": "Body, garment and recommendation stay connected.",
              "body": "Fit details explain the relationship between the twin, garment behaviour and the suggested size rather than presenting a recommendation without context.",
              "labels": [
                "Body model",
                "Garment state",
                "Size recommendation"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "The concept needs technical and retail evidence.",
              "body": "Participant feedback informed the interface direction. It does not confirm fit accuracy, privacy comprehension, lower return rates or live purchase behaviour.",
              "labels": [
                "Prototype tested",
                "Return impact unmeasured"
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "A modular digital twin flow for body, garment and size guidance."
                },
                {
                  "title": "Current evidence",
                  "text": "Three hypotheses and prototype testing with eight participants."
                },
                {
                  "title": "Next validation",
                  "text": "Fit accuracy, privacy comprehension and return behaviour in retail."
                }
              ]
            }
          ],
          "headerEvidence": "Three hypotheses and prototype testing with eight participants",
          "headerNextValidation": "Fit accuracy, privacy comprehension and return behaviour in a live retail context"
        },
        "role": "UX research and interaction design",
        "team": "Digital twin shopping concept developed as a team",
        "ownership": "Lean UX hypotheses, participant testing, interface simplification and modular controls",
        "methods": [
          "Lean UX",
          "Three competitor hypotheses",
          "Testing with eight participants",
          "Prototype iteration"
        ],
        "evidence": "Three hypotheses and prototype testing with eight participants",
        "nextValidation": "Fit accuracy, privacy comprehension and return behaviour in a live retail context",
        "metaItems": [
          {
            "label": "Year",
            "value": "2026"
          },
          {
            "label": "Type",
            "value": "Team Project"
          },
          {
            "label": "Team",
            "value": "Digital twin shopping concept developed as a team"
          },
          {
            "label": "Duration",
            "value": "4 months"
          },
          {
            "label": "Role",
            "value": "UX research and interaction design"
          },
          {
            "label": "Methods",
            "value": [
              "Lean UX",
              "Three competitor hypotheses",
              "Testing with eight participants",
              "Prototype iteration"
            ]
          },
          {
            "label": "Ownership",
            "value": "Lean UX hypotheses, participant testing, interface simplification and modular controls"
          }
        ]
      },
      "year": "2026",
      "duration": "4 months",
      "role": "UX research and interaction design",
      "team": "Digital twin shopping concept developed as a team",
      "ownership": "Lean UX hypotheses, participant testing, interface simplification and modular controls",
      "methods": [
        "Lean UX",
        "Three competitor hypotheses",
        "Testing with eight participants",
        "Prototype iteration"
      ]
    },
    //STORE GUIDE
    {
      "slug": "storeGuide",
      "title": "Store Guide",
      "href": "./projectSites/storeGuide.html",
      "categories": [
        "Service Experience"
      ],
      "level": "Team Project",
      "coverImage": "./pngs/Projects/Store Guide/cover 1.png",
      "coverBannerImage": "./pngs/Projects/Store Guide/cover.png",
      "coverBackgroundColor": "#30782F",
      "coverZoom": 50,
      "imageScale": 1.8,
      "cardCategory": "In-store navigation and comparison",
      "detail": {
        "meta": "2023 · Team Project · 4 months",
        "sections": {
          "summary": "Store Guide is an in-store navigation concept that combines step-by-step routing with product details and comparison. The interaction model keeps route progress and product decisions inside one flow.",
          "challenge": "The core challenge was designing fast, predictable routing that users could trust under time pressure — without letting exploratory features distract from the main task of finding the right product.",
          "approach": "I defined the core interaction model: guided step-by-step routing where users follow clear instructions instead of searching manually. Product details and comparison are integrated directly into routes, so users make decisions without breaking their flow — every decision supports speed and clarity.",
          "creativeDirection": "StoreGuide is positioned as a practical orientation tool, not a feature-heavy shopping companion — prioritizing speed and clarity because users are impatient and decisions need to happen quickly.",
          "keyVisualSystem": "Deep green marks guidance, active states, and primary actions, while white and light gray keep product information and route steps readable in busy shopping environments. Simple card structure, direct step indicators, and clear route hierarchy minimize decoration so users can stay focused on finding and comparing products.",
          "result": [
            "Design ownership: I defined the guided routing model and integrated product comparison.",
            "Design decision: Product details remain inside the route instead of opening a separate search path.",
            "Prototype result: Step indicators and repeated modules establish a consistent orientation model.",
            "Open validation: In-store wayfinding, route recovery and comparison comprehension were not tested."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "The project established a direct interaction model under a limited scope and with a team new to UX design. The next step would be testing the route logic in a physical store rather than claiming navigation performance from the prototype alone.",
          "link": "../Booklets/Booklet Final Holzwert Julia.pdf"
        },
        "images": [
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/Store Guide/Home.png",
                "alt": "Store Guide Homescreen"
              },
              {
                "src": "../pngs/Projects/Store Guide/Sonderfall.png",
                "alt": "Store Guide special case"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/Store Guide/Produkt.png",
                "alt": "Store Guide Start route"
              },
              {
                "src": "../pngs/Projects/Store Guide/Lokalisation.jpg",
                "alt": "Store Guide localization"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/Store Guide/Editorial/Hero Statement.png",
            "alt": "Store Guide hero statement about guided in-store routing and product comparison"
          },
          {
            "src": "./pngs/Projects/Store Guide/Editorial/Device Line-up.png",
            "alt": "Store Guide search, aisle guidance and product comparison screens"
          },
          {
            "src": "./pngs/Projects/Store Guide/Editorial/Conceptual Diptych.png",
            "alt": "Store Guide conceptual diptych showing the physical store route beside the mobile navigation flow"
          },
          {
            "src": "./pngs/Projects/Store Guide/Editorial/Editorial Object Shot.png",
            "alt": "Store Guide the route card and product marker as an object study"
          },
          {
            "src": "./pngs/Projects/Store Guide/Editorial/Information Architecture.png",
            "alt": "Store Guide information architecture showing the route from product search to aisle and comparison"
          },
          {
            "src": "./pngs/Projects/Store Guide/Editorial/Detail Crop.png",
            "alt": "Store Guide detail crop showing step indicators, route status and product decision controls"
          },
          {
            "src": "./pngs/Projects/Store Guide/Editorial/Mobile System.png",
            "alt": "Store Guide the mobile in-store navigation system"
          },
          {
            "src": "./pngs/Projects/Store Guide/Editorial/Closing Mood.png",
            "alt": "Store Guide closing scene showing the Store Guide flow inside a retail environment"
          }
        ],
        "editorial": {
          "color": "#30782F",
          "variant": "routeMapEditorial",
          "thesis": "In-store guidance should keep movement and product decisions in the same flow.",
          "scopeNote": "Team project from 2023. The evidence is a structured prototype and design rationale. No documented user testing is available.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "In-store constraint",
              "headline": "Searching for a product interrupts the shopping task.",
              "body": "Users need orientation, route progress and product information while moving through a store. Separate search and detail views would break that sequence.",
              "labels": [
                "In-store movement",
                "Product search",
                "Orientation"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "My contribution",
              "headline": "I defined the guided route and its decision points.",
              "body": "The core interaction model uses step-by-step instructions with repeated route states. Product comparison is integrated where the user reaches the relevant item.",
              "labels": [
                "Interaction model",
                "Guided routing",
                "Step logic"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Flow decision",
              "headline": "Product details stay inside the route.",
              "body": "Users can compare items without leaving navigation and then return to the same route state. The design keeps location and product context visible together.",
              "labels": [
                "Integrated comparison",
                "Route continuity",
                "Product context"
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Orientation logic",
              "headline": "Repeated modules show where the user is and what comes next.",
              "body": "Simple step indicators and consistent module placement create a predictable sequence from search to aisle guidance and product choice.",
              "labels": [
                "Step indicators",
                "Repeated modules",
                "Next action"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Project constraint",
              "headline": "The system was built within a limited team scope.",
              "body": "The project focused on a clear interaction model rather than a complete retail platform. That constraint kept the prototype centred on route and comparison behaviour.",
              "labels": [
                "Team new to UX",
                "Limited scope",
                "Core flow"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "The route logic needs testing in a physical store.",
              "body": "The prototype proposes a consistent navigation model. It does not confirm route speed, recovery from wrong turns or comparison comprehension.",
              "labels": [
                "Prototype flow",
                "No documented testing"
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "A guided in-store route with product comparison inside the same flow."
                },
                {
                  "title": "Current evidence",
                  "text": "Structured prototype states and interaction rationale."
                },
                {
                  "title": "Next validation",
                  "text": "Store wayfinding, route recovery and comparison comprehension."
                }
              ]
            }
          ],
          "headerEvidence": "Structured prototype flow and design rationale. No documented user testing.",
          "headerNextValidation": "Wayfinding tests in a store, route recovery and product-comparison comprehension"
        },
        "role": "Interaction design",
        "team": "In-store navigation concept developed as a team",
        "ownership": "Guided routing model, product comparison inside the route and step logic",
        "methods": [
          "Interaction-model definition",
          "Task-flow design",
          "Route-state design",
          "Constraint-led iteration"
        ],
        "evidence": "Structured prototype flow and design rationale. No documented user testing.",
        "nextValidation": "Wayfinding tests in a store, route recovery and product-comparison comprehension",
        "metaItems": [
          {
            "label": "Year",
            "value": "2023"
          },
          {
            "label": "Type",
            "value": "Team Project"
          },
          {
            "label": "Team",
            "value": "In-store navigation concept developed as a team"
          },
          {
            "label": "Duration",
            "value": "4 months"
          },
          {
            "label": "Role",
            "value": "Interaction design"
          },
          {
            "label": "Methods",
            "value": [
              "Interaction-model definition",
              "Task-flow design",
              "Route-state design",
              "Constraint-led iteration"
            ]
          },
          {
            "label": "Ownership",
            "value": "Guided routing model, product comparison inside the route and step logic"
          }
        ]
      },
      "year": "2023",
      "duration": "4 months",
      "role": "Interaction design",
      "team": "In-store navigation concept developed as a team",
      "ownership": "Guided routing model, product comparison inside the route and step logic",
      "methods": [
        "Interaction-model definition",
        "Task-flow design",
        "Route-state design",
        "Constraint-led iteration"
      ]
    },
    //PRINTER INTERFACE
    {
      "slug": "printerInterface",
      "title": "Printer Interface",
      "href": "./projectSites/printerInterface.html",
      "categories": [
        "Communication System"
      ],
      "level": "Independent Project",
      "coverImage": "./pngs/Projects/Printer Display Redesign/logo.png",
      "coverBannerImage": "./pngs/Projects/Printer Display Redesign/logo.png",
      "coverBackgroundColor": "#ffffff",
      "coverZoom": 0,
      "imageScale": 1.3,
      "cardCategory": "Campus printing workflow",
      "detail": {
        "meta": "2024 · Independent Project",
        "sections": {
          "summary": "This unofficial PaperCut redesign examines the campus printing flow from web preparation to the printer display. It aligns menu structure, active states and THI visual identity across both touchpoints.",
          "challenge": "Campus printers serve a wide range of users under time pressure. The existing interface presented too many options at once, lacked clear visual hierarchy, and offered no coherent connection between the web-based preparation tool and the physical printer display. The result was confusion, slower print jobs, and underuse of available features. The challenge was consolidating a fragmented system into a single, cohesive experience without sacrificing the flexibility users needed.",
          "approach": "I redesigned the interaction and visual hierarchy, using THI blue as a structural signal rather than a decorative brand layer. Menus were simplified and the web preparation states were matched to the printer display so the next action remains visible.",
          "creativeDirection": "The printer is positioned as a dependable campus utility, not a feature-heavy machine interface — prioritizing clarity and speed because users are impatient and have other priorities.",
          "keyVisualSystem": "Deep blue, based on THI's identity, marks active guidance and primary actions. White keeps inactive elements visible without giving them equal weight. Fixed module zones and reusable components place setup, transfer and print states in the same locations. Task speed and confidence still need usability testing.",
          "result": [
            "Concept contribution: One interaction language connects web preparation and the printer display.",
            "Design decision: THI blue marks active actions and system priority instead of decorating every screen.",
            "Prototype result: Menus and print states follow a consistent hierarchy across both touchpoints.",
            "Open validation: Task time, first-use comprehension and hardware accessibility were not tested."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "The redesign focuses on predictability across two connected interfaces. It proposes fewer competing controls and clearer active states, while leaving task performance and hardware testing open.",
          "link": "../Booklets/Booklet II Final Julia Holzwert.pdf"
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Printer Display Redesign/Login.png",
                "alt": "Printer Interface Login"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Printer Display Redesign/Home.png",
                "alt": "Printer Interface Homescreen"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Printer Display Redesign/Senden-Sendeziel.png",
                "alt": "Printer Interface Overview"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "type": "compare",
                "before": "../pngs/Projects/Printer Display Redesign/before.jpeg",
                "after": "../pngs/Projects/Printer Display Redesign/Senden-Standardeinstellungen.jpg",
                "altBefore": "INVG before Redesign",
                "altAfter": "INVG after Redesign"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/Printer Display Redesign/Editorial/Hero Statement.png",
            "alt": "Printer Interface hero statement about the campus web-to-printer workflow"
          },
          {
            "src": "./pngs/Projects/Printer Display Redesign/Editorial/Device Line-up.png",
            "alt": "Printer Interface web preparation and printer display states"
          },
          {
            "src": "./pngs/Projects/Printer Display Redesign/Editorial/Conceptual Diptych.png",
            "alt": "Printer Interface conceptual diptych showing the shared printer beside the revised interface hierarchy"
          },
          {
            "src": "./pngs/Projects/Printer Display Redesign/Editorial/Editorial Object Shot.png",
            "alt": "Printer Interface the printer action panel as an editorial object study"
          },
          {
            "src": "./pngs/Projects/Printer Display Redesign/Editorial/Information Architecture.png",
            "alt": "Printer Interface information architecture showing the flow from document preparation to print release"
          },
          {
            "src": "./pngs/Projects/Printer Display Redesign/Editorial/Detail Crop.png",
            "alt": "Printer Interface detail crop showing THI blue active states, menu hierarchy and confirmations"
          },
          {
            "src": "./pngs/Projects/Printer Display Redesign/Editorial/Mobile System.png",
            "alt": "Printer Interface the campus printer interface system"
          },
          {
            "src": "./pngs/Projects/Printer Display Redesign/Editorial/Closing Mood.png",
            "alt": "Printer Interface closing scene showing the redesigned interface at a shared university printer"
          }
        ],
        "editorial": {
          "color": "#005CA9",
          "variant": "routeMapEditorial",
          "thesis": "A campus printer should feel like one system before and after the user reaches the device.",
          "scopeNote": "Independent unofficial redesign from 2024. The evidence is an interface review and high-fidelity prototype. No user testing was conducted.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "Critical constraint",
              "headline": "Printing is often completed under time pressure.",
              "body": "Students prepare a job on the web and finish it at a shared printer. Inconsistent menus or unclear active states become more visible when the next class or deadline is close.",
              "labels": [
                "Campus users",
                "Shared device",
                "Time pressure"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "Interface review",
              "headline": "The web flow and printer display used competing hierarchies.",
              "body": "The redesign treats preparation, release and print options as one sequence instead of two interfaces with separate visual rules.",
              "labels": [
                "Web preparation",
                "Printer display",
                "Flow continuity"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Design decision",
              "headline": "THI blue carries action priority.",
              "body": "The institutional color is reserved for active elements and relevant next actions. Neutral surfaces hold secondary settings and status information.",
              "labels": [
                "THI blue",
                "Active state",
                "Visual hierarchy"
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Interaction model",
              "headline": "Preparation states translate directly to the printer.",
              "body": "Labels, option order and confirmation states follow the same structure before and after authentication at the device.",
              "labels": [
                "Matched labels",
                "Option order",
                "Confirmation"
              ]
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
                  "title": "Concept contribution",
                  "text": "A consistent web-to-printer flow with shared hierarchy and states."
                },
                {
                  "title": "Current evidence",
                  "text": "Interface review and high-fidelity redesign."
                },
                {
                  "title": "Next validation",
                  "text": "Task completion, first-use comprehension and hardware accessibility."
                }
              ]
            }
          ],
          "headerEvidence": "Interface review and high-fidelity redesign. No user testing.",
          "headerNextValidation": "Task completion, first-use comprehension and accessibility testing on the printer hardware"
        },
        "role": "Interaction and visual design",
        "team": "Independent project",
        "ownership": "Web-to-printer flow, menu structure, hierarchy and THI visual integration",
        "methods": [
          "Flow mapping",
          "Interface hierarchy review",
          "Visual system design",
          "High-fidelity prototyping"
        ],
        "evidence": "Interface review and high-fidelity redesign. No user testing.",
        "nextValidation": "Task completion, first-use comprehension and accessibility testing on the printer hardware",
        "metaItems": [
          {
            "label": "Year",
            "value": "2024"
          },
          {
            "label": "Type",
            "value": "Independent Project"
          },
          {
            "label": "Role",
            "value": "Interaction and visual design"
          },
          {
            "label": "Methods",
            "value": [
              "Flow mapping",
              "Interface hierarchy review",
              "Visual system design",
              "High-fidelity prototyping"
            ]
          },
          {
            "label": "Ownership",
            "value": "Web-to-printer flow, menu structure, hierarchy and THI visual integration"
          }
        ]
      },
      "year": "2024",
      "role": "Interaction and visual design",
      "team": "Independent project",
      "ownership": "Web-to-printer flow, menu structure, hierarchy and THI visual integration",
      "methods": [
        "Flow mapping",
        "Interface hierarchy review",
        "Visual system design",
        "High-fidelity prototyping"
      ]
    },
    //MEMOWE
    {
      "slug": "memowe",
      "title": "MemoWe",
      "href": "./projectSites/memowe.html",
      "categories": [
        "Trust & Care System"
      ],
      "level": "Independent Project",
      "coverImage": "./pngs/Projects/MemoWe/Logo 4.png",
      "coverBannerImage": "./pngs/Projects/MemoWe/Logo 4.png",
      "coverBackgroundColor": "#30BAC7",
      "coverZoom": 70,
      "imageScale": 2.1,
      "cardCategory": "Dementia support and family connection",
      "detail": {
        "meta": "2024 · Independent Project · 6 months",
        "sections": {
          "summary": "MemoWe is a product concept for people living with dementia and their families. It combines familiar communication, shared media and a daily routine in an interface designed around recognition and predictable navigation.",
          "challenge": "Designing for users with dementia requires an entirely different standard of clarity. Cognitive load, visual noise, and inconsistent patterns are not just inconveniences — they are genuine barriers. At the same time, the product needed to serve family members who may be less tech-savvy or emotionally overwhelmed. The challenge was creating a single, unified experience that felt intuitive, warm, and reliable for both audiences simultaneously.",
          "approach": "I led the product design from architecture to interface. Warm colours, high contrast, repeated navigation patterns, large touch targets and a daily routine feature were designed around recognition and a limited number of choices per step.",
          "creativeDirection": "MemoWe is framed as a daily support system rather than a medical tool or productivity app. The design intent was to give people with dementia and their families clear orientation without adding dense navigation. The visual system uses warm colours, high contrast, familiar patterns, large readable elements, and repeated flows. I avoided complex dashboards, clinical aesthetics, and feature-heavy navigation. The key decision was to establish a consistent routine structure before adding secondary features.",
          "keyVisualSystem": "Turquoise (#00A099) identifies primary navigation without using a clinical health-tech palette. Light orange separates supportive prompts from core actions. Translucent layers group related content. Large readable elements, high contrast, and repeated patterns keep navigation states consistent. Recognition and comprehension still need testing with the intended users.",
          "result": [
            "Design ownership: I led the product from information architecture to final interface.",
            "Accessibility decision: Navigation, contrast, touch targets and routine states follow predictable patterns.",
            "Feedback observation: Early family feedback indicated a need for larger targets and consistent navigation.",
            "Open validation: The concept has not been evaluated clinically or tested with people living with dementia."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "MemoWe required careful separation between design intent and medical evidence. The current work proposes a predictable shared-care interface and incorporates early family feedback. Direct testing with the primary user group remains essential."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "type": "video",
                "src": "../pngs/Projects/MemoWe/MemoWe_Ad_JuHo.mp4",
                "alt": "MemoWe Trailer"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/MemoWe/profile home.png",
                "alt": "MemoWe Profile"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/MemoWe/upload.png",
                "alt": "MemoWe Upload"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/MemoWe/activity tracker.jpg",
                "alt": "MemoWe Resident Profile Information"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/MemoWe/Editorial/Hero Statement.png",
            "alt": "MemoWe hero statement about recognition, family connection and daily routine support"
          },
          {
            "src": "./pngs/Projects/MemoWe/Editorial/Device Line-up.png",
            "alt": "MemoWe patient and family interface states"
          },
          {
            "src": "./pngs/Projects/MemoWe/Editorial/Conceptual Diptych.png",
            "alt": "MemoWe conceptual diptych showing family memories beside the predictable care interface"
          },
          {
            "src": "./pngs/Projects/MemoWe/Editorial/Editorial Object Shot.png",
            "alt": "MemoWe a routine card and shared memory as an object study"
          },
          {
            "src": "./pngs/Projects/MemoWe/Editorial/Information Architecture.png",
            "alt": "MemoWe information architecture showing the relationship between patient actions, family input and routine"
          },
          {
            "src": "./pngs/Projects/MemoWe/Editorial/Detail Crop.png",
            "alt": "MemoWe detail crop showing large touch targets, repeated navigation and routine states"
          },
          {
            "src": "./pngs/Projects/MemoWe/Editorial/Mobile System.png",
            "alt": "MemoWe the mobile care and family connection system"
          },
          {
            "src": "./pngs/Projects/MemoWe/Editorial/Closing Mood.png",
            "alt": "MemoWe closing scene showing MemoWe placed in a calm home-care setting"
          }
        ],
        "editorial": {
          "color": "#00A099",
          "variant": "routeMapEditorial",
          "thesis": "A care interface should make recognition and routine visible before it adds more features.",
          "scopeNote": "Independent project from 2024. The concept uses cognitive accessibility principles and early family feedback. No clinical evaluation was conducted.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "User situation",
              "headline": "Memory loss changes how daily connection is accessed.",
              "body": "People living with dementia and their families need communication and routine without relying on complex navigation or changing interaction patterns.",
              "labels": [
                "People with dementia",
                "Families",
                "Daily routine"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "Accessibility constraint",
              "headline": "Recognition matters more than feature density.",
              "body": "The interface uses repeated navigation, strong contrast, warm color cues and large touch targets to keep the main actions familiar.",
              "labels": [
                "Predictable navigation",
                "Large targets",
                "High contrast"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "System logic",
              "headline": "Patient and family actions meet in one product.",
              "body": "Family members can add media and routine content, while the patient-facing side keeps the available actions limited and consistent.",
              "labels": [
                "Shared media",
                "Family input",
                "Patient view"
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Feedback observation",
              "headline": "Families asked for predictable patterns and larger targets.",
              "body": "Early feedback led to repeated placement, clearer touch areas and fewer changes between daily states.",
              "labels": [
                "Early family feedback",
                "Repeated placement",
                "Touch targets"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Interaction model",
              "headline": "The daily routine turns time into a stable sequence.",
              "body": "Routine cards present the current and next activity without requiring users to navigate through a calendar or layered menu.",
              "labels": [
                "Current activity",
                "Next activity",
                "Simple sequence"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "The primary user group needs to test the interface directly.",
              "body": "The concept follows accessibility principles and family feedback. It does not establish clinical benefit, reduced cognitive load or independent use by people living with dementia.",
              "labels": [
                "Early feedback",
                "No clinical evaluation"
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "A shared-care interface built around recognition, routine and limited choices."
                },
                {
                  "title": "Current evidence",
                  "text": "Cognitive accessibility principles and early family feedback."
                },
                {
                  "title": "Next validation",
                  "text": "Testing with people living with dementia, caregivers and specialists."
                }
              ]
            }
          ],
          "headerEvidence": "Cognitive accessibility principles and early feedback with families",
          "headerNextValidation": "Testing with people living with dementia, caregivers and clinical or accessibility specialists"
        },
        "role": "End-to-end product design",
        "team": "Independent project",
        "ownership": "Information architecture, interface design, cognitive accessibility and the daily routine feature",
        "methods": [
          "Information architecture",
          "Cognitive accessibility review",
          "Interface design",
          "Early family feedback"
        ],
        "evidence": "Cognitive accessibility principles and early feedback with families",
        "nextValidation": "Testing with people living with dementia, caregivers and clinical or accessibility specialists",
        "metaItems": [
          {
            "label": "Year",
            "value": "2024"
          },
          {
            "label": "Type",
            "value": "Independent Project"
          },
          {
            "label": "Duration",
            "value": "6 months"
          },
          {
            "label": "Role",
            "value": "End-to-end product design"
          },
          {
            "label": "Methods",
            "value": [
              "Information architecture",
              "Cognitive accessibility review",
              "Interface design",
              "Early family feedback"
            ]
          },
          {
            "label": "Ownership",
            "value": "Information architecture, interface design, cognitive accessibility and the daily routine feature"
          }
        ]
      },
      "year": "2024",
      "duration": "6 months",
      "role": "End-to-end product design",
      "team": "Independent project",
      "ownership": "Information architecture, interface design, cognitive accessibility and the daily routine feature",
      "methods": [
        "Information architecture",
        "Cognitive accessibility review",
        "Interface design",
        "Early family feedback"
      ]
    },
    //PIKBRE 3D REMOTE CONTROL
    {
      "slug": "pikBre3D-RemoteControl",
      "title": "PikBre 3D - Remote",
      "href": "./projectSites/pikBre3D-RemoteControl.html",
      "categories": [
        "Product System"
      ],
      "level": "Team Project",
      "coverImage": "./pngs/Projects/PikBre 3D - Remote Control/logo.png",
      "coverBannerImage": "./pngs/Projects/PikBre 3D - Remote Control/logo.png",
      "coverBackgroundColor": "#FEFEFE",
      "coverZoom": 10,
      "imageScale": 1.5,
      "cardCategory": "Expressive gaming remote control",
      "detail": {
        "meta": "2025 · Team Project · 5 weeks",
        "sections": {
          "summary": "PikBre is an ambient remote control concept for gaming environments. Its sculptural form, symbolic buttons and green illumination place the object between a functional controller and a display piece.",
          "challenge": "Delivering a complete product design process within a tight five-week window, alongside other academic commitments, required both disciplined time management and clear team coordination. Beyond logistics, the real design challenge was developing a coherent visual and functional language for an everyday object — one where every formal decision needed to be grounded in design theory, from aesthetic principles to sign and symbol function.",
          "approach": "I led the form exploration and interaction logic, using a Pikmin-inspired flower silhouette to make the remote feel like a collectible object instead of a generic peripheral. Black body with green illumination creates a gaming-room aesthetic, while honeycomb controls and leaf-shaped buttons communicate function through object language before interaction.",
          "creativeDirection": "PikBre is positioned as an expressive ambient controller, not a neutral household remote — treating the object as a visible design presence in gaming spaces rather than something to be hidden.",
          "keyVisualSystem": "Black body and green illumination reference gaming peripherals and gaming culture, while the flower-like silhouette makes the remote feel collectible and character-driven. Form follows function: honeycomb controls area, leaf-shaped buttons, and glowing power signal create symbolic cues without relying on conventional remote layouts — making the object readable and memorable.",
          "result": [
            "Design ownership: I led the form exploration and interaction logic.",
            "Form decision: A flower silhouette and honeycomb controls create a distinct object language.",
            "Symbol decision: Leaf-shaped buttons and illumination communicate control states through the object itself.",
            "Open validation: Ergonomics, symbol recognition and hardware feasibility were not tested."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "The project used design theory to connect form, symbols and gaming culture within a five-week scope. The final model defines a clear product character, while physical use and hardware constraints remain open."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/PikBre 3D - Remote Control/early stage.jpeg",
                "alt": "PikBre early Stage"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/PikBre 3D - Remote Control/first impression.jpeg",
                "alt": "PikBre first Impression"
              },
              {
                "src": "../pngs/Projects/PikBre 3D - Remote Control/product.jpeg",
                "alt": "PikBre Product"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/PikBre 3D - Remote Control/WhatsApp Image 2026-03-27 at 22.28.53.jpeg",
                "alt": "PikBre Quality & Complexity"
              },
              {
                "src": "../pngs/Projects/PikBre 3D - Remote Control/WhatsApp Image 2026-03-27 at 22.29.35.jpeg",
                "alt": "PikBre Quality & Complexity"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Hero Statement.png",
            "alt": "PikBre 3D - Remote hero statement about the expressive gaming remote form and controls"
          },
          {
            "src": "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Device Line-up.png",
            "alt": "PikBre 3D - Remote the remote form, button layout and illuminated states"
          },
          {
            "src": "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Conceptual Diptych.png",
            "alt": "PikBre 3D - Remote conceptual diptych showing gaming-room culture beside the flower-inspired object"
          },
          {
            "src": "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Editorial Object Shot.png",
            "alt": "PikBre 3D - Remote the sculptural remote presented as a collectible object"
          },
          {
            "src": "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Information Architecture.png",
            "alt": "PikBre 3D - Remote information architecture showing the mapping between controls, symbols and light states"
          },
          {
            "src": "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Detail Crop.png",
            "alt": "PikBre 3D - Remote detail crop showing honeycomb controls, leaf buttons and green illumination"
          },
          {
            "src": "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Mobile System.png",
            "alt": "PikBre 3D - Remote the physical remote control system and its interaction states"
          },
          {
            "src": "./pngs/Projects/PikBre 3D - Remote Control/Editorial/Closing Mood.png",
            "alt": "PikBre 3D - Remote closing scene showing the remote displayed within a gaming setup"
          }
        ],
        "editorial": {
          "color": "#59c336",
          "variant": "routeMapEditorial",
          "thesis": "A gaming control can be readable and expressive without becoming a generic peripheral.",
          "scopeNote": "Team project from 2025, completed in five weeks. Evidence comes from a theory-led form study and 3D concept. No usability testing was conducted.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "Cultural context",
              "headline": "A neutral remote disappears in a room built around identity.",
              "body": "Gaming spaces often treat peripherals as visible parts of the setup. The object needed functional controls and a form worth displaying.",
              "labels": [
                "Gaming environment",
                "Display object",
                "Remote control"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "My contribution",
              "headline": "I led the form exploration and interaction logic.",
              "body": "The work connected the flower silhouette, button placement, symbols and light states into one object language within a five-week project window.",
              "labels": [
                "Form exploration",
                "Interaction logic",
                "Five weeks"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Form language",
              "headline": "The silhouette references a collectible rather than an appliance.",
              "body": "A Pikmin-inspired flower profile and black body give the remote a clear presence without changing the basic hand-held function.",
              "labels": [
                "Flower silhouette",
                "Black body",
                "Collectible character"
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Symbol mapping",
              "headline": "Honeycomb and leaf controls carry distinct actions.",
              "body": "The control shapes separate primary functions before labels are read. Green illumination indicates power and reinforces the gaming-room context.",
              "labels": [
                "Honeycomb controls",
                "Leaf buttons",
                "Green light"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Theory review",
              "headline": "Each formal choice was linked to sign and aesthetic principles.",
              "body": "The presentation used design theory to explain why the form, symbols and material direction belonged together rather than treating the model as a styling exercise.",
              "labels": [
                "Semiotics",
                "Aesthetic principles",
                "Design rationale"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "The object needs physical and technical testing.",
              "body": "The 3D concept establishes form and control logic. It does not confirm grip comfort, reach, symbol recognition or hardware construction.",
              "labels": [
                "3D concept",
                "No usability testing"
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "An expressive remote with a unified form, symbol and light language."
                },
                {
                  "title": "Current evidence",
                  "text": "Theory-led form development and a final 3D concept."
                },
                {
                  "title": "Next validation",
                  "text": "Ergonomics, control recognition and hardware feasibility."
                }
              ]
            }
          ],
          "headerEvidence": "Theory-led form study and final 3D concept. No usability testing.",
          "headerNextValidation": "Ergonomic testing, control recognition and hardware feasibility"
        },
        "role": "Industrial and interaction design",
        "team": "Remote control concept developed as a team",
        "ownership": "Form exploration, interaction logic, symbolic controls and visual language",
        "methods": [
          "Form exploration",
          "Design theory review",
          "Symbol mapping",
          "3D concept development"
        ],
        "evidence": "Theory-led form study and final 3D concept. No usability testing.",
        "nextValidation": "Ergonomic testing, control recognition and hardware feasibility",
        "metaItems": [
          {
            "label": "Year",
            "value": "2025"
          },
          {
            "label": "Type",
            "value": "Team Project"
          },
          {
            "label": "Team",
            "value": "Remote control concept developed as a team"
          },
          {
            "label": "Duration",
            "value": "5 weeks"
          },
          {
            "label": "Role",
            "value": "Industrial and interaction design"
          },
          {
            "label": "Methods",
            "value": [
              "Form exploration",
              "Design theory review",
              "Symbol mapping",
              "3D concept development"
            ]
          },
          {
            "label": "Ownership",
            "value": "Form exploration, interaction logic, symbolic controls and visual language"
          }
        ]
      },
      "year": "2025",
      "duration": "5 weeks",
      "role": "Industrial and interaction design",
      "team": "Remote control concept developed as a team",
      "ownership": "Form exploration, interaction logic, symbolic controls and visual language",
      "methods": [
        "Form exploration",
        "Design theory review",
        "Symbol mapping",
        "3D concept development"
      ]
    },
    //DB NAVIGATOR REDESIGN
    {
      "slug": "DBNavigatorRedesign",
      "title": "DB Navigator Accessibility",
      "href": "./projectSites/DBNavigatorRedesign.html",
      "categories": [
        "Interaction System"
      ],
      "level": "Independent Project",
      "coverImage": "./pngs/Projects/DB Navigator Redesign/Logo.png",
      "coverBannerImage": "./pngs/Projects/DB Navigator Redesign/Logo.png",
      "coverBackgroundColor": "#ffffff",
      "coverZoom": 50,
      "imageScale": 1.85,
      "cardCategory": "Accessibility-focused route comparison",
      "detail": {
        "meta": "2026 · Independent Project",
        "sections": {
          "summary": "This unofficial DB Navigator redesign explores clearer route comparison for elderly passengers and disabled users. It integrates access conditions, stronger contrast and clearer state hierarchy into familiar journey-planning patterns.",
          "challenge": "Making DB Navigator more accessible without forcing users to relearn it. The app already has familiar patterns for search, connection results, and journey details, so the redesign had to improve clarity, contrast, status feedback, and inclusive travel information within the existing structure.",
          "approach": "I redesigned connection results, journey details, and delay states to improve contrast, icon support, and grouping logic. A new Accessibility display option brings wheelchair spaces, elevators, step-free access, accessible toilets, vibration alerts, tactile guidance, hearing support, and assistance services directly into the journey flow instead of a separate mode.",
          "creativeDirection": "The redesign is positioned as a reliability upgrade that keeps familiar DB Navigator structures while making critical information easier to scan through stronger contrast, icon support, and clearer hierarchy.",
          "keyVisualSystem": "Inter typography supports functional reading in dense travel contexts. Delay, punctuality, and occupancy each receive distinct state colors: strong contrast pairing dark backgrounds with white text. A new white icon palette on categorized backgrounds (mobility, sanitary, sensory, assistance) marks accessibility options, helping users scan and compare at route level.",
          "result": [
            "Concept contribution: Connection results, journey details, delay states, occupancy and route-level access information were redesigned.",
            "Accessibility decision: Mobility, sanitary, sensory and assistance conditions appear inside the normal journey flow.",
            "System decision: Existing DB Navigator patterns remain in place while contrast, icons and grouping are revised.",
            "Open validation: No user testing was conducted, so usability impact remains unconfirmed."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "This project taught me that Accessibility redesign is often about integration, not separation. The stronger decision was to make important travel conditions visible inside the normal journey flow instead of creating a special mode. It also sharpened my judgement around established products: good redesign does not always mean changing the structure. Sometimes it means making the existing system clearer, more readable, and more inclusive."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "type": "compare",
                "before": "../pngs/Projects/DB Navigator Redesign/Darkmode.png",
                "after": "../pngs/Projects/DB Navigator Redesign/Lightmode.png",
                "altBefore": "DB Navigator before WCAG AAA in Light mode",
                "altAfter": "DB Navigator before WCAG AAA in Dark mode"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "type": "compare",
                "before": "../pngs/Projects/DB Navigator Redesign/Tickets D.png",
                "after": "../pngs/Projects/DB Navigator Redesign/Tickets L.png",
                "altBefore": "DB Navigator with Inclusion add on in Light mode",
                "altAfter": "DB Navigator with Inclusion add on in Dark mode"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "type": "compare",
                "before": "../pngs/Projects/DB Navigator Redesign/Fahrten 100_.png",
                "after": "../pngs/Projects/DB Navigator Redesign/Fahrten 100_(1).png",
                "altBefore": "DB Navigator with Accessibility-Infos in Light mode",
                "altAfter": "DB Navigator with Accessibility-Infos in Dark mode"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "type": "compare",
                "before": "../pngs/Projects/DB Navigator Redesign/Acc Infos(2).png",
                "after": "../pngs/Projects/DB Navigator Redesign/Acc Infos(1).png",
                "altBefore": "DB Navigator Accessibility-Information in Light mode",
                "altAfter": "DB Navigator Accessibility-Information in Dark mode"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/DB Navigator Redesign/Editorial/Hero Statement.png",
            "alt": "DB Navigator Accessibility hero statement about accessible route comparison for elderly and disabled passengers"
          },
          {
            "src": "./pngs/Projects/DB Navigator Redesign/Editorial/Device Line-up.png",
            "alt": "DB Navigator Accessibility connection results, journey details and accessibility options"
          },
          {
            "src": "./pngs/Projects/DB Navigator Redesign/Editorial/Conceptual Diptych.png",
            "alt": "DB Navigator Accessibility conceptual diptych showing a rail journey beside integrated access information"
          },
          {
            "src": "./pngs/Projects/DB Navigator Redesign/Editorial/Editorial Object Shot.png",
            "alt": "DB Navigator Accessibility the accessibility score and route card as an object study"
          },
          {
            "src": "./pngs/Projects/DB Navigator Redesign/Editorial/Information Architecture.png",
            "alt": "DB Navigator Accessibility information architecture showing the options flow and four accessibility categories"
          },
          {
            "src": "./pngs/Projects/DB Navigator Redesign/Editorial/Detail Crop.png",
            "alt": "DB Navigator Accessibility detail crop showing availability, limitation and missing-access states"
          },
          {
            "src": "./pngs/Projects/DB Navigator Redesign/Editorial/Mobile System.png",
            "alt": "DB Navigator Accessibility the mobile route comparison and accessibility system"
          },
          {
            "src": "./pngs/Projects/DB Navigator Redesign/Editorial/Closing Mood.png",
            "alt": "DB Navigator Accessibility closing scene showing the redesigned journey flow in a rail travel context"
          }
        ],
        "editorial": {
          "color": "#ee1616",
          "variant": "routeMapEditorial",
          "thesis": "Accessibility information should be visible at the moment a route is compared.",
          "scopeNote": "Independent unofficial redesign from 2026. Evidence comes from heuristic accessibility review and WCAG contrast checks. No user testing was conducted.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {}
          ],
          "headerEvidence": "Heuristic accessibility review and WCAG contrast checks. No user testing.",
          "headerNextValidation": "Testing with elderly passengers and disabled users in real journey-planning tasks"
        },
        "role": "Accessibility and interaction design",
        "team": "Independent project",
        "ownership": "Connection results, journey details, delay states, accessibility options and the visual system",
        "methods": [
          "Heuristic accessibility review",
          "WCAG contrast checks",
          "Information hierarchy review",
          "High-fidelity prototyping"
        ],
        "evidence": "Heuristic accessibility review and WCAG contrast checks. No user testing.",
        "nextValidation": "Testing with elderly passengers and disabled users in real journey-planning tasks",
        "metaItems": [
          {
            "label": "Year",
            "value": "2026"
          },
          {
            "label": "Type",
            "value": "Independent Project"
          },
          {
            "label": "Role",
            "value": "Accessibility and interaction design"
          },
          {
            "label": "Methods",
            "value": [
              "Heuristic accessibility review",
              "WCAG contrast checks",
              "Information hierarchy review",
              "High-fidelity prototyping"
            ]
          },
          {
            "label": "Ownership",
            "value": "Connection results, journey details, delay states, accessibility options and the visual system"
          }
        ]
      },
      "year": "2026",
      "role": "Accessibility and interaction design",
      "team": "Independent project",
      "ownership": "Connection results, journey details, delay states, accessibility options and the visual system",
      "methods": [
        "Heuristic accessibility review",
        "WCAG contrast checks",
        "Information hierarchy review",
        "High-fidelity prototyping"
      ]
    },
    //SPATIAL TO-DO
    {
      "slug": "spatialTo-Do",
      "title": "Spatial To-Do",
      "href": "./projectSites/spatialTo-Do.html",
      "categories": [
        "Spatial Experience"
      ],
      "level": "Independent Project",
      "coverImage": "./pngs/Projects/Spatial To-Do/Logo 1.png",
      "coverBackgroundColor": "#F2E8E3",
      "coverZoom": 10,
      "imageScale": 1.25,
      "detail": {
        "meta": "2026 · Independent Project",
        "sections": {
          "summary": "Spatial To-Do explores how a task list could operate in AR and VR without becoming a wall of overlays. Tasks use distance, placement and visual priority as parts of the interaction model.",
          "challenge": "The main constraint is spatial clutter. A flat list can be scanned on a screen, while floating tasks compete with the physical environment, depth perception and head movement. The concept therefore needs clear distance levels, restrained motion and predictable feedback.",
          "approach": "The prototype treats tasks as anchored spatial objects. Near, mid and far levels define priority and availability. Primary tasks stay in the main field of view, secondary items sit farther away and low-priority objects fade at the periphery. Gesture and gaze states show selection, movement and completion. Contextual reminders attach to physical locations or objects. These rules form a testable interaction model and have not been validated in a headset.",
          "creativeDirection": "Spatial To-Do is presented as a quiet productivity layer within a physical room. Daylight environments, restrained motion, limited task density and clear depth cues keep the prototype focused on interaction rules rather than spectacle.",
          "keyVisualSystem": "Near, mid and far distance levels define visual priority. Contextual placement links a task to a location or physical object. Fading behavior lowers the visibility of peripheral items before they compete with the main field of view. Gesture feedback uses clear selection, drag and completion states. Text size, contrast and background treatment are designed for legibility across changing physical environments. Motion restraint limits animation to state changes and task movement. Density limits prevent spatial clutter. These rules describe the prototype and still require headset validation.",
          "result": [
            "Concept contribution: A near, mid and far task hierarchy for spatial placement.",
            "Interaction model: Gesture, gaze and contextual anchors define selection, movement and completion states.",
            "Prototype result: High-fidelity AR and VR states make the interaction rules reviewable.",
            "Open validation: Comfort, legibility, reach, motion tolerance and task performance have not been tested in a headset."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "The project defines a spatial task model rather than claiming a productivity benefit. Distance, fading, placement and restrained motion create a prototype that can now be tested in an AR or VR headset."
        },
        "images": [
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Spatial To-Do/primäres Sichtfeld.png",
                "alt": "Spatial To-Do Primary Field of View"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Spatial To-Do/kontextuelle Verankerung.png",
                "alt": "Spatial To-Do Contextual Anchoring"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Spatial To-Do/die drei zentralen Gesten.png",
                "alt": "Spatial To-Do Three Central Gestures"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Spatial To-Do/räumliche Logik.png",
                "alt": "Spatial To-Do Spatial Logic"
              }
            ]
          },
          {
            "layout": "one",
            "items": [
              {
                "src": "../pngs/Projects/Spatial To-Do/Dringlichkeitssystem.png",
                "alt": "Spatial To-Do Urgency System"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/Spatial To-Do/Editorial/Hero Statement.png",
            "alt": "Spatial To-Do hero statement about near, mid and far task placement in AR and VR"
          },
          {
            "src": "./pngs/Projects/Spatial To-Do/Editorial/Device Line-up.png",
            "alt": "Spatial To-Do spatial task states arranged across an immersive scene"
          },
          {
            "src": "./pngs/Projects/Spatial To-Do/Editorial/Conceptual Diptych.png",
            "alt": "Spatial To-Do conceptual diptych showing a daylight room beside the contextual task hierarchy"
          },
          {
            "src": "./pngs/Projects/Spatial To-Do/Editorial/Editorial Object Shot.png",
            "alt": "Spatial To-Do a floating task object with gesture feedback"
          },
          {
            "src": "./pngs/Projects/Spatial To-Do/Editorial/Information Architecture.png",
            "alt": "Spatial To-Do information architecture showing the near, mid and far hierarchy with contextual anchors"
          },
          {
            "src": "./pngs/Projects/Spatial To-Do/Editorial/Detail Crop.png",
            "alt": "Spatial To-Do detail crop showing fading, selection, movement and completion states"
          },
          {
            "src": "./pngs/Projects/Spatial To-Do/Editorial/Mobile System.png",
            "alt": "Spatial To-Do the immersive AR and VR task-management system"
          },
          {
            "src": "./pngs/Projects/Spatial To-Do/Editorial/Closing Mood.png",
            "alt": "Spatial To-Do closing scene showing contextual tasks placed within a daylight living space"
          }
        ],
        "editorial": {
          "color": "#C88D7E",
          "variant": "routeMapEditorial",
          "thesis": "Spatial tasks need distance rules before they need more interface elements.",
          "scopeNote": "Independent AR and VR concept from 2026. Evidence consists of interaction logic and high-fidelity prototype states. No headset or user testing was conducted.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "Critical constraint",
              "headline": "A flat list can become spatial clutter when every task floats.",
              "body": "Tasks compete with the room, depth perception and head movement. The concept starts by limiting how many objects appear and where they can occupy attention.",
              "labels": [
                "AR and VR",
                "Physical environment",
                "Spatial clutter"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "Interaction model",
              "headline": "Near, mid and far levels define task priority.",
              "body": "Primary tasks remain near the main field of view. Secondary tasks sit at mid distance. Low-priority tasks move farther out and fade before they dominate the scene.",
              "labels": [
                "Near",
                "Mid",
                "Far"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Contextual placement",
              "headline": "Tasks can attach to a place or physical object.",
              "body": "A reminder may sit beside the relevant desk, door or household object. The anchor provides context without turning every surface into a permanent notification area.",
              "labels": [
                "Location anchor",
                "Object anchor",
                "Context rule"
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Gesture feedback",
              "headline": "Selection, movement and completion use distinct states.",
              "body": "Gaze establishes focus. Gesture states show grab, drag, release and completion. The prototype keeps feedback visible while avoiding continuous animation.",
              "labels": [
                "Gaze focus",
                "Grab and drag",
                "Completion state"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Technical limitation",
              "headline": "Legibility and motion depend on the real room and headset.",
              "body": "Contrast, text size, fading and movement are designed for changing backgrounds, but they have not been checked against headset optics, reach limits or motion tolerance.",
              "labels": [
                "Legibility",
                "Motion restraint",
                "Headset limits"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "The interaction model needs headset testing.",
              "body": "The prototype makes the spatial rules reviewable. It does not show reduced cognitive load, faster task completion, retention or long-term comfort.",
              "labels": [
                "High-fidelity states",
                "No headset testing"
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "A spatial hierarchy for contextual task placement."
                },
                {
                  "title": "Current evidence",
                  "text": "Interaction logic and high-fidelity AR and VR prototype states."
                },
                {
                  "title": "Next validation",
                  "text": "Headset testing for comfort, legibility, reach and motion tolerance."
                }
              ]
            }
          ],
          "headerEvidence": "Interaction logic and high-fidelity AR and VR prototype states. No user testing.",
          "headerNextValidation": "Headset testing for comfort, legibility, reach and motion tolerance"
        },
        "role": "Spatial interaction design",
        "team": "Independent project",
        "ownership": "Distance hierarchy, contextual placement, gesture and gaze states, fading behaviour and urgency cues",
        "methods": [
          "Spatial task modelling",
          "Interaction prototyping",
          "Visual hierarchy definition",
          "Motion restraint review"
        ],
        "evidence": "Interaction logic and high-fidelity AR and VR prototype states. No user testing.",
        "nextValidation": "Headset testing for comfort, legibility, reach and motion tolerance",
        "metaItems": [
          {
            "label": "Year",
            "value": "2026"
          },
          {
            "label": "Type",
            "value": "Independent Project"
          },
          {
            "label": "Role",
            "value": "Spatial interaction design"
          },
          {
            "label": "Methods",
            "value": [
              "Spatial task modelling",
              "Interaction prototyping",
              "Visual hierarchy definition",
              "Motion restraint review"
            ]
          },
          {
            "label": "Ownership",
            "value": "Distance hierarchy, contextual placement, gesture and gaze states, fading behaviour and urgency cues"
          }
        ]
      },
      "year": "2026",
      "cardCategory": "Spatial task management for AR and VR",
      "role": "Spatial interaction design",
      "team": "Independent project",
      "ownership": "Distance hierarchy, contextual placement, gesture and gaze states, fading behaviour and urgency cues",
      "methods": [
        "Spatial task modelling",
        "Interaction prototyping",
        "Visual hierarchy definition",
        "Motion restraint review"
      ]
    },
    //HEALTHY START
    {
      "slug": "healthyStart",
      "title": "HealthyStart",
      "href": "./projectSites/healthyStart.html",
      "categories": [
        "Trust & Care System"
      ],
      "level": "Independent Project",
      "coverBannerImage": "./pngs/Projects/HealthyStart/Logo.png",
      "coverBackgroundColor": "#FAFAF8",
      "coverZoom": 0,
      "imageScale": 2.55,
      "cardCategory": "Privacy-first health onboarding",
      "detail": {
        "meta": "2026 · Independent Project",
        "sections": {
          "summary": "HealthyStart is a privacy-first onboarding concept for a health app. It explains permissions, security and data use before the user confirms access to sensitive information.",
          "challenge": "The design needed to explain required and optional permissions to non-technical users without presenting legal or security content as a dense policy page. German expectations for control and precision also had to remain understandable to an international audience.",
          "approach": "Permissions are grouped by type and impact, with required and optional data separated. Encryption, secure storage and two-factor authentication use plain language and visual cues. Users can preview and adjust settings before completing onboarding. These prototype decisions have not been tested for comprehension or legal compliance.",
          "creativeDirection": "The creative direction positions HealthyStart as a guided onboarding flow rather than a permission checklist. The product had to explain sensitive health data, user control, and protection before asking for consent. The visual system uses layered explanations, clear permission groups, direct microcopy, plain-language security cues, and privacy-first defaults. I avoided legalistic copy, technical security dashboards, and fear-based messaging. The key decision was to show what happens to each data category before asking the user to continue.",
          "keyVisualSystem": "Forest Teal (#2D7D6F) creates a calm health-tech identity while Warm White keeps the onboarding light and approachable. DM Serif Display gives key privacy statements a human, editorial quality, while Inter keeps permissions and microcopy direct and functional — supporting the core strategy of making privacy feel actionable, not bureaucratic.",
          "result": [
            "Concept contribution: Permissions, security explanations and settings preview form one onboarding flow.",
            "Content decision: Required and optional data use different hierarchy and direct language.",
            "Interaction decision: Users can review settings before completing onboarding.",
            "Open validation: Permission comprehension, trust perception, accessibility and legal compliance were not tested."
          ],
          "takeawayTitle": "Takeaway",
          "takeaway": "The concept makes privacy decisions visible before consent. It proposes a clearer onboarding structure without claiming increased completion or trust. User testing and legal review remain necessary."
        },
        "images": [
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/HealthyStart/Welcome & First Impression.png",
                "alt": "HealthyStart Welcome & First Impression"
              },
              {
                "src": "../pngs/Projects/HealthyStart/Permission Grouping.png",
                "alt": "HealthyStart Permission Grouping"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/HealthyStart/Security Explanation.png",
                "alt": "HealthyStart Security Explanation"
              },
              {
                "src": "../pngs/Projects/HealthyStart/Interactive Privacy Preview.png",
                "alt": "HealthyStart Interactive Privacy Preview"
              }
            ]
          },
          {
            "layout": "two",
            "items": [
              {
                "src": "../pngs/Projects/HealthyStart/Microcopy & Lokalisierung.png",
                "alt": "HealthyStart/Microcopy & Location"
              },
              {
                "src": "../pngs/Projects/HealthyStart/Onboarding Completion.png",
                "alt": "HealthyStart Onboarding Completion"
              }
            ]
          }
        ],
        "editorialArtDirectedCaseStudyImages": [
          {
            "src": "./pngs/Projects/HealthyStart/Editorial/Hero Statement.png",
            "alt": "HealthyStart hero statement about privacy-first health onboarding and permission choices"
          },
          {
            "src": "./pngs/Projects/HealthyStart/Editorial/Device Line-up.png",
            "alt": "HealthyStart permission, security and settings-preview screens"
          },
          {
            "src": "./pngs/Projects/HealthyStart/Editorial/Conceptual Diptych.png",
            "alt": "HealthyStart conceptual diptych showing sensitive health data beside the onboarding explanation flow"
          },
          {
            "src": "./pngs/Projects/HealthyStart/Editorial/Editorial Object Shot.png",
            "alt": "HealthyStart a permission card and security cue as an object study"
          },
          {
            "src": "./pngs/Projects/HealthyStart/Editorial/Information Architecture.png",
            "alt": "HealthyStart information architecture showing the sequence from data purpose to settings review and consent"
          },
          {
            "src": "./pngs/Projects/HealthyStart/Editorial/Detail Crop.png",
            "alt": "HealthyStart detail crop showing required and optional permissions with plain-language security cues"
          },
          {
            "src": "./pngs/Projects/HealthyStart/Editorial/Mobile System.png",
            "alt": "HealthyStart the mobile privacy onboarding system"
          },
          {
            "src": "./pngs/Projects/HealthyStart/Editorial/Closing Mood.png",
            "alt": "HealthyStart closing scene showing the onboarding flow in a calm health context"
          }
        ],
        "editorial": {
          "color": "#2D7D6F",
          "variant": "routeMapEditorial",
          "thesis": "Health onboarding should explain data use before it asks for permission.",
          "scopeNote": "Independent concept from 2026. Evidence consists of high-fidelity onboarding states and a privacy-focused interface review. No user testing or legal certification was conducted.",
          "wowFactor": {
            "module": "growingLine"
          },
          "blocks": [
            {
              "type": "problem",
              "layoutRole": "rail-left",
              "claim": "User situation",
              "headline": "Sensitive health data raises questions before onboarding begins.",
              "body": "Users need to understand what is collected, why it is required and which choices remain optional before they can assess the first permission request.",
              "labels": [
                "Health data",
                "Non-technical users",
                "Permission decision"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-right",
              "claim": "Information model",
              "headline": "Required and optional data use separate hierarchy.",
              "body": "Permission groups show purpose and impact before the confirmation action. Optional items remain adjustable instead of appearing as hidden defaults.",
              "labels": [
                "Required data",
                "Optional data",
                "Purpose"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Content decision",
              "headline": "Security terms are translated into direct explanations.",
              "body": "Encryption, secure storage and two-factor authentication use visual cues and plain-language microcopy rather than unexplained technical labels.",
              "labels": [
                "Encryption",
                "Secure storage",
                "Two-factor authentication"
              ]
            },
            {
              "type": "sticky",
              "layoutRole": "rail-right",
              "claim": "Interaction model",
              "headline": "Users preview the settings before they continue.",
              "body": "The walkthrough shows the effect of each choice and lets users revise permissions before onboarding is completed.",
              "labels": [
                "Settings preview",
                "Review step",
                "Adjustable defaults"
              ]
            },
            {
              "type": "proof",
              "layoutRole": "rail-left",
              "claim": "Regional constraint",
              "headline": "Precision must remain readable across audiences.",
              "body": "The copy reflects German expectations for control and privacy while avoiding local references that would make the flow unclear for international users.",
              "labels": [
                "German context",
                "International clarity",
                "Direct language"
              ]
            },
            {
              "type": "spread",
              "layoutRole": "rail-right",
              "claim": "Next validation step",
              "headline": "Comprehension and compliance need independent review.",
              "body": "The prototype proposes a privacy-first sequence. It does not establish higher onboarding completion, user trust or legal compliance.",
              "labels": [
                "High-fidelity concept",
                "No user testing"
              ],
              "scopeItems": [
                {
                  "title": "Concept contribution",
                  "text": "A permission and security flow that exposes choices before consent."
                },
                {
                  "title": "Current evidence",
                  "text": "High-fidelity onboarding states and privacy-focused interface review."
                },
                {
                  "title": "Next validation",
                  "text": "Permission comprehension, accessibility, trust perception and legal review."
                }
              ]
            }
          ],
          "headerEvidence": "High-fidelity onboarding prototype and privacy-focused interface review. No user testing.",
          "headerNextValidation": "Permission comprehension, trust perception, accessibility and legal review"
        },
        "role": "Product and interaction design",
        "team": "Independent project",
        "ownership": "Permission hierarchy, security explanations, settings preview and privacy-first defaults",
        "methods": [
          "Information layering",
          "Content design",
          "Interaction prototyping",
          "Privacy-focused interface review"
        ],
        "evidence": "High-fidelity onboarding prototype and privacy-focused interface review. No user testing.",
        "nextValidation": "Permission comprehension, trust perception, accessibility and legal review",
        "metaItems": [
          {
            "label": "Year",
            "value": "2026"
          },
          {
            "label": "Type",
            "value": "Independent Project"
          },
          {
            "label": "Role",
            "value": "Product and interaction design"
          },
          {
            "label": "Methods",
            "value": [
              "Information layering",
              "Content design",
              "Interaction prototyping",
              "Privacy-focused interface review"
            ]
          },
          {
            "label": "Ownership",
            "value": "Permission hierarchy, security explanations, settings preview and privacy-first defaults"
          }
        ]
      },
      "year": "2026",
      "role": "Product and interaction design",
      "team": "Independent project",
      "ownership": "Permission hierarchy, security explanations, settings preview and privacy-first defaults",
      "methods": [
        "Information layering",
        "Content design",
        "Interaction prototyping",
        "Privacy-focused interface review"
      ]
    }
  ]
};
