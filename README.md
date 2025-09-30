# Building lessons in Mosaic Presenter

The Presenter shell reads from the `lessonLibrary` object near the end of `Presenter.html`. Each top-level key becomes a selectable template in the **Lesson template** dropdown, and the associated data drives the slides, the slide map, and the saved notes for that lesson.

## 1. Lesson templates and metadata
1. Open `Presenter.html` and locate `const lessonLibrary = { ... }`.
2. Duplicate one of the existing lesson objects (for example `digitalSelfDefense`, `eltLesson`, or `questionTypesShowcase`) and give it a new key; the key is what the selector uses internally.
3. Update the top-level fields inside your lesson object:
   - `id` must be unique and is appended to the notes storage key so each lesson keeps separate annotations.
   - `label` is the name that appears in the dropdown control.
   - `meta` contains presentation chrome such as the eyebrow, descriptor, browser page title, and the optional workshop planner described below.

### Workshop planner (collapsible overview)
Provide a `meta.planner` object if you want a facilitator-friendly workshop plan. The planner is rendered inside a collapsible menu that stays closed on load, showing only the title, duration badge, and a truncated subtitle. When expanded it reveals the full session overview, pacing, sections, and spotlight guidance.

The planner supports the following keys:
- `title`, `subtitle`, and `duration` describe the session headline.
- `pacingTitle` labels the pacing list shown when the menu opens.
- `pacing` is an array of objects with `label` and optional `duration` for each segment.
- `sections` is an array where each entry defines a `title` and either an `items` list or a `description` paragraph.
- `spotlight` surfaces one facilitation reminder as a callout at the bottom of the plan.

## 2. Slide map and navigation
The `sections` array in each lesson controls the slide map on the left. Every section needs a `title` and a `slideKeys` array. Keys must match the `key` property on slide configurations so the map can group entries correctly.

Each slide can optionally include a `nav` object to customise on-slide navigation controls. Supported keys include `hidePrev`, `hideNext`, `prevLabel`, `prevIcon`, `nextLabel`, `nextIcon`, `nextVariant` (primary or secondary styling), and `nextAction` (for example `restart` to loop back to the first slide).

## 3. Slide configuration essentials
Add objects to the `slides` array in the order they should appear. Every slide object needs a unique `key` and `type`. If `type` is omitted the renderer falls back to the standard content layout.

Common properties that work across slide types:
- `layout` lets you change alignment, add layout classes, or apply presentation themes (see Section 5).
- `image` accepts `{ src, alt }` and is automatically wrapped in the slide’s animation hooks.
- `body` is an array of paragraphs. You can pass strings or objects with `html` to inject rich markup (for example, `<span class="text-underline text-underline-sage">`...).
- `list` accepts either a simple array of strings or an array of objects with `icon`, `strong`, and `text` fragments.
- `activity` attaches a call-to-action block. Provide `title`, `description` paragraphs, optional ordered or unordered `steps`, text `inputs`, and multiple-choice `options`.

## 4. Slide type reference
### Content-driven layouts
- `hero`: Opening splash with optional icon, title, subtitle, and hero image.
- `content`: General-purpose slide supporting copy, imagery, lists, and embedded activity blocks.
- `grid`: Displays reference columns defined in a `grid` array.
- `gallery`: Renders a grid of rich cards from `items`, each with image, title, metadata, and description.
- `reporting`: Provides a recap layout with sections for statements, data tables, or debrief prompts.
- `cards`: Shows up to four callout cards with icons, headings, and descriptions.
- `story`: Combines a quote-style rubric, narrative paragraphs, optional imagery, and process/outcome callouts.
- `process`: Visualises multi-step flows from a `steps` array.

### Interactive assessments and reflections
- `gapfill`: Build a `paragraph` array mixing text segments with gap objects (`answer`, optional `options`, and `feedback`).
- `ranking`: Provide an `items` array with `id`, `label`, and an optional `explanation` to rank actions.
- `grouping`: Define `categories` and `items`; each item references the correct category and can include explanatory text.
- `matching`: Configure `columns` and `rows`; each row specifies `correctColumn` and optional `explanation`.
- `quiz`: Configure single-answer questions with `questions`, each containing `options`, the correct `answer`, and feedback strings.
- `reflection`: Supply a `fields` array where each field defines `id`, `label`, and optional `placeholder` to collect open responses.

## 5. Layout, theming, and typography utilities
Every slide honours the `layout` object, which supports:
- `alignment`: `"center"` or `"right"` to reflow content.
- `className`: a string or array of class names applied to the slide container.
- `theme`: a string or array that prefixes classes with `theme--` (for example `"sunrise"`).

Available layout helper classes:
- `layout--columns`: Two-column responsive grid for pairing copy with imagery or callouts.
- `layout--poster`: Framed poster effect with soft gradients and elevated shadows.
- `layout--spotlight`: Frosted, spotlighted panel suited for key ideas or case studies.
- `layout--timeline`: Left-rail timeline with nodes for each paragraph or list item.

Theme surfaces you can mix in via `layout.theme` or `className`:
- `theme--sunrise`: Warm gradient background with dark green typography.
- `theme--midnight`: High-contrast twilight surface with light type and softened accents.
- `theme--aurora`: Layered radial washes for atmospheric storytelling blocks.

Accent components for highlighting content:
- `accent-chip` and `accent-chip--glow`: Compact pills for metadata or status tags.
- `accent-card` and `accent-card--frost`: Elevated panels with radial light washes.
- `text-highlight`: Inline gradient marker useful inside paragraph HTML snippets.

Typography utility classes (combine freely inside `body` HTML, list fragments, or reflection prompts):
- Size: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-xxl`, `text-display`.
- Weight: `fw-light`, `fw-regular`, `fw-semibold`, `fw-bold`, `fw-black`.
- Decoration: `text-underline`, `text-underline-sage`, `text-underline-gold`, `text-underline-ink`, `text-uppercase`, `text-italic`, `text-shadow`.
- Colour: `text-sage`, `text-fern`, `text-amber`, `text-ink`, `text-muted`, `text-soft`.

These utilities enable rich textual contrasts (bold, underline, coloured, large/small) without editing the core styles.

## 6. Interaction scaffolds and micro-interactions
- All structural elements receive the `animate-on-scroll` class, triggering subtle entry animations as the slide becomes visible.
- Activity helpers provide built-in controls: `createActivityBlock` renders headings, instructional paragraphs, optional step lists, free-response inputs, and multiple-choice groups; `createActivityControls` attaches “Check” and “Reset” buttons; `createActivityFeedback` manages per-item guidance.
- Assessment slides expose dedicated evaluators for ranking, grouping, matching, and quiz logic so you only supply data, not algorithms.
- A highlight toolbar, annotation composer, and popover components underpin the in-slide annotation features.

## 7. Launch, notes, and reusable assets
- Open `Presenter.html` in a browser and use the **Lesson template** dropdown to load your lesson; the slide deck, slide map, and notes panel refresh instantly when you switch templates.
- Lesson notes are stored per `id` in `localStorage`, ensuring annotations remain isolated between templates. Import/export buttons in the notes toolbar support backup or sharing.
- Imagery can point to remote URLs or repository-relative paths—be sure to provide descriptive `alt` text for accessibility.
- The workshop planner menu can be expanded at any time to review pacing and facilitator moves without leaving the slide flow.
