import { getServerAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'

const HomePage = async () => {
  const isDemo = process.env.NEXT_PUBLIC_IS_DEMO === "true";

  if (isDemo) {
    redirect("/projects");
  }

  const { userId } = await getServerAuth();

  if (userId) {
    redirect("/projects");
  } else {
    redirect("/sign-in");
  }
}

export default HomePage