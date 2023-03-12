// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   const accessToken = localStorage.getItem("accessToken");
//   if (!accessToken) {
//     if (pathname === "/edituserprofile") {
//       return NextResponse.redirect("/login");
//     }
//   }
//   return NextResponse.next();
// }
