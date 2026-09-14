# DocMind — Client

Next.js frontend for DocMind, an AI-powered document intelligence platform. Provides the UI for project management, document upload, knowledge base exploration, and conversational Q&A with streaming responses.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Authentication:** Clerk (`@clerk/nextjs`)
- **UI:** Lucide React icons, React Hot Toast, React Dropzone
- **Deployment:** Vercel

## Project Structure

```
client/
├── src/
│   ├── app/
│   │   ├── (auth)/            # Sign-in / Sign-up pages
│   │   ├── (dashboard)/
│   │   │   └── projects/      # Projects dashboard & per-project pages
│   │   ├── layout.tsx         # Root layout with ClerkProvider
│   │   ├── globals.css
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── chat/              # Chat UI & message components
│   │   ├── layout/            # Sidebar, header, navigation
│   │   ├── projects/          # Project cards, settings, knowledge base
│   │   └── ui/                # Reusable UI primitives
│   ├── lib/
│   │   ├── api/               # API client with Clerk JWT auth
│   │   └── types/             # TypeScript type definitions
│   └── proxy.ts
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm (or yarn / pnpm / bun)

### Installation

```bash
cd client
npm install
```

### Environment Variables

Create a `.env` file in the `client/` directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_API_URL=http://localhost:8000    # Backend API URL
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key (from Clerk dashboard) |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `NEXT_PUBLIC_API_URL` | Backend API base URL (local or deployed) |

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Key Features

- **Authentication** — Clerk-based sign-in/sign-up with JWT tokens for API requests
- **Project Management** — Create, view, and delete projects
- **Document Upload** — Drag-and-drop file upload (PDF, DOCX, PPTX, MD) via S3 pre-signed URLs
- **Website Ingestion** — Add website URLs for web scraping and processing
- **Knowledge Base** — Browse uploaded documents, view processing status (short polling), and inspect chunks
- **Chat** — Conversational Q&A with streaming responses and citation support
- **Project Settings** — Configure RAG strategy, embedding model, chunk sizes, and more

## Deployment

The client is deployed on **Vercel**. Connect the repository and set the environment variables in the Vercel dashboard. Make sure `NEXT_PUBLIC_API_URL` points to your deployed backend (CloudFront distribution or ALB DNS).
