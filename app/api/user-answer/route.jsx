import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import moment from "moment";

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

    const payload = {
      mockIdRef,
      question,
      correctAns,
      userAns,
      feedback,
      rating,
      userEmail: user.primaryEmailAddress.emailAddress,
      createdAt: moment().format("DD-MM-YYYY"),
    };

    const result = await db.insert(UserAnswer).values(payload).returning();

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Error in POST /api/user-answer:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
