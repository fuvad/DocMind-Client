import { auth as clerkAuth } from "@clerk/nextjs/server";

export async function getServerAuth() {
  const isDemo = process.env.NEXT_PUBLIC_IS_DEMO === "true";

  if (isDemo) {
    // In demo mode, the Next.js middleware bypasses Clerk entirely.
    // Calling clerkAuth() would throw an error. We return a mock userId
    // so layout checks pass. True demo authentication is managed via the
    // backend demo_session HttpOnly cookie.
    return { userId: "demo-user" };
  }

  return await clerkAuth();
}
