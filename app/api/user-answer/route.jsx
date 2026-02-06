import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";

export async function POST(req) {
  try {
    const user = await currentUser();

    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      mockIdRef,
      question,
      correctAns,
      userAns,
      feedback,
      rating,
    } = body;

    if (!mockIdRef || !question || !userAns || !feedback || !rating) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const email = user.primaryEmailAddress.emailAddress;

    const result = await db.insert(UserAnswer).values({
      mockIdRef,
      question,
      correctAns: correctAns || "",
      userAns,
      feedback,
      rating,
      userEmail: email,
      createdAt: new Date().toISOString().slice(0, 10),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in POST /api/user-answer:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const user = await currentUser();

    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const mockIdRef = searchParams.get("mockIdRef");

    if (!mockIdRef) {
      return NextResponse.json(
        { error: "mockIdRef is required" },
        { status: 400 }
      );
    }

    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, mockIdRef));

    return NextResponse.json(result ?? []);
  } catch (error) {
    console.error("Error in GET /api/user-answer:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
