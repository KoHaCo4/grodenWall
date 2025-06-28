// app/protected/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <h1>Halaman Terproteksi</h1>
      <p>Halo, {session.user?.name}!</p>
    </div>
  );
}
