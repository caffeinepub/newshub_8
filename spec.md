# NewsHub

## Current State
New project with empty Motoko backend and no frontend.

## Requested Changes (Diff)

### Add
- News aggregator app with curated sample articles across categories
- Article data model: id, title, summary, category, source, author, publishedAt, imageUrl, isFeatured, isTrending, isEditorPick
- Backend: query articles by category, get featured/trending/editor picks
- Frontend: dark-themed news dashboard with top headlines hero, category filters, article grid, sidebar with trending and editor picks
- Search functionality (client-side filtering)
- Dark/light mode toggle

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Backend: Article type, stable storage, seed sample articles, query functions (getAll, getByCategory, getFeatured, getTrending, getEditorPicks, search)
2. Frontend: Header with nav/search/dark mode toggle, hero section, category filter chips, 2-column article grid, right sidebar (trending + editor picks), footer
