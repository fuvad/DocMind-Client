"use client";

import React, { createContext, useContext } from "react";
import { useAuth as useClerkAuth } from "@clerk/nextjs";
import { useDemoAuth } from "./DemoAuthProvider";

interface AuthContextType {
  userId: string | null;
  isLoaded: boolean;
  isSignedIn: boolean;
  getToken: () => Promise<string | null>;
}

const CustomAuthContext = createContext<AuthContextType | undefined>(undefined);

const ClerkAuthAdapter = ({ children }: { children: React.ReactNode }) => {
  const clerkAuth = useClerkAuth();
  return (
    <CustomAuthContext.Provider value={clerkAuth}>
      {children}
    </CustomAuthContext.Provider>
  );
};

const DemoAuthAdapter = ({ children }: { children: React.ReactNode }) => {
  const demoAuth = useDemoAuth();
  return (
    <CustomAuthContext.Provider value={demoAuth}>
      {children}
    </CustomAuthContext.Provider>
  );
};

export const CustomAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isDemo = process.env.NEXT_PUBLIC_IS_DEMO === "true";

  if (isDemo) {
    return <DemoAuthAdapter>{children}</DemoAuthAdapter>;
  }

  return <ClerkAuthAdapter>{children}</ClerkAuthAdapter>;
};

export const useCustomAuth = () => {
  const context = useContext(CustomAuthContext);
  if (context === undefined) {
    throw new Error("useCustomAuth must be used within CustomAuthProvider");
  }
  return context;
};
