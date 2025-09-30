window.__LESSON_LIBRARY__ = {
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
