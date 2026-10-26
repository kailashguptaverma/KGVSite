# Editing project pages

All nine pages in `projects/` use `project-pages.css` and contain their content directly in HTML. They do not load `project.js`, so edits to these pages will not be overwritten by the older content renderer.

Each page has the same structure:

1. Project name, short description, role, context/status, and tools.
2. Overview: the system and engineering problem.
3. My contribution: personal responsibilities and deliverables.
4. Design & development: calculations, design decisions, prototypes, tests, images, and videos.
5. Results & next steps: a short account of completed work and remaining development.

Edit paragraphs and captions in the relevant HTML file. Keep individual contributions separate from team achievements, and distinguish proposed or ongoing work from tested results. Add images as `figure` elements with an `img` and `figcaption` inside the appropriate section. Reuse the shared stylesheet for layout changes across all project pages.

Older project-specific stylesheets and `portfolio/project.js` are retained for reference but are not loaded by the refreshed pages.
