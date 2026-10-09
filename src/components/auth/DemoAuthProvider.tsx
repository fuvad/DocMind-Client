"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface DemoAuthContextType {
  userId: string | null;
  isLoaded: boolean;
  isSignedIn: boolean;
  getToken: () => Promise<string | null>;
}

const DemoAuthContext = createContext<DemoAuthContextType | undefined>(undefined);

export const DemoAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Attempt to create/verify session on load
    const initDemoSession = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/demo/session`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        
        if (res.ok) {
          const data = await res.json();
          setUserId(data.userId);
        } else {
          console.error("Failed to initialize demo session");
        }
      } catch (error) {
        console.error("Error creating demo session:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    initDemoSession();
  }, []);

  const value = {
    userId,
    isLoaded,
    isSignedIn: !!userId,
    getToken: async () => null, // Not needed because we use HttpOnly cookies for Demo
  };

  return (
    <DemoAuthContext.Provider value={value}>
      {children}
    </DemoAuthContext.Provider>
  );
};

export const useDemoAuth = () => {
  const context = useContext(DemoAuthContext);
  if (context === undefined) {
    throw new Error("useDemoAuth must be used within a DemoAuthProvider");
  }
  return context;
};
