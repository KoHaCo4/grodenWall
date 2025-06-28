// components/AuthButton.tsx
"use client";

import { signIn, signOut } from "@/auth";
import { useSession } from "next-auth/react";

export function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex gap-4 items-center">
        <p>Halo, {session.user?.name}</p>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </form>
      </div>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("CredentialsProvider");
      }}
    >
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Login dengan Google
      </button>
    </form>
  );
}
