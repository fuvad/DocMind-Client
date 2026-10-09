import { clerkMiddleware } from '@clerk/nextjs/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

export default function middleware(req: NextRequest, evt: NextFetchEvent) {
  if (process.env.NEXT_PUBLIC_IS_DEMO === "true") {
    return;
  }
  return clerkMiddleware()(req, evt);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};