"use client";

import { useAuth as useClerkAuth } from "@clerk/nextjs";
import { useDemoAuth } from "../components/auth/DemoAuthProvider";

export const useCustomAuth = () => {
  const isDemo = process.env.NEXT_PUBLIC_IS_DEMO === "true";
  const clerkAuth = useClerkAuth();
  const demoAuth = useDemoAuth();

  // If we are in demo mode, ALWAYS return the demo context.
  // We still have to call useClerkAuth unconditionally because React Hooks cannot be called conditionally,
  // but if NEXT_PUBLIC_IS_DEMO is true, we simply ignore its return value.
  // Note: in a pure Demo build without ClerkProvider, useClerkAuth might throw an error.
  // To avoid this, we can wrap the fallback, but the safest approach is just to return demoAuth if isDemo.
  
  if (isDemo) {
    return demoAuth;
  }
  return clerkAuth;
};
