"use client";

import { useSession } from "next-auth/react";
import Loading from "../loading";

export default function AdminDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!session) {
    return <div>Please sign in to access this page</div>;
  }
  return (
    <div className="flex w-full text-center justify-center">
      <h1 className="fonst-bold text-2xl">
        Welcome to Dashboard Admin..{session.user?.name}
      </h1>
    </div>
  );
}
