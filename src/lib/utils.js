import { NextResponse } from "next/server";

export function handleErrorResponse(status, message) {
  return new NextResponse(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
