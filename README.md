# Building lessons in Mosaic Presenter

The Presenter shell reads from the `lessonLibrary` object near the end of `Presenter.html`. Each top-level key inside `lessonLibrary` becomes a selectable template in the **Lesson template** dropdown, and the associated data drives the slides, slide map, and saved notes for that lesson.【F:Presenter.html†L1381-L1391】【F:Presenter.html†L1433-L1516】

## 1. Add or update a lesson entry
1. Open `Presenter.html` and locate the `const lessonLibrary = { ... }` declaration.【F:Presenter.html†L1433-L1446】
2. Duplicate one of the existing lesson objects (for example `mentoringOrientation`, `eltLesson`, or `questionTypesShowcase`) and give it a new key; that key is what the selector uses internally.【F:Presenter.html†L1433-L1948】
3. Update the `id`, `label`, and optional `meta` fields:
   - `id` must be unique and is appended to the notes storage key so each lesson keeps separate annotations.【F:Presenter.html†L1433-L1446】【F:Presenter.html†L2709-L2734】
   - `label` is the name that appears in the dropdown control.【F:Presenter.html†L1381-L1391】【F:Presenter.html†L4355-L4378】
   - `meta` lets you customise the eyebrow text, descriptor, and browser page title for the active lesson.【F:Presenter.html†L1437-L1443】【F:Presenter.html†L4306-L4342】

## 2. Organise slide map sections
Populate the `sections` array to define the headings shown in the slide map. Each section requires a `title` and `slideKeys` list. Keys must match the `key` property on each slide configuration so the slide map can group entries correctly.【F:Presenter.html†L1445-L1471】【F:Presenter.html†L2735-L2814】

## 3. Configure slides
Add objects to the `slides` array in the order they should appear. Every slide object needs a unique `key` and `type`. If `type` is omitted the renderer falls back to the standard content layout.【F:Presenter.html†L1472-L1939】【F:Presenter.html†L4255-L4291】

### Standard slide types
- `hero`: Supports `icon`, `title`, `subtitle`, and an `image` object with `src`/`alt` attributes. Ideal for opening slides.【F:Presenter.html†L3258-L3280】【F:Presenter.html†L1472-L1501】
- `content`: Renders paragraphs, optional imagery, and flexible lists. Provide `body`, `image`, `list`, and `listStyle` as needed.【F:Presenter.html†L3281-L3313】【F:Presenter.html†L1518-L1608】
- `cards`: Supply a `cards` array where each item can include `icon`, `title`, and `description` to display multiple callouts.【F:Presenter.html†L3963-L4000】【F:Presenter.html†L1609-L1684】
- `story`: Combines quotes, narrative paragraphs, and optional process/outcome callouts defined on the slide object.【F:Presenter.html†L4001-L4043】【F:Presenter.html†L1685-L1754】
- `process`: Use for multi-step flows. Add a `steps` array with `title`, `description`, and optional `duration` for each stage.【F:Presenter.html†L4044-L4099】【F:Presenter.html†L1755-L1838】
- `quiz`: Configure single-answer questions by providing `questions`, each with `id`, `prompt`, `options`, `answer`, and feedback strings. Buttons are wired automatically.【F:Presenter.html†L4100-L4161】【F:Presenter.html†L1502-L1547】
- `reflection`: Creates rich text areas for planning notes. Pass a `fields` array where each field defines `id`, `label`, and optional `placeholder`. You can also override the navigation via the slide’s `nav` settings.【F:Presenter.html†L4162-L4254】【F:Presenter.html†L1839-L1939】

### Interactive assessment slide types
- `gapfill`: Build a `paragraph` array that mixes text segments with gap objects. Gaps support `answer`, `options`, `placeholder`, `feedbackTitle`, and `explanation`. Optional `instructions`, `feedbackSummary`, `checkLabel`, and `resetLabel` customise the experience.【F:Presenter.html†L3314-L3463】【F:Presenter.html†L1949-L1995】
- `ranking`: Provide an `items` array where each entry has an `id`, `label`, `correctRank`, and optional `explanation`. You can seed an `initialOrder`, override control labels, and supply custom instructions.【F:Presenter.html†L3464-L3648】【F:Presenter.html†L1996-L2042】
- `grouping`: Define `categories` and `items`. Each item references a target category via `item.category` and can include an explanatory string. Placeholders, summaries, and button labels are configurable just like the other activities.【F:Presenter.html†L3649-L3795】【F:Presenter.html†L2043-L2132】
- `matching`: Set up `columns` and `rows` to create a multiple-choice grid. Each row specifies `correctColumn` and optional `explanation`. Global instructions, feedback summaries, and button labels work the same way.【F:Presenter.html†L3796-L3962】【F:Presenter.html†L2133-L2219】

