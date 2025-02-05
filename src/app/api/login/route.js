import { usersInfo } from "@/db/schema";
import { getDB } from "@/db/client";
import { eq } from "drizzle-orm";
import { handleErrorResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(req, context) {
  try {
    const db = getDB(context.env);
    const { email, password } = await req.json();

    if (!email || !password) {
      return handleErrorResponse(400, "Missing email or password");
    }

    // Find user
    const user = await db.select().from(usersInfo).where(eq(usersInfo.email, email)).get();

    if (!user || user.password !== password) {
      return handleErrorResponse(401, "Invalid email or password");
    }

    return NextResponse.json({ success: true, message: "Login successful" }, { status: 200 });
  } catch (error) {
    return handleErrorResponse(500, "Server error");
  }
}
