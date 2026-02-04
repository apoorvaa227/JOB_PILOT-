import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export async function GET(req) {
  try {
    const user = await currentUser();

    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = user.primaryEmailAddress.emailAddress;
    const { searchParams } = new URL(req.url);
    const mockId = searchParams.get("mockId");

    if (mockId) {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, mockId));

      return NextResponse.json(result[0] ?? null);
    }

    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, email))
      .orderBy(desc(MockInterview.id));

    return NextResponse.json(result ?? []);
  } catch (error) {
    console.error("Error in GET /api/mock-interview:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const user = await currentUser();

    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { jsonMockResp, jobPosition, jobDesc, jobExperience } = body;

    if (!jsonMockResp || !jobPosition || !jobDesc || !jobExperience) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const email = user.primaryEmailAddress.emailAddress;

    const result = await db
      .insert(MockInterview)
      .values({
        mockId: uuidv4(),
        jsonMockResp,
        jobPosition,
        jobDesc,
        jobExperience,
        createdBy: email,
        createdAt: moment().format("DD-MM-YYYY"),
      })
      .returning({ mockId: MockInterview.mockId });

    return NextResponse.json({ mockId: result[0]?.mockId });
  } catch (error) {
    console.error("Error in POST /api/mock-interview:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
