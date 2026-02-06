import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { dsaPreferenceTable } from "@/utils/schema";
import { eq } from "drizzle-orm";

// GET - Fetch user's DSA preferences
export async function GET() {
  try {
    const user = await currentUser();

    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = user.primaryEmailAddress.emailAddress;

    const result = await db
      .select()
      .from(dsaPreferenceTable)
      .where(eq(dsaPreferenceTable.userEmail, email));

    return NextResponse.json(result[0] ?? null);
  } catch (error) {
    console.error("Error in GET /api/dsa-preferences:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST - Create or update DSA preferences
export async function POST(req) {
  try {
    const user = await currentUser();

    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = user.primaryEmailAddress.emailAddress;
    const userName = user.fullName || user.firstName || "User";
    const body = await req.json();

    const { topics, frequency, sendTime, startDate, endDate, isActive } = body;

    if (!topics || !frequency || !sendTime || !startDate || !endDate) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if preference already exists
    const existing = await db
      .select()
      .from(dsaPreferenceTable)
      .where(eq(dsaPreferenceTable.userEmail, email));

    if (existing.length > 0) {
      // Update existing
      const result = await db
        .update(dsaPreferenceTable)
        .set({
          topics,
          frequency,
          sendTime,
          startDate,
          endDate,
          isActive: isActive ?? true,
          userName,
        })
        .where(eq(dsaPreferenceTable.userEmail, email))
        .returning();

      return NextResponse.json(result[0]);
    } else {
      // Create new
      const result = await db
        .insert(dsaPreferenceTable)
        .values({
          userEmail: email,
          userName,
          topics,
          frequency,
          sendTime,
          startDate,
          endDate,
          isActive: isActive ?? true,
          createdAt: new Date().toISOString().slice(0, 10),
        })
        .returning();

      return NextResponse.json(result[0]);
    }
  } catch (error) {
    console.error("Error in POST /api/dsa-preferences:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE - Remove DSA preferences (unsubscribe)
export async function DELETE() {
  try {
    const user = await currentUser();

    if (!user?.primaryEmailAddress?.emailAddress) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const email = user.primaryEmailAddress.emailAddress;

    await db
      .delete(dsaPreferenceTable)
      .where(eq(dsaPreferenceTable.userEmail, email));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in DELETE /api/dsa-preferences:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
