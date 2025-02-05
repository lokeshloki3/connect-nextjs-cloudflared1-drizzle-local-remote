import { usersInfo } from "@/db/schema";
import { createDB } from "@/db/client";
import { eq } from "drizzle-orm";
import { handleErrorResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(req, context) {
  try {
    const db = createDB(context.env);
    const { email, password } = await req.json();

    if (!email || !password) {
      return handleErrorResponse(400, "Missing email or password");
    }

    // Check if email already exists
    const existingUser = await db.select().from(usersInfo).where(eq(usersInfo.email, email)).get();
    if (existingUser) {
      return handleErrorResponse(400, "Email already in use");
    }

    // Save plain text password (not recommended for production)
    await db.insert(usersInfo).values({ email, password }).run();

    return NextResponse.json({ success: true, message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    return handleErrorResponse(500, "Server error");
  }
}
