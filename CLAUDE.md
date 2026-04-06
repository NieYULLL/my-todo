# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based todo application built with Vite. The application features local storage persistence, task filtering, and a clean component-based architecture with CSS modules.

## Development Commands

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production (outputs to `dist/`)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Architecture

### State Management
- **Custom hooks** handle all business logic and state:
  - `src/hooks/useLocalStorage.js` - Generic hook for localStorage persistence
  - `src/hooks/useTasks.js` - Task-specific logic (add, toggle, delete, abandon) using useLocalStorage
- **Task state** includes: `completed` (boolean), `abandoned` (boolean), `date` (Chinese locale string), `text` (task content)
- **No external state library** - uses React hooks exclusively

### Component Structure
- `App.jsx` - Root component orchestrates all subcomponents
- **Presentation components** (props-only, no internal state):
  - `Header` - Application title and subtitle (Chinese UI)
  - `TaskInput` - Form for adding new tasks
  - `Stats` - Displays task counts (total, completed, pending)
  - `FilterButtons` - Filter tasks by: all, pending, completed, abandoned
  - `TaskList` - Filters and renders TaskItem components
  - `TaskItem` - Individual task with completion, abandonment, and deletion actions
  - `Footer` - Application footer with persistence note

### Data Flow
1. `useTasks` hook provides task array and mutation functions
2. `App` passes these down to child components
3. User interactions trigger callbacks that update state via `useTasks`
4. `useLocalStorage` automatically persists changes to localStorage
5. Components re-render with updated state

### Styling
- **CSS Modules** for component-scoped styling (`.module.css` files)
- **Global styles** in `src/index.css` (gradient background, layout)
- **Container styles** in `src/App.css`
- Responsive design with media queries

### Task States
Tasks can be in one of three mutually exclusive states:
1. **Pending** - Default state, neither completed nor abandoned
2. **Completed** - Checked/toggled to completion
3. **Abandoned** - Explicitly marked as abandoned (cannot be completed while abandoned)

### Localization
- UI text is in Chinese
- Dates formatted with `zh-CN` locale: `new Date().toLocaleDateString('zh-CN')`

## Key Implementation Details

### Task Filtering Logic
Filtering occurs in `TaskList` component based on the `filter` prop:
- `'all'` - Show all tasks
- `'pending'` - Show tasks where `!completed && !abandoned`
- `'completed'` - Show tasks where `completed === true`
- `'abandoned'` - Show tasks where `abandoned === true`

### User Interaction Patterns
- **Task addition** - Submit via form or Enter key with validation
- **Task completion** - Toggle checkbox (disabled if abandoned)
- **Task abandonment** - Button click with confirmation (disabled if completed)
- **Task deletion** - Button click with confirmation
- **Filter changes** - Button clicks update filter state

### Error Handling
- `useLocalStorage` includes try-catch blocks for localStorage operations
- Empty task input validation with alert
- Delete/abandon actions require user confirmation

## Project Configuration

### Build Tool
- **Vite** with React plugin
- **No TypeScript** - plain JavaScript/JSX
- Production build outputs to `dist/` directory

### Code Quality
- **ESLint** configured for React Hooks and React Refresh
- Custom rule: `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]`
- Ignores `dist` directory globally

### Git Ignore
Standard Node.js ignores plus:
- `.claude/` - Claude Code local configuration
- `node_modules/`
- `dist/`
- Editor and IDE files

## Development Notes

- **No test framework** configured - consider adding Vitest or Jest if needed
- **Component props** are well-documented through usage patterns
- **Backup directory** contains legacy HTML version in `backup/todo.html`
- **Browser compatibility** relies on modern JavaScript and localStorage APIs
- **State updates** use functional updates in `useTasks` for correctness