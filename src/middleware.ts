import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  console.log(request.nextUrl.pathname, "1");
  return NextResponse.next();
};

const config = {
  matcher: "/api",
};

export { middleware, config };