## 4. Launch your lesson
Open `Presenter.html` in a browser and use the **Lesson template** dropdown to select your lesson. The slide deck, slide map, and notes panel refresh instantly when you change templates. The planning checklist now lives inside the **AI lesson designer checklist** card within the Session tools drawer—expand the collapsible summary whenever you want pacing or guardrail reminders without covering the active slide. The Session tools drawer loads closed by default so the instructional canvas stays clear until you open it.【F:Presenter.html†L1846-L1894】【F:Presenter.html†L5865-L6024】【F:Presenter.html†L1857-L1864】

## 5. Notes and reusable assets
Slide notes are stored per-lesson in `localStorage` using the lesson `id`, so switching templates keeps annotations separate. Import/export controls remain available from the toolbar. Images can point to remote URLs or relative paths in the repository; be sure to include descriptive alt text for accessibility.【F:Presenter.html†L2687-L2734】【F:Presenter.html†L1455-L1939】

## 6. LLM authoring directives
The `aiLessonDesignerBlueprint` entry inside `lessonLibrary` includes a purpose-built guide for language models. Use these directives whenever you prompt an LLM to generate a new lesson configuration.【F:Presenter.html†L1887-L2148】

### Purpose
- Produce a single JSON object that can be injected into `lessonLibrary` without hand-editing. Avoid prose wrapping or Markdown fences so the presenter can parse it directly.【F:Presenter.html†L1900-L1940】

### Output contract
- **Top-level keys**: `id`, `label`, `meta`, `sections`, and `slides` are mandatory. `meta` must contain `eyebrow`, `descriptor`, optional `pageTitle`, and a fully populated `planner` object.【F:Presenter.html†L1900-L1940】【F:Presenter.html†L1939-L2059】
- **Sections array**: Provide ordered objects with `title` and `slideKeys`. Every slide key must appear exactly once so the slide map groups correctly.【F:Presenter.html†L1900-L1940】【F:Presenter.html†L2059-L2106】
- **Slides array**: Supply ordered slide configs. Each config needs a unique `key`, a supported `type`, and only the properties required by that renderer.【F:Presenter.html†L1900-L1940】【F:Presenter.html†L2106-L2148】
- **Planner object**: Include pacing segments, overview sections, the `spotlight` reminder, and the pedagogical guardrails listed below so facilitators can prep at a glance.【F:Presenter.html†L1941-L2059】

### Supported slide types
- **hero** – Open the lesson, activate prior knowledge, and name community agreements. Accepts `title`, `subtitle`, `image`, optional navigation, and an optional `spotlight` cue.【F:Presenter.html†L1905-L1938】
- **content** – Model concepts and anchor charts with paragraphs, lists, annotations, and imagery for direct instruction moments.【F:Presenter.html†L1905-L1938】
- **cards** – Lay out stations, differentiation pathways, or multimodal options where each card can note scaffolds or extensions.【F:Presenter.html†L1905-L1938】
- **quiz** – Plan formative checks with explicit answer keys so facilitators can diagnose next steps.【F:Presenter.html†L1905-L1938】
- **reflection** – Close loops with exit tickets, SEL check-ins, or future-planning prompts using frames and sentence starters.【F:Presenter.html†L1905-L1938】
- **process** – Document gradual release routines with timed segments and clear teacher vs. learner actions.【F:Presenter.html†L1905-L1938】
- **activity** – Reserve for interactive slide types (`grouping`, `gapfill`, `matching`, `ranking`) that need auto-check logic.【F:Presenter.html†L1905-L1938】

### Interaction and sequencing guardrails
- Provide accessible alt text, sequencing cues, and automatic check/reset details for interactive slides. Annotate key phrases where extra context benefits learners.【F:Presenter.html†L1941-L1998】
- Sequence learning so every new concept is followed by guided practice or formative evidence before independent work.【F:Presenter.html†L1941-L1998】
- Capture objectives, evidence, scaffolds, and extensions inside the planner so facilitators can see how pedagogy flows across the deck.【F:Presenter.html†L1998-L2069】
- Retain accessibility and tone commitments: inclusive language, gender-neutral names, and second-person facilitator guidance.【F:Presenter.html†L2059-L2069】

### Prompting script
- When prompting the LLM, feed it audience, objectives, duration, required interactions, and success metrics. Demand kebab-case slide keys, differentiated supports, and the sequencing guardrails listed above.【F:Presenter.html†L1945-L2069】【F:Presenter.html†L2098-L2148】
- Close your prompt with the reminder from the planner spotlight: return only valid JSON that already aligns objectives, evidence, and supports for every slide.【F:Presenter.html†L2066-L2070】
