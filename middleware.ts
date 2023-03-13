import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAccessToken } from "./src/utils/token";

export function middleware(req: NextRequest) {
  const isAuth = req.cookies.has("accessToken");


  if (!isAuth) {
    if (req.nextUrl.pathname.startsWith("/edituserprofile")) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }
  return NextResponse.next();
}
