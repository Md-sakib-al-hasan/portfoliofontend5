

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value; 

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", req.url)); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/drashboard/:path*"], 
};

