// app/api/saveBlog/route.ts

import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { blogText, blogUrl, blogSummary } = await req.json();
    if (!blogText || !blogSummary) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if user exists
    const dbUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
    });

    if (!dbUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Save to DB
    const savedBlog = await db.savedBlogs.create({
      data: {
        blogText,
        blogUrl,
        blogSummary,
        userId: user.id,
      },
    });

    return NextResponse.json({ success: true, savedBlog });
  } catch (err: any) {
    console.error("Save error:", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
