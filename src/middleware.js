import { auth } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isAdminPath = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminPath && !req.auth) {
    const url = req.url.replace(req.nextUrl.pathname, "/login");
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/protected/:path*"],
  matcher: ["/admin/:path*"],
};
