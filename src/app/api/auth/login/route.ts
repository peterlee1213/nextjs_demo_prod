import { NextRequest, NextResponse } from "next/server";
import { execSql } from "@/_database/db";

export async function POST(request: NextRequest) {
  // console.log(request.nextUrl.searchParams);
  const res = await execSql("select * from user");
  return NextResponse.json(res);
}
