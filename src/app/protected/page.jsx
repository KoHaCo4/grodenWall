// app/protected/page.tsx
// import { auth } from "@/auth";
import { getServerSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await getServerSession();

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
