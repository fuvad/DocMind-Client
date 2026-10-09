# DocMind Client - Agent Engineering Instructions

This file contains frontend-specific instructions for agents working in the `client/` directory. For project-wide rules, refer to the root `AGENTS.md`.

## 1. Frontend Engineering Conventions
- **Framework**: Next.js 16 (App Router).
- **Language**: TypeScript. Strictly adhere to TS types/interfaces for props, state, and APIs.
- **Styling**: Tailwind CSS v4. Use utility classes; avoid custom CSS files unless necessary.
- **State Management**: Rely exclusively on React state and props. Do not introduce Redux/Zustand unless explicitly requested.
- **Component Organization**: Keep components modular, focused, and reusable. Avoid monolithic files.

## 2. API Client & Communication
- **API Wrapper**: Always use `src/lib/api/index.ts`. It auto-injects the Clerk JWT Bearer token. Do not manually append the token elsewhere.
- **Server Communication**: Communicates with the FastAPI backend. Real-time Q&A uses SSE endpoints.
- **Error/Loading**: Handle loading states clearly and API errors gracefully in the UI.
- **No Duplication**: Do not create separate API clients or duplicate auth/request logic.

## 3. Frontend Testing Guidance
Currently, the frontend has no testing infrastructure. When requested to add tests, follow these intended approaches (verify dependencies exist before using them, and do not add them unprompted):

- **Stack Target**: `Vitest` + `React Testing Library` for unit/components, `Playwright` for E2E.
- **Unit/Component Tests**:
  - Prefer testing user-visible behavior and application logic.
  - Avoid testing framework internals.
  - Mock backend/API responses when testing frontend components in isolation.
- **E2E Tests**:
  - Keep E2E tests focused on critical user journeys (e.g., Project Creation -> Upload -> Chat).
- **Rule**: Do not add testing dependencies during a task unless absolutely necessary for the requested goal.

