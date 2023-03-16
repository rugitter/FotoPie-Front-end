import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuth = req.cookies.has("accessToken");

  if (!isAuth) {
    if (pathname.startsWith("/edituserprofile" || "/upload")) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  } else {
    if (pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  }

  return NextResponse.next();
}
