// lib/auth.js
import { auth } from "@/app/api/auth/[...nextauth]/route";

export const getServerSession = async () => {
  return await auth();
};

export { auth };
