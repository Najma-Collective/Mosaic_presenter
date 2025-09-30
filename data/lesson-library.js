window.__LESSON_LIBRARY__ = {
  "aiLessonDesignerBlueprint": {
    "id": "ai-lesson-designer-blueprint",
    "label": "LLM lesson designer blueprint",
    "meta": {
      "eyebrow": "Lesson designer",
      "descriptor": "Instructions for language models to generate lesson plans compatible with this presenter.",
      "pageTitle": "AI-authored lesson blueprint \u2013 Instructional Slides",
      "llmGuide": {
        "purpose": "Return JSON that can be injected into lessonLibrary to populate the presenter without manual cleanup.",
        "outputShape": {
          "requiredTopLevelKeys": [
            "id",
            "label",
            "meta",
            "sections",
            "slides"
          ],
          "meta": {
            "eyebrow": "Short label for the presenter header.",
            "descriptor": "One-sentence description that appears under the header.",
            "pageTitle": "Browser tab title; defaults to `${label} \u2013 Instructional Slides` if omitted.",
            "planner": "Object controlling the lesson overview panel."
          },
          "sections": "Ordered array describing sidebar groupings. Each object uses { title, slideKeys }.",
          "slides": "Ordered array of slide configs. Each slide requires a unique `key` and a supported `type`."
        },
        "supportedSlideTypes": {
          "hero": {
            "usage": "Use for the opening slide. Supports title, subtitle, image, and nav.",
            "required": [
              "title"
            ],
            "optional": [
              "subtitle",
              "image",
              "nav",
              "spotlight"
            ]
          },
          "content": {
            "usage": "General purpose text/image slide. Supports body paragraphs, lists, quotes, images, callouts, and annotations.",
            "required": [
              "title"
            ],
            "optional": [
              "subtitle",
              "body",
              "list",
              "image",
              "callout",
              "annotations"
            ]
          },
          "cards": {
            "usage": "Highlights 2\u20134 options or stations. Each card accepts icon, title, description, and annotation.",
            "required": [
              "cards"
            ],
            "optional": [
              "title",
              "subtitle",
              "icon",
              "rubric"
            ]
          },
          "quiz": {
            "usage": "Multiple-choice or multi-select check for understanding. Include items[].options[].correct.",
            "required": [
              "items"
            ],
            "optional": [
              "title",
              "subtitle",
              "feedback",
              "image"
            ]
          },
          "reflection": {
            "usage": "Short debrief prompt. Accepts prompt, frames, and list of sentence starters.",
            "required": [
              "prompts"
            ],
            "optional": [
              "title",
              "subtitle",
              "frames",
              "image"
            ]
          },
          "process": {
            "usage": "Step-by-step routine with segments[]. Each segment supports label, duration, facilitatorNotes, and learnerTask.",
            "required": [
              "segments"
            ],
            "optional": [
              "title",
              "subtitle",
              "icon"
            ]
          },
          "activity": {
            "usage": "Use the `grouping`, `gapfill`, `matching`, or `ranking` slide types when interactive logic is needed.",
            "required": [],
            "optional": []
          }
        },
        "interactionNotes": [
          "Images require accessible alt text. Provide royalty-free URLs or leave src null for instructor upload.",
          "Set nav.hidePrev to true on the first slide, and use nextAction:\"restart\" on the last slide when you want a loop.",
          "Activity slides support check/reset buttons automatically; populate instructions and answer keys for autograding.",
          "Annotations can be added by wrapping phrases with { text, annotation } entries in content lists or body arrays."
        ],
        "promptingTips": [
          "Confirm the target audience, learning objectives, timebox, and materials before generating content.",
          "Map each objective to at least one interactive or reflective slide.",
          "Surface explicit teacher moves using facilitatorNotes fields when available.",
          "Respect tone guidance\u2014warm, invitational, and specific."
        ],
        "exampleUsage": {
          "sections": [
            {
              "title": "Launch",
              "slideKeys": [
                "hero-slide",
                "objectives-slide"
              ]
            },
            {
              "title": "Practice",
              "slideKeys": [
                "guided-practice",
                "independent-practice"
              ]
            }
          ],
          "slide": {
            "key": "objectives-slide",
            "type": "content",
            "title": "Learning objectives",
            "body": [
              "State each objective using action verbs and learner-friendly language."
            ],
            "list": [
              "Identify",
              "Apply",
              "Reflect"
            ]
          }
        }
      },
      "planner": {
        "title": "AI lesson designer checklist",
        "subtitle": "Feed these constraints to an LLM so it outputs a complete lesson configuration for the presenter.",
        "duration": "Flexible runtime \u2014 align to the planned session length",
        "pacingTitle": "Authoring workflow",
        "pacing": [
          {
            "label": "Collect context & learner goals",
            "duration": "Step 1"
          },
          {
            "label": "Draft slide flow & interactions",
            "duration": "Step 2"
          },
          {
            "label": "Layer facilitation notes & supports",
            "duration": "Step 3"
          },
          {
            "label": "Audit accessibility & timing",
            "duration": "Step 4"
          }
        ],
        "sections": [
          {
            "title": "Prompt requirements",
            "items": [
              "Instruct the LLM to return a JSON object matching the lessonLibrary entry structure.",
              "Provide session title, audience, duration, objectives, and success metrics as explicit inputs.",
              "Ask for unique slide keys following kebab-case, aligned with section slideKeys arrays."
            ]
          },
          {
            "title": "Data model essentials",
            "items": [
              "meta.planner controls the overview panel: include pacing[], sections[], and spotlight text.",
              "sections[] drives navigation groupings; include every slide key exactly once.",
              "slides[] items accept optional nav controls: set nextLabel, nextIcon, and nextAction when needed."
            ]
          },
          {
            "title": "Interactive affordances",
            "items": [
              "Use quiz, ranking, matching, or gapfill types for auto-check activities with answer keys.",
              "cards slides outline differentiation pathways (e.g., stations, roles, or extension choices).",
              "process segments highlight teacher moves, learner tasks, timing, and required materials."
            ]
          },
          {
            "title": "Accessibility & tone",
            "items": [
              "Ensure every image includes alt text describing instructional intent.",
              "Use gender-inclusive names and culturally sustaining examples.",
              "Keep facilitator guidance in second person (\"Invite learners...\") and learner text in first/second person."
            ]
          }
        ],
        "spotlight": "Deliver JSON that preserves this structure\u2014no markdown, no prose wrapper\u2014so it can be dropped directly into lessonLibrary."
      }
    },
    "sections": [
      {
        "title": "Blueprint overview",
        "slideKeys": [
          "ai-blueprint-hero",
          "ai-blueprint-structure",
          "ai-blueprint-slide-types"
        ]
      },
      {
        "title": "Interactive patterns",
        "slideKeys": [
          "ai-blueprint-interactions",
          "ai-blueprint-accessibility"
        ]
      },
      {
        "title": "Implementation checklist",
        "slideKeys": [
          "ai-blueprint-quality",
          "ai-blueprint-handoff"
        ]
      }
    ],
    "slides": [
      {
        "key": "ai-blueprint-hero",
        "type": "hero",
        "title": "Design AI-authored lessons that just work",
        "subtitle": "Give the model structured expectations so the presenter renders every slide without edits.",
        "image": {
          "src": "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Teacher planning a lesson on a laptop covered in sticky notes"
        },
        "nav": {
          "hidePrev": true,
          "nextLabel": "Data contract",
          "nextIcon": "fas fa-diagram-project"
        }
      },
      {
        "key": "ai-blueprint-structure",
        "type": "content",
        "icon": "fas fa-sitemap",
        "title": "Lesson data contract",
        "subtitle": "Brief the LLM on how each object maps to the UI.",
        "body": [
          "Return a single JSON object with the properties described below. Avoid additional commentary or markdown fences.",
          "Omit optional keys you do not use instead of leaving empty strings."
        ],
        "list": [
          "id: slug-safe identifier used for file exports.",
          "label: human-readable template name for the selector.",
          "meta: descriptor, eyebrow, pageTitle, and planner object for the overview panel.",
          "sections: ordered navigation groupings; slideKeys must reference slides[].key values.",
          "slides: ordered slide configs. Each config must include type, title (when applicable), and any inputs required by that renderer."
        ],
        "callout": {
          "title": "LLM reminder",
          "body": "Respond only with valid JSON. Use double quotes around all keys and strings."
        }
      },
      {
        "key": "ai-blueprint-slide-types",
        "type": "cards",
        "icon": "fas fa-layer-group",
        "title": "Supported slide archetypes",
        "subtitle": "Choose the layout that matches each instructional move.",
        "cards": [
          {
            "icon": "fas fa-bullseye",
            "title": "content",
            "description": "Use for objectives, mini lessons, and resource callouts. Supports body[], list[], and image."
          },
          {
            "icon": "fas fa-images",
            "title": "gallery | grid",
            "description": "Combine visuals or documents. Provide cards[] with title, caption, and optional link."
          },
          {
            "icon": "fas fa-gamepad",
            "title": "quiz | ranking | matching | gapfill",
            "description": "Interactive checks with automatic feedback. Include answer keys."
          },
          {
            "icon": "fas fa-route",
            "title": "process",
            "description": "Outline multi-step routines. Each segment can include facilitatorNotes, learnerTask, and timing."
          }
        ]
      },
      {
        "key": "ai-blueprint-interactions",
        "type": "content",
        "icon": "fas fa-chalkboard-teacher",
        "title": "Programming interactivity",
        "body": [
          "Each activity slide supports call-to-action buttons rendered automatically. Supply clear instructions in the subtitle or body fields.",
          "For quizzes, set item.options[].correct = true for right answers and include feedback.correct/incorrect summaries.",
          "For gapfill, alternate plain text segments with { type: 'gap', options: [] } entries to define dropdowns.",
          "For matching and grouping slides, provide pairs or categories arrays respectively."
        ],
        "list": [
          "Include facilitatorNotes when teachers need backstage coaching.",
          "Use activity.blocks[] within process slides to define stations or breakout roles.",
          "Add nav.nextLabel to cue transitions (e.g., 'Start gallery walk')."
        ]
      },
      {
        "key": "ai-blueprint-accessibility",
        "type": "content",
        "icon": "fas fa-universal-access",
        "title": "Access & inclusion defaults",
        "body": [
          "Write alternative text that captures instructional purpose, not just literal objects.",
          "Use plain-language instructions and chunk information into lists or short paragraphs.",
          "Respect prefers-reduced-motion by avoiding directives that rely on animations for meaning."
        ],
        "list": [
          "Provide pronunciation or vocabulary support using annotations when new terms appear.",
          "Surface multilingual or multimodal options through cards slides (e.g., read, watch, discuss).",
          "When referencing materials, include format (digital PDF, printed handout) and accessibility notes."
        ]
      },
      {
        "key": "ai-blueprint-quality",
        "type": "content",
        "icon": "fas fa-clipboard-check",
        "title": "Quality assurance before delivery",
        "body": [
          "Validate that pacing durations sum to the intended session length or clearly mark sections as flexible.",
          "Ensure every objective is revisited in a later slide or reflection prompt.",
          "Cross-check that every slide key is listed exactly once across sections[]."
        ],
        "list": [
          "Double-check that quiz answers and feedback align with the lesson focus.",
          "Review facilitatorNotes for actionable, empathetic language.",
          "Confirm materials referenced exist in planner.sections[].items for easy prep."
        ]
      },
      {
        "key": "ai-blueprint-handoff",
        "type": "reflection",
        "icon": "fas fa-share-square",
        "title": "Hand-off prompt",
        "subtitle": "Use this script when you ask the LLM to generate a new lesson.",
        "prompts": [
          "Given the provided context, return a JSON object that mirrors the aiLessonDesignerBlueprint schema.",
          "Populate meta.planner with pacing, sections, and a spotlight facilitation reminder.",
          "Sequence slides to progress from activation to practice to reflection; leverage interactive types when appropriate."
        ],
        "frames": [
          "Context: [audience, grade band, subject, duration]",
          "Objectives: [list 2\u20133 measurable goals]",
          "Required interactions: [quizzes, collaborative tasks, reflections]"
        ],
        "nav": {
          "nextLabel": "Restart blueprint",
          "nextIcon": "fas fa-rotate",
          "nextAction": "restart"
        }
      }
    ]
  },
  "mentoringOrientation": {
    "id": "mentoring-orientation",
    "label": "Mentoring orientation",
    "meta": {
      "eyebrow": "Noor Community Mentoring",
      "descriptor": "An onboarding deck for project-based mentoring partnerships.",
      "pageTitle": "Mentoring Orientation \u2013 Instructional Slides",
      "planner": {
        "title": "Mentoring session blueprint",
        "subtitle": "Use this flow to help mentees enter the program with clarity and confidence.",
        "duration": "Approx. 60 minutes",
        "pacing": [
          {
            "label": "Community welcome & mission check",
            "duration": "10 min"
          },
          {
            "label": "Mentoring stories & benefits",
            "duration": "15 min"
          },
          {
            "label": "SMART planning walkthrough",
            "duration": "20 min"
          },
          {
            "label": "Reflection & commitments",
            "duration": "15 min"
          }
        ],
        "sections": [
          {
            "title": "Learning goals",
            "items": [
              "Build shared language around the Noor Community mentoring mission.",
              "Clarify the SMART framework and map out the mentee journey.",
              "Document mentee priorities, questions, and next steps."
            ]
          },
          {
            "title": "Prep before the session",
            "items": [
              "Review recent mentee success stories to personalise the benefits slide.",
              "Queue the AI planning guide so you can model how to draft a SMART proposal.",
              "Print or share onboarding forms and note-taking templates."
            ]
          },
          {
            "title": "Materials & logistics",
            "items": [
              "Project proposal or planning template (digital or paper).",
              "Timer to keep the journey quiz and brainstorm tight.",
              "Sticky notes or collaborative doc for questions the group surfaces."
            ]
          },
          {
            "title": "Checkpoints",
            "items": [
              "Mission quiz responses show whether the purpose is clear.",
              "Journey scenario choices reveal how well mentees understand expectations.",
              "Exit reflection captures individual action steps and support needs."
            ]
          }
        ],
        "spotlight": "Model transparent mentor thinking during the SMART planning demo so mentees know what quality reflection sounds like."
      }
    },
    "sections": [
      {
        "title": "Welcome & Community",
        "slideKeys": [
          "welcome",
          "mentoring-benefits",
          "community-identity",
          "mentoring-definition"
        ]
      },
      {
        "title": "Opportunities & Stories",
        "slideKeys": [
          "mentoring-outcomes",
          "mission-quiz",
          "project-cv",
          "project-speaking"
        ]
      },
      {
        "title": "Planning Framework",
        "slideKeys": [
          "smart-framework",
          "smart-example",
          "journey-steps",
          "journey-quiz"
        ]
      },
      {
        "title": "Commitment & Care",
        "slideKeys": [
          "commitments",
          "commitment-quiz"
        ]
      },
      {
        "title": "Next Steps",
        "slideKeys": [
          "brainstorm",
          "reflection"
        ]
      }
    ],
    "slides": [
      {
        "key": "welcome",
        "type": "hero",
        "title": "Welcome to the Noor Community Mentoring Program",
        "subtitle": "Building a supportive future, together.",
        "image": {
          "src": "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Diverse team collaborating in a bright, modern office"
        },
        "nav": {
          "hidePrev": true,
          "nextLabel": "Start",
          "nextIcon": "fas fa-play"
        }
      },
      {
        "key": "mentoring-benefits",
        "type": "content",
        "icon": "fas fa-cogs",
        "title": "Benefits of Mentoring (Soft Skills)",
        "image": {
          "src": "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A group of people collaborating and brainstorming around a table"
        },
        "body": [
          "Mentoring is a powerful tool for personal and professional growth. It can help you develop a wide range of soft skills that support success in any field."
        ],
        "list": [
          "Improved communication and interpersonal skills",
          "Enhanced leadership and decision-making abilities",
          "Increased confidence and self-awareness",
          "Greater problem-solving and critical thinking skills"
        ]
      },
      {
        "key": "community-identity",
        "type": "content",
        "icon": "fas fa-users",
        "title": "Who Are We?",
        "image": {
          "src": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A diverse group of colleagues celebrating a success together"
        },
        "body": [
          "The Noor Community is an educational space dedicated to liberation through learning. We believe in solidarity and social justice.",
          "Our goal is to create a safe environment where everyone can express themselves, develop their skills, and connect with others. We see learning and teaching as universal processes that empower all of us."
        ]
      },
      {
        "key": "mentoring-definition",
        "type": "content",
        "icon": "fas fa-hands-helping",
        "title": "What Is Mentoring?",
        "image": {
          "src": "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A mentor guiding a mentee at a computer"
        },
        "body": [
          "Mentoring is a collaborative relationship where an experienced person supports another learner to develop skills and reach their goals.",
          "Our approach centres trust and empowerment. Mentors act as guides who celebrate wins, ask thoughtful questions, and help you stay accountable to your project vision."
        ]
      },
      {
        "key": "mentoring-outcomes",
        "type": "cards",
        "icon": "fas fa-lightbulb",
        "title": "What Becomes Possible?",
        "subtitle": "Mentoring can help you achieve concrete, practical outcomes.",
        "cards": [
          {
            "icon": "fas fa-file-alt",
            "title": "CV & LinkedIn"
          },
          {
            "icon": "fas fa-microphone",
            "title": "Public Speaking"
          },
          {
            "icon": "fas fa-award",
            "title": "Grant Proposals"
          },
          {
            "icon": "fas fa-graduation-cap",
            "title": "University Applications"
          }
        ]
      },
      {
        "key": "mission-quiz",
        "type": "quiz",
        "icon": "fas fa-question-circle",
        "title": "Quick Check: Our Mission & Mentoring",
        "questions": [
          {
            "id": "mission-q1",
            "prompt": "What is the Noor Community primarily committed to?",
            "options": [
              {
                "value": "solidarity",
                "label": "Building solidarity and working toward social justice through education."
              },
              {
                "value": "competition",
                "label": "Organising competitive events that reward the top performers only."
              },
              {
                "value": "online-only",
                "label": "Delivering self-paced online courses without community interaction."
              }
            ],
            "answer": "solidarity",
            "correctFeedback": "Exactly! Our community centres solidarity and social justice.",
            "incorrectFeedback": "Review our vision\u2014connection and justice are at the heart of Noor Community."
          },
          {
            "id": "mission-q2",
            "prompt": "How does the mentoring relationship operate in this program?",
            "options": [
              {
                "value": "hierarchy",
                "label": "The mentor gives orders and the mentee follows a fixed set of tasks."
              },
              {
                "value": "collaboration",
                "label": "Mentor and mentee collaborate to reach the mentee\u2019s goals through trust and guidance."
              },
              {
                "value": "assessment",
                "label": "The mentor grades the mentee each week on quizzes and exams."
              }
            ],
            "answer": "collaboration",
            "correctFeedback": "Yes! Mentoring here is a collaborative, empowering partnership.",
            "incorrectFeedback": "Remember\u2014the mentor is a guide who supports, not a judge or taskmaster."
          }
        ]
      },
      {
        "key": "project-cv",
        "type": "story",
        "icon": "fas fa-user-tie",
        "title": "Project Story: Developing a CV",
        "quote": "\"I needed a strong CV to apply for work.\"",
        "image": {
          "src": "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A person writing a CV at a desk"
        },
        "process": {
          "label": "The Process:",
          "text": "Laila partnered with her mentor to identify key skills, choose powerful action verbs, and organise her experience into a compelling narrative."
        },
        "outcome": {
          "label": "The Outcome:",
          "text": "She now has a polished CV that highlights her strengths and feels confident applying for new opportunities."
        }
      },
      {
        "key": "project-speaking",
        "type": "story",
        "icon": "fas fa-podium-star",
        "title": "Project Story: Public Speaking",
        "quote": "\"I was nervous about giving presentations.\"",
        "image": {
          "src": "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A person giving a presentation to an audience"
        },
        "process": {
          "label": "The Process:",
          "text": "Mariam practised weekly with her mentor, using recordings to reflect on pacing, body language, and clarity."
        },
        "outcome": {
          "label": "The Outcome:",
          "text": "She delivered a confident presentation and built a repeatable routine for future talks."
        }
      },
      {
        "key": "smart-framework",
        "type": "content",
        "icon": "fas fa-bullseye",
        "title": "Create a Measurable Project",
        "image": {
          "src": "https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A group of people working together to achieve a goal"
        },
        "body": [
          "Successful projects require clear goals. To make sure your project is effective, we use the SMART framework.",
          "This approach keeps outcomes measurable and realistic for a three-month partnership."
        ],
        "listStyle": "smart",
        "list": [
          {
            "letter": "S",
            "text": "Specific"
          },
          {
            "letter": "M",
            "text": "Measurable"
          },
          {
            "letter": "A",
            "text": "Achievable"
          },
          {
            "letter": "R",
            "text": "Relevant"
          },
          {
            "letter": "T",
            "text": "Time-bound"
          }
        ]
      },
      {
        "key": "smart-example",
        "type": "content",
        "icon": "fas fa-check-circle",
        "title": "Example: A SMART Goal",
        "image": {
          "src": "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A person writing in a notebook"
        },
        "body": [
          "Consider the broad goal: \"I want to improve my CV.\"",
          "To make it SMART, add clear actions and a deadline: \"I will update my CV to describe three key skills with evidence and finish by the end of this month.\""
        ]
      },
      {
        "key": "journey-steps",
        "type": "process",
        "icon": "fas fa-rocket",
        "title": "Project Journey Milestones",
        "subtitle": "Refine your idea, match with a mentor, and plan together.",
        "image": {
          "src": "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A person interacting with an AI assistant"
        },
        "body": [
          "Each mentoring partnership moves through three steady stages."
        ],
        "steps": [
          {
            "title": "Step 1: AI Guide",
            "description": "Use our planning tool to turn your idea into a detailed SMART proposal."
          },
          {
            "title": "Step 2: Mentor Matching",
            "description": "We review your project and pair you with someone whose expertise aligns with your goals."
          },
          {
            "title": "Step 3: First Meeting",
            "description": "You and your mentor set expectations and map out weekly tasks for the coming months."
          }
        ]
      },
      {
        "key": "journey-quiz",
        "type": "quiz",
        "icon": "fas fa-route",
        "title": "Quick Check: Journey Steps",
        "questions": [
          {
            "id": "journey-q1",
            "prompt": "What happens right after you submit your project proposal?",
            "options": [
              {
                "value": "matching",
                "label": "The team reviews it and pairs you with a mentor whose experience fits your goal."
              },
              {
                "value": "presentation",
                "label": "You immediately present your project to the whole community."
              },
              {
                "value": "budget",
                "label": "You complete reimbursement paperwork for supplies."
              }
            ],
            "answer": "matching",
            "correctFeedback": "Correct\u2014the team reviews your plan and matches you with the right mentor.",
            "incorrectFeedback": "Not quite. Review the journey slides to see what happens post-submission."
          },
          {
            "id": "journey-q2",
            "prompt": "What is the focus of the first mentor meeting?",
            "options": [
              {
                "value": "weekly-plan",
                "label": "Co-creating detailed weekly steps and agreeing on expectations."
              },
              {
                "value": "celebration",
                "label": "Celebrating the final results of your project."
              },
              {
                "value": "reporting",
                "label": "Submitting monthly reports to the admin team."
              }
            ],
            "answer": "weekly-plan",
            "correctFeedback": "Exactly! The first meeting sets the shared weekly plan.",
            "incorrectFeedback": "Check the milestone slide\u2014the first session is about planning, not reporting yet."
          }
        ]
      },
      {
        "key": "commitments",
        "type": "content",
        "icon": "fas fa-clock",
        "title": "Time Commitment & Boundaries",
        "image": {
          "src": "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A person working at a desk with a clock in the background"
        },
        "list": [
          {
            "icon": "fas fa-calendar-alt",
            "strong": "Project Duration:",
            "text": "The project is designed to be completed in three months."
          },
          {
            "icon": "fas fa-hourglass-half",
            "strong": "Mentor Time:",
            "text": "Mentors allocate up to one hour each week for check-ins and feedback."
          },
          {
            "icon": "fas fa-plus-circle",
            "strong": "Contingency:",
            "text": "If needed, you can request a one-month extension to complete final pieces."
          }
        ]
      },
      {
        "key": "commitment-quiz",
        "type": "quiz",
        "icon": "fas fa-user-shield",
        "title": "Quick Check: Commitments & Care",
        "questions": [
          {
            "id": "care-q1",
            "prompt": "How long is each weekly mentoring session designed to last?",
            "options": [
              {
                "value": "thirty",
                "label": "About 30 minutes focused on reflection and planning."
              },
              {
                "value": "sixty",
                "label": "Exactly 60 minutes with required presentations."
              },
              {
                "value": "drop-in",
                "label": "No set time\u2014mentees drop in and out at any point."
              }
            ],
            "answer": "thirty",
            "correctFeedback": "Great! Weekly check-ins are focused, 30-minute conversations.",
            "incorrectFeedback": "Take another look\u2014the program keeps meetings short and consistent."
          },
          {
            "id": "care-q2",
            "prompt": "What happens if a mentee misses three sessions in a row without an acceptable reason?",
            "options": [
              {
                "value": "bonus",
                "label": "They receive extra time with their mentor to catch up."
              },
              {
                "value": "hold",
                "label": "The project is placed on hold until the mentee is ready to re-engage."
              },
              {
                "value": "replacement",
                "label": "They are automatically assigned a new mentor."
              }
            ],
            "answer": "hold",
            "correctFeedback": "Correct\u2014the project pauses so mentees can return when ready.",
            "incorrectFeedback": "Review the boundaries slide; consistency keeps the partnership active."
          }
        ]
      },
      {
        "key": "brainstorm",
        "type": "content",
        "icon": "fas fa-lightbulb",
        "title": "Next Steps: Brainstorming",
        "subtitle": "Let\u2019s surface your ideas and questions.",
        "image": {
          "src": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "A group of people brainstorming with sticky notes"
        },
        "body": [
          "Take a moment to share any project ideas already on your mind.",
          "We\u2019ll spend the next 20 minutes using the AI guide tool to draft initial proposals.",
          "Bring forward any questions about the mentoring process or your concept."
        ]
      },
      {
        "key": "reflection",
        "type": "reflection",
        "icon": "fas fa-pen-to-square",
        "title": "Reflection & Planning Notes",
        "fields": [
          {
            "id": "mentoring-idea",
            "label": "Project idea I want to explore",
            "placeholder": "Capture the community challenge or opportunity you care about."
          },
          {
            "id": "mentoring-smart",
            "label": "First SMART-aligned step I can take",
            "placeholder": "Draft a Specific, Measurable action you can complete soon."
          },
          {
            "id": "mentoring-questions",
            "label": "Questions I want to ask my mentor",
            "placeholder": "List the support, resources, or feedback you hope to receive."
          }
        ],
        "nav": {
          "nextAction": "restart",
          "nextLabel": "Finish & Restart",
          "nextIcon": "fas fa-check"
        }
      }
    ]
  },
  "curatorialNegotiation": {
    "id": "curatorial-negotiation",
    "label": "Curatorial negotiation workshop",
    "meta": {
      "eyebrow": "Mosaic Presenter",
      "descriptor": "Seven-slide flow for curating an exhibition through collaborative language work.",
      "pageTitle": "\"Echoes of Palestine\" \u2013 Curatorial Negotiation Lesson",
      "planner": {
        "title": "Curatorial negotiation plan",
        "subtitle": "Support learners as they negotiate exhibit choices while using target language for agreement and persuasion.",
        "duration": "Approx. 50 minutes",
        "pacing": [
          {
            "label": "Lead-in & context",
            "duration": "8 min"
          },
          {
            "label": "Language focus",
            "duration": "12 min"
          },
          {
            "label": "Group negotiation",
            "duration": "20 min"
          },
          {
            "label": "Reporting & reflection",
            "duration": "10 min"
          }
        ],
        "sections": [
          {
            "title": "Learning goals",
            "items": [
              "Activate background knowledge about art that speaks to displacement and memory.",
              "Rehearse functional language for expressing, agreeing, and disagreeing.",
              "Facilitate a collaborative selection that results in a curated exhibition plan."
            ]
          },
          {
            "title": "Teacher preparation",
            "items": [
              "Print or share the artist profiles and gallery cards for quick reference.",
              "Decide negotiation groupings and roles before class to save transition time.",
              "Load the audio/visual prompts you plan to use for the lead-in."
            ]
          },
          {
            "title": "Materials",
            "items": [
              "Projected visuals of the artworks (or printed gallery cards).",
              "Negotiation task sheets for tracking agreements.",
              "Timer or slide countdown to manage the main task window."
            ]
          },
          {
            "title": "Assessment & evidence",
            "items": [
              "Monitor the negotiation language log to check for target phrases.",
              "Use reporting slide prompts as a speaking assessment.",
              "Collect quick written rationales in the reflection slide to evidence learning."
            ]
          }
        ],
        "spotlight": "Keep the negotiation language visible and model supportive phrases when groups reach impasses."
      }
    },
    "sections": [
      {
        "title": "Lead-in",
        "slideKeys": [
          "curation-leadin"
        ]
      },
      {
        "title": "Pre-task Language",
        "slideKeys": [
          "art-language",
          "negotiation-language",
          "artist-profiles"
        ]
      },
      {
        "title": "Main Task",
        "slideKeys": [
          "art-selection"
        ]
      },
      {
        "title": "Reporting & Reflection",
        "slideKeys": [
          "art-reporting",
          "art-reflection"
        ]
      }
    ],
    "slides": [
      {
        "key": "curation-leadin",
        "type": "content",
        "title": "What Makes Art Powerful?",
        "subtitle": "Lead-in",
        "layout": {
          "alignment": "center"
        },
        "image": {
          "src": "https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Large mural of a face painted on a city wall"
        },
        "activity": {
          "title": "Activity: Think-Pair-Share",
          "stepsType": "ordered",
          "stepsStyle": "ordered",
          "steps": [
            {
              "strong": "Think (1 minute):",
              "text": "Look at the image. What story do you think the artist is trying to tell? What emotions does it make you feel?"
            },
            {
              "strong": "Pair (2 minutes):",
              "text": "With a partner, discuss your interpretations. Did you see the same story? What elements of the artwork led you to your interpretation?"
            },
            {
              "strong": "Share (3 minutes):",
              "text": "Be prepared to share your pair's key ideas with the class."
            }
          ]
        }
      },
      {
        "key": "art-language",
        "type": "content",
        "title": "The Language of Art",
        "subtitle": "Pre-task A \u2013 Building Our Curator's Toolkit",
        "list": [
          {
            "strong": "Medium:",
            "text": "The materials used to create a work of art (e.g., oil on canvas, photography, sculpture)."
          },
          {
            "strong": "Theme:",
            "text": "The main idea or message of the artwork (e.g., identity, resilience, memory)."
          },
          {
            "strong": "Symbolism:",
            "text": "The use of objects or images to represent bigger ideas (e.g., a key representing lost homes)."
          },
          {
            "strong": "Style:",
            "text": "The distinctive visual manner in which an artist creates (e.g., abstract, figurative, surreal)."
          },
          {
            "strong": "Narrative:",
            "text": "The story that the artwork tells."
          }
        ],
        "listStyle": "plain",
        "activity": {
          "title": "Activity: Become the Expert",
          "stepsType": "ordered",
          "stepsStyle": "ordered",
          "steps": [
            "In your group, each person will be assigned one or two terms.",
            "Take two minutes to make sure you understand your term(s) and can explain them in your own words.",
            "Take turns explaining your expert terms to your group. The other members should listen and can ask questions to clarify."
          ]
        }
      },
      {
        "key": "negotiation-language",
        "type": "grid",
        "title": "How to Be a Curator: Functional Language",
        "subtitle": "Pre-task B \u2013 The Language of Negotiation",
        "grid": [
          {
            "title": "Expressing Opinion",
            "items": [
              "I believe...",
              "From my perspective...",
              "What stands out is..."
            ],
            "listStyle": "plain"
          },
          {
            "title": "Agreeing",
            "items": [
              "I see your point.",
              "That\u2019s a great choice.",
              "I agree with you."
            ],
            "listStyle": "plain"
          },
          {
            "title": "Politely Disagreeing",
            "items": [
              "I see it differently.",
              "I understand, but...",
              "While that's strong, I'm not sure..."
            ],
            "listStyle": "plain"
          },
          {
            "title": "Making a Compromise",
            "items": [
              "What if we include...?",
              "Can we agree on...?",
              "Let's go with that one, then."
            ],
            "listStyle": "plain"
          }
        ],
        "activity": {
          "title": "Activity: Choose the Title",
          "description": [
            "With your group, you have 3 minutes to choose the best title for your upcoming exhibition. Use the functional language above to discuss the options and come to a consensus."
          ],
          "options": [
            {
              "value": "a",
              "label": "Option A: Fragments of a Homeland"
            },
            {
              "value": "b",
              "label": "Option B: Echoes of Palestine"
            },
            {
              "value": "c",
              "label": "Option C: The Olive and the Key"
            }
          ]
        }
      },
      {
        "key": "artist-profiles",
        "type": "content",
        "title": "The \"Fragments of a Homeland\" Collective",
        "subtitle": "Pre-task C \u2013 Meet the Artists",
        "list": [
          {
            "strong": "Artist 1: Laila (Digital Artist, Gaza) \u2013",
            "text": "Focuses on memory, nostalgia, and the resilience of youth."
          },
          {
            "strong": "Artist 2: Yousef (Painter/Sculptor, Ramallah) \u2013",
            "text": "Focuses on connection to the land and cultural heritage."
          },
          {
            "strong": "Artist 3: Rania (Interdisciplinary Artist, London) \u2013",
            "text": "Focuses on identity, exile, and life in the diaspora."
          }
        ],
        "listStyle": "plain",
        "activity": {
          "title": "Activity: Rank & Justify",
          "stepsType": "ordered",
          "stepsStyle": "ordered",
          "steps": [
            {
              "strong": "Individually (1 minute):",
              "text": "Rank the artists (1, 2, 3) based on whose focus you find most compelling for an international audience."
            },
            {
              "strong": "With a Partner (3 minutes):",
              "text": "Justify your #1 choice to your partner. Use the language of opinion to convince them of your choice."
            }
          ],
          "inputs": [
            {
              "label": "Record your ranking",
              "placeholder": "e.g., 1 \u2013 Laila, 2 \u2013 Yousef, 3 \u2013 Rania"
            }
          ]
        }
      },
      {
        "key": "art-selection",
        "type": "gallery",
        "title": "Curating \"Echoes of Palestine\"",
        "subtitle": "Group Negotiation",
        "body": [
          "The Scenario: In your curatorial groups, you must negotiate and select the three best artworks for the exhibition. You must all agree on the final selection and be able to justify your choices. Remember to use the functional language for negotiation."
        ],
        "items": [
          {
            "title": "Gaza Dreams",
            "meta": "Laila",
            "image": {
              "src": "https://images.pexels.com/photos/14899381/pexels-photo-14899381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "alt": "Child in a yellow jacket flying a kite on the beach"
            }
          },
          {
            "title": "Inheritance",
            "meta": "Yousef",
            "image": {
              "src": "https://images.pexels.com/photos/8582333/pexels-photo-8582333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "alt": "Close-up of a vintage key resting on fabric"
            }
          },
          {
            "title": "Fragmented City",
            "meta": "Rania",
            "image": {
              "src": "https://images.pexels.com/photos/8149633/pexels-photo-8149633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "alt": "Abstract painting with layered city shapes"
            }
          },
          {
            "title": "The Storyteller",
            "meta": "Yousef",
            "image": {
              "src": "https://images.pexels.com/photos/8001153/pexels-photo-8001153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "alt": "Portrait of an older woman with deep lines on her face"
            }
          },
          {
            "title": "Walled Garden",
            "meta": "Laila",
            "image": {
              "src": "https://images.pexels.com/photos/3230137/pexels-photo-3230137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "alt": "Open door leading into a garden space"
            }
          },
          {
            "title": "Unsent Letters",
            "meta": "Rania",
            "image": {
              "src": "https://images.pexels.com/photos/1089578/pexels-photo-1089578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "alt": "Rolled parchment scrolls tied with string"
            }
          }
        ]
      },
      {
        "key": "art-reporting",
        "type": "reporting",
        "title": "Our Selections for \"Echoes of Palestine\"",
        "subtitle": "Activity: Present Your Exhibition",
        "body": [
          "One member from each group will present your final selections and the curatorial statement to the class."
        ],
        "sections": [
          {
            "title": "Selected Artwork 1",
            "placeholder": "Artwork 1: Add image and title",
            "fields": [
              {
                "label": "Artwork & Title",
                "type": "text",
                "placeholder": "List the chosen work and artist."
              },
              {
                "label": "Justification",
                "type": "textarea",
                "placeholder": "Why does this piece belong in the exhibition?"
              }
            ]
          },
          {
            "title": "Selected Artwork 2",
            "placeholder": "Artwork 2: Add image and title",
            "fields": [
              {
                "label": "Artwork & Title",
                "type": "text",
                "placeholder": "List the chosen work and artist."
              },
              {
                "label": "Justification",
                "type": "textarea",
                "placeholder": "Explain how this piece supports your theme."
              }
            ]
          },
          {
            "title": "Selected Artwork 3",
            "placeholder": "Artwork 3: Add image and title",
            "fields": [
              {
                "label": "Artwork & Title",
                "type": "text",
                "placeholder": "List the chosen work and artist."
              },
              {
                "label": "Justification",
                "type": "textarea",
                "placeholder": "Describe the story this artwork adds to the exhibition."
              }
            ]
          }
        ],
        "statementField": {
          "label": "Our Collective's Curatorial Statement",
          "placeholder": "Summarize the narrative your exhibition tells and how the selected works speak in harmony."
        }
      },
      {
        "key": "art-reflection",
        "type": "content",
        "title": "Debriefing the Curatorial Process",
        "subtitle": "Reflect",
        "activity": {
          "title": "Activity: Class Discussion",
          "description": [
            "Be prepared to discuss the following questions as a class:"
          ],
          "stepsType": "unordered",
          "stepsStyle": "bullets",
          "steps": [
            "What were the most challenging aspects of the negotiation?",
            "Which artworks sparked the most debate, and why?",
            "How did your group's final selection represent a compromise or a consensus?",
            "What did this process teach you about the responsibilities of representing a collective voice through art?"
          ]
        }
      }
    ]
  },
  "eltLesson": {
    "id": "elt-lesson-template",
    "label": "ELT descriptive language lesson",
    "meta": {
      "eyebrow": "English Language Teaching",
      "descriptor": "Reusable slide flow for communicative ELT lessons focused on descriptive language.",
      "pageTitle": "ELT Lesson Template \u2013 Instructional Slides",
      "planner": {
        "title": "Descriptive language lesson plan",
        "subtitle": "A communicative sequence for adjectives, sensory details, and vivid voice.",
        "duration": "Approx. 45 minutes",
        "pacing": [
          {
            "label": "Lead-in & goals",
            "duration": "5 min"
          },
          {
            "label": "Model & notice language",
            "duration": "15 min"
          },
          {
            "label": "Guided practice",
            "duration": "10 min"
          },
          {
            "label": "Production & reflection",
            "duration": "15 min"
          }
        ],
        "sections": [
          {
            "title": "Learning goals",
            "items": [
              "Notice how sensory language shapes reader experience.",
              "Collect and categorise vivid vocabulary in context.",
              "Craft a short descriptive text that demonstrates voice and detail."
            ]
          },
          {
            "title": "Teacher moves",
            "items": [
              "Model a think-aloud when analysing the mentor text slide.",
              "Use the activity blocks to assign roles and circulate for feedback.",
              "Prompt learners to reuse new adjectives during the production gallery walk."
            ]
          },
          {
            "title": "Materials",
            "items": [
              "High-resolution image prompts or printed cards for the warm-up.",
              "Speakers or headphones for the sound walk audio clip.",
              "Coloured markers or collaborative doc for vocabulary collection."
            ]
          },
          {
            "title": "Evidence of learning",
            "items": [
              "Warm-up share-outs indicate access to topic vocabulary.",
              "Multiple-choice checks confirm understanding of vivid vs. plain sentences.",
              "Exit reflection captures individual goals for future writing."
            ]
          }
        ],
        "spotlight": "During the guided practice, highlight learner contributions on-screen to validate precise language choices."
      }
    },
    "sections": [
      {
        "title": "Welcome & Objectives",
        "slideKeys": [
          "elt-hero",
          "elt-objectives",
          "elt-warmups"
        ]
      },
      {
        "title": "Language Focus",
        "slideKeys": [
          "elt-vocabulary",
          "elt-vocab-quiz",
          "elt-modeling"
        ]
      },
      {
        "title": "Lesson Flow",
        "slideKeys": [
          "elt-lesson-flow",
          "elt-assessment"
        ]
      },
      {
        "title": "Practice & Reflection",
        "slideKeys": [
          "elt-group-work",
          "elt-reflection"
        ]
      }
    ],
    "slides": [
      {
        "key": "elt-hero",
        "type": "hero",
        "title": "Exploring Descriptive Language",
        "subtitle": "An adaptable lesson template for upper-intermediate learners.",
        "image": {
          "src": "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Students collaborating at a table with notebooks"
        },
        "nav": {
          "hidePrev": true,
          "nextLabel": "Begin",
          "nextIcon": "fas fa-play"
        }
      },
      {
        "key": "elt-objectives",
        "type": "content",
        "icon": "fas fa-bullseye",
        "title": "Lesson Objectives",
        "image": {
          "src": "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Teacher leading a discussion with adult learners"
        },
        "body": [
          "Set clear language targets before class begins so everyone understands the journey.",
          "Use this template to communicate goals in seconds."
        ],
        "list": [
          "Activate prior knowledge about vivid descriptions.",
          "Practise using sensory adjectives and strong verbs.",
          "Produce a short description that shows voice and detail."
        ]
      },
      {
        "key": "elt-warmups",
        "type": "cards",
        "icon": "fas fa-sun",
        "title": "Warm-Up Options",
        "subtitle": "Choose a quick engagement to open class.",
        "cards": [
          {
            "icon": "fas fa-image",
            "title": "Picture Prompt",
            "description": "Display an image and ask learners to list adjectives."
          },
          {
            "icon": "fas fa-comments",
            "title": "Two Truths",
            "description": "Learners share two descriptive sentences\u2014one must be imaginary."
          },
          {
            "icon": "fas fa-music",
            "title": "Sound Walk",
            "description": "Play ambient audio and brainstorm vocabulary for what is heard."
          },
          {
            "icon": "fas fa-lightbulb",
            "title": "Word Association",
            "description": "Start with a noun and build a descriptive chain together."
          }
        ]
      },
      {
        "key": "elt-vocabulary",
        "type": "content",
        "icon": "fas fa-book-open",
        "title": "Vocabulary Focus",
        "image": {
          "src": "https://images.pexels.com/photos/5428832/pexels-photo-5428832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Close-up of hands writing vocabulary notes"
        },
        "body": [
          "Model a short descriptive paragraph and highlight the language choices that make it vivid.",
          "Encourage learners to notice collocations and the rhythm created by varied sentence lengths."
        ],
        "list": [
          "Contrast plain versus evocative adjectives.",
          "Collect verb-noun partnerships that add energy.",
          "Flag discourse markers that guide the reader."
        ]
      },
      {
        "key": "elt-vocab-quiz",
        "type": "quiz",
        "icon": "fas fa-spell-check",
        "title": "Quick Check: Vocabulary Moves",
        "questions": [
          {
            "id": "elt-vocab-q1",
            "prompt": "Which sentence uses sensory detail most effectively?",
            "options": [
              {
                "value": "plain",
                "label": "The market was busy and people talked."
              },
              {
                "value": "vivid",
                "label": "The market buzzed with voices and citrus peels perfumed the air."
              },
              {
                "value": "short",
                "label": "The market was there."
              }
            ],
            "answer": "vivid",
            "correctFeedback": "Yes\u2014the vivid option layers sound and smell to engage readers.",
            "incorrectFeedback": "Try again. Look for language that appeals to multiple senses."
          },
          {
            "id": "elt-vocab-q2",
            "prompt": "Why is it helpful to collect verb\u2013noun partnerships during the lesson?",
            "options": [
              {
                "value": "variety",
                "label": "They help learners vary phrasing and avoid repeating basic verbs."
              },
              {
                "value": "length",
                "label": "They guarantee every sentence is longer."
              },
              {
                "value": "grammar",
                "label": "They replace the need to review grammar structures."
              }
            ],
            "answer": "variety",
            "correctFeedback": "Exactly\u2014collocations give learners ready-to-use alternatives.",
            "incorrectFeedback": "Remember, collecting pairs supports expressive variety, not sentence length."
          }
        ]
      },
      {
        "key": "elt-modeling",
        "type": "story",
        "icon": "fas fa-chalkboard-teacher",
        "title": "Teacher Modeling",
        "quote": "\"Let\u2019s paint the scene together.\"",
        "image": {
          "src": "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Teacher presenting vocabulary on a whiteboard"
        },
        "process": {
          "label": "Approach:",
          "text": "The teacher thinks aloud while drafting a descriptive paragraph, highlighting word choice decisions."
        },
        "outcome": {
          "label": "Learner Impact:",
          "text": "Students see how to revise dull phrases and feel confident trying the routine themselves."
        }
      },
      {
        "key": "elt-lesson-flow",
        "type": "process",
        "icon": "fas fa-layer-group",
        "title": "Lesson Flow",
        "subtitle": "Structure the experience around gradual release.",
        "image": {
          "src": "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Learners working collaboratively at a table"
        },
        "steps": [
          {
            "title": "Engage",
            "description": "Activate prior knowledge with a warm-up and set the scene."
          },
          {
            "title": "Explore Language",
            "description": "Analyse model texts, highlight vocabulary, and notice patterns."
          },
          {
            "title": "Guided Practice",
            "description": "Co-construct sentences and offer quick feedback."
          },
          {
            "title": "Independent Production",
            "description": "Learners craft their own description and share with peers."
          }
        ]
      },
      {
        "key": "elt-assessment",
        "type": "content",
        "icon": "fas fa-clipboard-list",
        "title": "Assessment & Evidence",
        "image": {
          "src": "https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Teacher reviewing student work with sticky notes"
        },
        "body": [
          "Collect lightweight evidence throughout the lesson to track growth and plan next steps."
        ],
        "list": [
          "Use observation checklists during guided practice.",
          "Invite learners to submit a short exit description or voice note.",
          "Facilitate peer feedback focusing on descriptive language goals."
        ]
      },
      {
        "key": "elt-group-work",
        "type": "content",
        "icon": "fas fa-users",
        "title": "Collaborative Practice",
        "subtitle": "Rotate roles so everyone speaks and supports.",
        "image": {
          "src": "https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Small group of learners discussing around a table"
        },
        "body": [
          "Assign trios with roles: narrator, detail detective, and tone coach.",
          "After each round, rotate roles and swap prompts to maximise practice."
        ]
      },
      {
        "key": "elt-reflection",
        "type": "reflection",
        "icon": "fas fa-pen-to-square",
        "title": "Teacher Planning Notes",
        "fields": [
          {
            "id": "elt-focus",
            "label": "Focus language point",
            "placeholder": "Note the adjectives, verbs, or discourse markers you want to emphasise."
          },
          {
            "id": "elt-context",
            "label": "Real-life scenario",
            "placeholder": "Describe the context or text type learners will connect to."
          },
          {
            "id": "elt-followup",
            "label": "Follow-up idea",
            "placeholder": "Capture homework, extension, or differentiation options."
          }
        ],
        "nav": {
          "nextAction": "restart",
          "nextLabel": "Finish & Restart",
          "nextIcon": "fas fa-check"
        }
      }
    ]
  },
  "questionTypesShowcase": {
    "id": "question-types-showcase",
    "label": "Interactive question types",
    "meta": {
      "eyebrow": "Mosaic Presenter",
      "descriptor": "Interactive templates converted from standalone activities.",
      "pageTitle": "Interactive Question Types \u2013 Instructional Slides",
      "planner": {
        "title": "Interactive template facilitation notes",
        "subtitle": "Guide educators in modelling each question type with clear checkpoints.",
        "duration": "Approx. 40 minutes",
        "pacing": [
          {
            "label": "Warm-up & framing",
            "duration": "5 min"
          },
          {
            "label": "Template walkthroughs",
            "duration": "25 min"
          },
          {
            "label": "Practice & debrief",
            "duration": "10 min"
          }
        ],
        "sections": [
          {
            "title": "Session goals",
            "items": [
              "Demonstrate how to adapt gap-fill, sequencing, grouping, and matching prompts.",
              "Highlight ways to capture quick formative data from each interaction.",
              "Curate take-away tasks teachers can remix for their own subjects."
            ]
          },
          {
            "title": "Before you facilitate",
            "items": [
              "Decide whether participants will respond individually or in teams.",
              "Preload answer keys so the feedback modals work smoothly.",
              "Prepare a sample debrief question for each template."
            ]
          },
          {
            "title": "Materials",
            "items": [
              "Devices or printed copies for teachers to test each interaction.",
              "Projector or screen-sharing setup to model the presenter view.",
              "Reflection doc for capturing remix ideas."
            ]
          },
          {
            "title": "Evidence & follow-up",
            "items": [
              "Collect the exported notes file to review adaptation ideas.",
              "Use the matching slide explanations as an exemplar for student-facing feedback.",
              "Schedule a follow-up clinic where teachers bring a draft question."
            ]
          }
        ],
        "spotlight": "Invite participants to narrate what they observe about learner experience during each template so they leave with actionable adaptations."
      }
    },
    "sections": [
      {
        "title": "Gap-fill dropdown",
        "slideKeys": [
          "roman-gapfill"
        ]
      },
      {
        "title": "Ordering task",
        "slideKeys": [
          "writing-process-ranking"
        ]
      },
      {
        "title": "Categorising language",
        "slideKeys": [
          "discourse-grouping"
        ]
      },
      {
        "title": "Multiple-choice grid",
        "slideKeys": [
          "states-of-matter-grid"
        ]
      }
    ],
    "slides": [
      {
        "key": "roman-gapfill",
        "type": "gapfill",
        "icon": "fas fa-landmark",
        "title": "The Roman Empire",
        "subtitle": "Fill in the gaps to complete each sentence.",
        "image": {
          "src": "https://images.pexels.com/photos/208636/pexels-photo-208636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Exterior of the Roman Colosseum at sunset"
        },
        "instructions": "Select the best answer in each dropdown before checking your work.",
        "paragraph": [
          {
            "type": "text",
            "content": "The famous amphitheater in the center of the city, known for its gladiator contests, is called the "
          },
          {
            "type": "gap",
            "id": "roman-gap-1",
            "answer": "Colosseum",
            "options": [
              "Colosseum",
              "Pantheon",
              "Forum"
            ],
            "feedbackTitle": "The famous amphitheater is the Colosseum",
            "explanation": "The Colosseum was the largest amphitheater ever built and was used for gladiatorial contests and public spectacles."
          },
          {
            "type": "text",
            "content": ". The governing and advisory assembly of the aristocracy in the ancient Roman Republic was the "
          },
          {
            "type": "gap",
            "id": "roman-gap-2",
            "answer": "Senate",
            "options": [
              "Assembly",
              "Senate",
              "Council"
            ],
            "feedbackTitle": "The governing assembly was the Senate",
            "explanation": "The Senate was a permanent and powerful institution in the Roman government, composed of the most prominent men in Rome."
          },
          {
            "type": "text",
            "content": ". A "
          },
          {
            "type": "gap",
            "id": "roman-gap-3",
            "answer": "legion",
            "options": [
              "battalion",
              "phalanx",
              "legion"
            ],
            "feedbackTitle": "The largest Roman army unit was the legion",
            "explanation": "The legion was the backbone of the Roman military machine, known for its discipline and effectiveness in battle."
          },
          {
            "type": "text",
            "content": " was the largest unit of the Roman army. According to legend, the city of "
          },
          {
            "type": "gap",
            "id": "roman-gap-4",
            "answer": "Rome",
            "options": [
              "Athens",
              "Carthage",
              "Rome"
            ],
            "feedbackTitle": "The city founded by twins was Rome",
            "explanation": "The founding myth of Rome, involving twin brothers Romulus and Remus, is a cornerstone of Roman culture and history."
          },
          {
            "type": "text",
            "content": " was founded by the twin brothers Romulus and Remus in 753 BC."
          }
        ]
      },
      {
        "key": "writing-process-ranking",
        "type": "ranking",
        "icon": "fas fa-list-ol",
        "title": "The Writing Process",
        "subtitle": "Arrange the stages from first to last.",
        "image": {
          "src": "https://images.pexels.com/photos/670723/pexels-photo-670723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Writer planning ideas with a notebook and laptop"
        },
        "instructions": "Move the stages until they are in the correct order, then check your work.",
        "items": [
          {
            "id": "prewriting",
            "label": "Prewriting",
            "correctRank": 1,
            "explanation": "Prewriting is the first step, where you brainstorm ideas, research, and outline your topic before you begin writing."
          },
          {
            "id": "drafting",
            "label": "Drafting",
            "correctRank": 2,
            "explanation": "Drafting is the second stage. This is where you write the first version of your text, focusing on getting your ideas down on paper."
          },
          {
            "id": "revising",
            "label": "Revising",
            "correctRank": 3,
            "explanation": "Revising is the third stage. Here, you review the content, organization, and clarity of your draft, making significant changes to improve the overall piece."
          },
          {
            "id": "editing",
            "label": "Editing & Proofreading",
            "correctRank": 4,
            "explanation": "Editing & Proofreading is the fourth stage. After revising the big picture, you focus on correcting grammar, spelling, punctuation, and formatting errors."
          },
          {
            "id": "publishing",
            "label": "Publishing",
            "correctRank": 5,
            "explanation": "Publishing is the final stage, where you share your polished work with its intended audience."
          }
        ],
        "initialOrder": [
          "revising",
          "prewriting",
          "publishing",
          "drafting",
          "editing"
        ],
        "checkLabel": "Check order",
        "resetLabel": "Reset order"
      },
      {
        "key": "discourse-grouping",
        "type": "grouping",
        "icon": "fas fa-language",
        "title": "Discourse Markers",
        "subtitle": "Categorise these linking words by their function.",
        "image": {
          "src": "https://images.pexels.com/photos/159775/books-college-library-learning-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Stacks of books on a library table"
        },
        "instructions": "Assign each linking word to the function it best represents.",
        "categories": [
          {
            "id": "addition",
            "label": "Addition"
          },
          {
            "id": "contrast",
            "label": "Contrast"
          },
          {
            "id": "consequence",
            "label": "Consequence"
          }
        ],
        "items": [
          {
            "id": "however",
            "label": "However",
            "category": "contrast",
            "explanation": "'However' is used to introduce a statement that contrasts with or seems to contradict something that has been said previously."
          },
          {
            "id": "furthermore",
            "label": "Furthermore",
            "category": "addition",
            "explanation": "'Furthermore' adds another piece of information to the point you are making."
          },
          {
            "id": "therefore",
            "label": "Therefore",
            "category": "consequence",
            "explanation": "'Therefore' indicates that a statement is the logical consequence of the one that came before it."
          },
          {
            "id": "on-the-other-hand",
            "label": "On the other hand",
            "category": "contrast",
            "explanation": "'On the other hand' is used to present a contrasting point of view."
          },
          {
            "id": "as-a-result",
            "label": "As a result",
            "category": "consequence",
            "explanation": "'As a result' shows that the second statement is a result of the first."
          },
          {
            "id": "moreover",
            "label": "Moreover",
            "category": "addition",
            "explanation": "'Moreover' is used to introduce a piece of information that adds to or supports the previous one."
          }
        ]
      },
      {
        "key": "states-of-matter-grid",
        "type": "matching",
        "icon": "fas fa-table",
        "title": "States of Matter",
        "subtitle": "Match each state to its defining properties.",
        "image": {
          "src": "https://images.pexels.com/photos/590570/pexels-photo-590570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "alt": "Scientist working with a glowing plasma ball"
        },
        "instructions": "For each state of matter, choose the property that best fits before checking your answers.",
        "columns": [
          {
            "id": "col-1",
            "label": "Definite Shape & Volume"
          },
          {
            "id": "col-2",
            "label": "Definite Volume"
          },
          {
            "id": "col-3",
            "label": "Indefinite Shape & Volume"
          },
          {
            "id": "col-4",
            "label": "Ionized Gas"
          }
        ],
        "rows": [
          {
            "id": "solid",
            "label": "Solid",
            "correctColumn": "col-1",
            "explanation": "A solid's particles are tightly packed in a fixed structure, giving it a definite shape and volume."
          },
          {
            "id": "liquid",
            "label": "Liquid",
            "correctColumn": "col-2",
            "explanation": "A liquid's particles can slide past one another, allowing it to take the shape of its container, but its volume remains constant."
          },
          {
            "id": "gas",
            "label": "Gas",
            "correctColumn": "col-3",
            "explanation": "A gas's particles are far apart and move randomly, allowing it to expand to fill any container, giving it an indefinite shape and volume."
          },
          {
            "id": "plasma",
            "label": "Plasma",
            "correctColumn": "col-4",
            "explanation": "Plasma is a superheated state of matter where atoms are stripped of their electrons, creating an ionized gas."
          }
        ]
      }
    ]
  },
  "digitalSelfDefense": {
    "id": "digital-self-defense",
    "label": "Digital Self-Defense Playbook",
    "meta": {
      "eyebrow": "Digital Wellness",
      "descriptor": "Interactive workshop to recognise, analyse, and respond to online threats with confidence.",
      "pageTitle": "Digital Self-Defense Playbook \u2013 Instructional Slides",
      "planner": {
        "title": "Digital self-defense workshop plan",
        "subtitle": "Guide learners through recognising scams, practising response language, and crafting actionable advice.",
        "duration": "Approx. 60 minutes",
        "pacingTitle": "Session flow",
        "pacing": [
          {
            "label": "Launch & story",
            "duration": "10 min"
          },
          {
            "label": "Threat decoding stations",
            "duration": "20 min"
          },
          {
            "label": "Language & prioritisation",
            "duration": "15 min"
          },
          {
            "label": "Infographic task & share",
            "duration": "15 min"
          }
        ],
        "sections": [
          {
            "title": "Learning goals",
            "items": [
              "Spot common digital scam tactics and red flags.",
              "Practise advice language for guiding safer online behaviour.",
              "Collaborate on an actionable digital self-defense resource."
            ]
          },
          {
            "title": "Facilitator moves",
            "items": [
              "Model URL inspection and narrate why the spear-phishing example is convincing.",
              "Circulate during activities to prompt specific evidence for each categorisation.",
              "Coach groups to use imperative language while drafting infographic tips."
            ]
          },
          {
            "title": "Materials & tech",
            "items": [
              "Projector or shared screen for slides and scenario analysis.",
              "Devices with internet access for research and infographic creation.",
              "Shared workspace or chat channel for gallery walk feedback."
            ]
          }
        ],
        "spotlight": "Emphasise the pause-verify habit whenever urgency appears in a message."
      }
    },
    "sections": [
      {
        "title": "Launch",
        "slideKeys": [
          "digital-hero",
          "invoice-incident"
        ]
      },
      {
        "title": "Pre-Task A",
        "slideKeys": [
          "stage1-matching",
          "stage2-cards"
        ]
      },
      {
        "title": "Pre-Task B",
        "slideKeys": [
          "stage1-gapfill",
          "stage2-ranking"
        ]
      },
      {
        "title": "Pre-Task C",
        "slideKeys": [
          "stage1-grouping",
          "stage2-justify"
        ]
      },
      {
        "title": "Task",
        "slideKeys": [
          "digital-task"
        ]
      },
      {
        "title": "Reporting",
        "slideKeys": [
          "gallery-walk"
        ]
      },
      {
        "title": "Reflection",
        "slideKeys": [
          "digital-reflection"
        ]
      }
    ],
    "slides": [
      {
        "key": "digital-hero",
        "type": "hero",
        "title": "The Digital Self-Defense Playbook",
        "subtitle": "Mastering the art of identifying and neutralizing online threats.",
        "image": {
          "src": "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
          "alt": "A person's hands typing on a laptop with glowing code overlayed, representing digital activity."
        },
        "nav": {
          "hidePrev": true,
          "nextLabel": "Begin"
        }
      },
      {
        "key": "invoice-incident",
        "type": "story",
        "title": "The Invoice Incident",
        "quote": "It looked exactly like the real thing. I was one click away from a disaster.",
        "narrative": [
          "Maria, a freelance designer, received an email from what appeared to be her biggest client, 'Innovate Corp.' The subject was 'URGENT: Overdue Invoice.' The email used the company's logo and had a professional tone, instructing her to log into their new payment portal via a link to settle a supposed outstanding bill. Panicked about damaging her client relationship, she clicked the link.",
          "The login page looked perfect. But as she was about to enter her banking password, she noticed the URL: 'innovate-corp.secure-login.net.' The real client's URL was just 'innovate.com.' It was a sophisticated 'spear phishing' attack, targeting her specifically. She closed the window, took a deep breath, and called her client directly. There was no overdue invoice."
        ],
        "takeaways": {
          "process": "The scammer used urgency, impersonation, and a highly convincing fake website.",
          "outcome": "Maria learned that verifying through a separate, trusted channel (like a phone call) is the ultimate security check."
        }
      },
      {
        "key": "stage1-matching",
        "type": "matching",
        "title": "Stage 1: Decoding the Threats",
        "instructions": "Match the cybersecurity terms to their official definitions. Understanding these is your first line of defense.",
        "columns": [
          {
            "id": "term",
            "label": "Threat Term"
          },
          {
            "id": "definition",
            "label": "Definition"
          }
        ],
        "rows": [
          {
            "id": "phishing",
            "label": "Phishing",
            "correctColumn": "definition"
          },
          {
            "id": "vishing",
            "label": "Vishing",
            "correctColumn": "definition"
          },
          {
            "id": "spear_phishing",
            "label": "Spear Phishing",
            "correctColumn": "definition"
          },
          {
            "id": "malware",
            "label": "Malware",
            "correctColumn": "definition"
          },
          {
            "id": "2fa",
            "label": "2FA (Two-Factor Authentication)",
            "correctColumn": "definition"
          }
        ],
        "answers": [
          {
            "id": "phishing",
            "text": "A broad attack using fraudulent emails or texts to trick many people into revealing sensitive information."
          },
          {
            "id": "vishing",
            "text": "Voice phishing; using fraudulent phone calls to trick people into giving away personal data."
          },
          {
            "id": "spear_phishing",
            "text": "A highly targeted attack that uses personalized information to trick a specific individual or organization."
          },
          {
            "id": "malware",
            "text": "Malicious software (like viruses, ransomware) designed to damage or gain unauthorized access to computer systems."
          },
          {
            "id": "2fa",
            "text": "A security method requiring two forms of identification to access an account, like a password and a code sent to your phone."
          }
        ]
      },
      {
        "key": "stage2-cards",
        "type": "cards",
        "title": "Stage 2: Threat Analysis",
        "instructions": "With your partner, analyze each scenario. Identify the threat type and explain the 'red flags' you see.",
        "cards": [
          {
            "icon": "phone",
            "title": "Voicemail Transcript",
            "description": "'This is the IRS. Your assets will be frozen due to tax evasion unless you call us back immediately at 1-800-555-FAKE to settle your account. Do not ignore this message.'"
          },
          {
            "icon": "email",
            "title": "Email to a University Student",
            "description": "'Dear [Student Name], We saw your resume on the university career portal and are impressed with your profile for the intern role at [Company Name]. Please send a copy of your driver's license and social security number to start the background check.'"
          },
          {
            "icon": "sms",
            "title": "Text Message",
            "description": "'Your package is stuck at customs. A $1.99 fee is required. To release your package and schedule delivery, visit: bit.ly/shiptrck.'"
          }
        ]
      },
      {
        "key": "stage1-gapfill",
        "type": "gapfill",
        "title": "Stage 1: Language for Advising",
        "instructions": "Read this blog post about digital wellness. Fill in the gaps with the best word from the box to give strong, clear advice.",
        "wordBank": [
          "must",
          "should",
          "shouldn't",
          "verify",
          "be",
          "enable",
          "think",
          "avoid"
        ],
        "paragraph": [
          {
            "type": "text",
            "content": "In today's digital world, you "
          },
          {
            "type": "gap",
            "answer": "must",
            "placeholder": "_____"
          },
          {
            "type": "text",
            "content": " be proactive about your security. First, you absolutely "
          },
          {
            "type": "gap",
            "answer": "should",
            "placeholder": "_____"
          },
          {
            "type": "text",
            "content": " create complex passwords, but you "
          },
          {
            "type": "gap",
            "answer": "shouldn't",
            "placeholder": "_____"
          },
          {
            "type": "text",
            "content": " reuse them across different sites. For critical accounts like banking and email, you "
          },
          {
            "type": "gap",
            "answer": "enable",
            "placeholder": "_____"
          },
          {
            "type": "text",
            "content": " two-factor authentication; it's one of the most effective defenses. When you get a message that seems urgent, always pause and "
          },
          {
            "type": "gap",
            "answer": "think",
            "placeholder": "_____"
          },
          {
            "type": "text",
            "content": ". "
          },
          {
            "type": "gap",
            "answer": "Be",
            "placeholder": "_____"
          },
          {
            "type": "text",
            "content": " skeptical of any unsolicited requests for personal information. If an email from a service provider seems odd, "
          },
          {
            "type": "gap",
            "answer": "verify",
            "placeholder": "_____"
          },
          {
            "type": "text",
            "content": " it by logging into your account through a trusted browser bookmark, not the link in the email. Finally, "
          },
          {
            "type": "gap",
            "answer": "avoid",
            "placeholder": "_____"
          },
          {
            "type": "text",
            "content": " connecting to public Wi-Fi for sensitive activities unless you are using a VPN."
          }
        ],
        "feedbackSummary": "Notice the mix of modals ('should', 'must') for giving advice and imperatives ('verify', 'be') for giving direct commands. This is the language of clear instruction."
      },
      {
        "key": "stage2-ranking",
        "type": "ranking",
        "title": "Stage 2: Prioritizing Advice",
        "instructions": "With your group, rank these security actions from 1 (most important) to 6 (least important) for a 15-year-old high school student. Be prepared to justify your choices.",
        "items": [
          {
            "id": "item1",
            "label": "Using a different, strong password for every online account."
          },
          {
            "id": "item2",
            "label": "Enabling two-factor authentication (2FA) on social media and gaming accounts."
          },
          {
            "id": "item3",
            "label": "Regularly updating their phone and computer operating systems."
          },
          {
            "id": "item4",
            "label": "Ignoring friend/follow requests from people they don't know in real life."
          },
          {
            "id": "item5",
            "label": "Never sharing personal information like their phone number or home address online."
          },
          {
            "id": "item6",
            "label": "Being skeptical of online quizzes that ask for personal information (e.g., 'What's your Star Wars name?')."
          }
        ],
        "checkLabel": "Compare Rankings",
        "feedbackTitle": "Discussion Point",
        "feedbackSummary": "Does your group's ranking change if the user is an 80-year-old who primarily uses email and Facebook? Why or why not? Discuss."
      },
      {
        "key": "stage1-grouping",
        "type": "grouping",
        "title": "Stage 1: The Gray Area - Real or Fake?",
        "instructions": "These examples are more subtle. Drag each one into the 'Delete Immediately' pile or the 'Investigate Further' pile.",
        "categories": [
          {
            "id": "scam",
            "label": "Delete Immediately"
          },
          {
            "id": "safe",
            "label": "Investigate Further"
          }
        ],
        "items": [
          {
            "id": "item1",
            "label": "A well-designed email from 'Spotify' saying 'Your payment method has expired. Please update it now to avoid service interruption.' The link goes to 'spotify-payments.com.'",
            "category": "scam",
            "explanation": "The URL is the giveaway. It's a fake domain. Delete."
          },
          {
            "id": "item2",
            "label": "A text from an unknown number with a blurry picture: 'Hey is this you in this pic? lol [malicious link]'",
            "category": "scam",
            "explanation": "Curiosity bait is a classic tactic to get you to click a malicious link. Delete."
          },
          {
            "id": "item3",
            "label": "An email from 'Microsoft 365' with the subject 'Unusual sign-in activity.' It says someone logged in from another country and asks you to click a button to 'Review recent activity.'",
            "category": "safe",
            "explanation": "This could be a legitimate security alert. The safest action is to NOT click the link, but to open a browser and log into your Microsoft account manually to check for alerts."
          },
          {
            "id": "item4",
            "label": "A direct message on Instagram from a friend: 'OMG I can't believe this video of you! [malicious link]'",
            "category": "safe",
            "explanation": "Your friend's account might be hacked. Do not click. Investigate by contacting your friend through a different method (like a text message) to ask if they sent it."
          }
        ]
      },
      {
        "key": "stage2-justify",
        "type": "content",
        "title": "Stage 2: Justify Your Decisions",
        "body": [
          "Now, discuss your group's choices for the previous activity.",
          "**For the 'Delete Immediately' items:**",
          "- What was the single biggest red flag that made the decision easy?",
          "**For the 'Investigate Further' items:**",
          "- What makes these messages potentially legitimate?",
          "- What is the safest possible way to verify them without clicking any links in the message itself?"
        ],
        "list": {
          "style": "bullet",
          "items": [
            "Use phrases like: 'We categorized this as a scam because...'",
            "'The reason we thought this needed investigation was...'",
            "'To verify this safely, you should...'"
          ]
        }
      },
      {
        "key": "digital-task",
        "type": "process",
        "title": "Your Task: Create a 'Digital Self-Defense' Infographic",
        "instructions": "Your group's mission is to create a one-page digital infographic for new international students at your school. It must be clear, concise, and actionable.",
        "steps": [
          {
            "title": "1. Plan & Strategize (5 min)",
            "description": "Decide on the 5 most critical tips for your audience. Consider their unique vulnerabilities (e.g., dealing with visa/housing websites, being far from home)."
          },
          {
            "title": "2. Draft & Design (15 min)",
            "description": "Write your tips using strong advice language (imperatives and modals). Define at least two key terms (e.g., 'phishing'). Find one powerful, illustrative image on Pexels. Use a free online tool like Canva to design your infographic."
          },
          {
            "title": "3. Peer Review & Refine (10 min)",
            "description": "Share your draft with another group. Provide feedback: Is the advice clear? Is the language accurate? Is it visually appealing? Use the feedback to make final improvements."
          }
        ]
      },
      {
        "key": "gallery-walk",
        "type": "content",
        "title": "Gallery Walk & Feedback",
        "body": [
          "Post a link to your finished infographic in the shared class chat/forum.",
          "You will now have 10 minutes to conduct a 'gallery walk.' View at least two other groups' infographics.",
          "For each one you view, leave a comment answering these two questions:"
        ],
        "list": {
          "style": "numbered",
          "items": [
            "What is the single most memorable or effective tip on their infographic?",
            "Quote one sentence or phrase that you think is a particularly good use of advice language."
          ]
        },
        "image": {
          "src": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
          "alt": "A team of diverse colleagues looking at a screen together and collaborating."
        }
      },
      {
        "key": "digital-reflection",
        "type": "reflection",
        "title": "Action Plan & Final Thoughts",
        "fields": [
          {
            "id": "action_plan",
            "label": "Based on today's lesson, what is ONE specific action you will take this week to improve your personal online security? (e.g., 'I will enable 2FA on my Instagram.')",
            "placeholder": "My commitment is to..."
          },
          {
            "id": "language_takeaway",
            "label": "What phrase or language structure from today (e.g., 'You should verify...', 'Be wary of...') will be most useful for you in other contexts?",
            "placeholder": "The language I'll remember is..."
          },
          {
            "id": "remaining_questions",
            "label": "What's one question you still have about cybersecurity?",
            "placeholder": "I'm still curious about..."
          }
        ]
      }
    ]
  }
};
