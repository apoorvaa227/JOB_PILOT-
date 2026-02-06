import { NextResponse } from "next/server";
import { db } from "@/utils/db";
import { dsaPreferenceTable } from "@/utils/schema";
import { eq, and, lte, gte } from "drizzle-orm";
import { getRandomQuestionsForTopics } from "@/utils/dsaQuestions";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// This route is called by Vercel Cron
export async function GET(req) {
  try {
    // Verify cron secret (optional but recommended)
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      // For development, allow without secret
      if (process.env.NODE_ENV === "production" && process.env.CRON_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const today = new Date().toISOString().slice(0, 10);
    const currentHour = new Date().getUTCHours();

    // Fetch all active preferences where today is within the date range
    const preferences = await db
      .select()
      .from(dsaPreferenceTable)
      .where(
        and(
          eq(dsaPreferenceTable.isActive, true),
          lte(dsaPreferenceTable.startDate, today),
          gte(dsaPreferenceTable.endDate, today)
        )
      );

    console.log(`Found ${preferences.length} active DSA preferences`);

    let emailsSent = 0;
    const errors = [];

    for (const pref of preferences) {
      try {
        // Check if already sent today
        if (pref.lastSentDate === today) {
          console.log(`Already sent to ${pref.userEmail} today, skipping`);
          continue;
        }

        // Check frequency (for weekly, only send on Mondays)
        if (pref.frequency === "weekly") {
          const dayOfWeek = new Date().getDay();
          if (dayOfWeek !== 1) {
            // 1 = Monday
            console.log(`Weekly frequency, not Monday, skipping ${pref.userEmail}`);
            continue;
          }
        }

        // Get random questions for selected topics
        const questions = getRandomQuestionsForTopics(pref.topics, 1);

        if (questions.length === 0) {
          console.log(`No questions found for topics, skipping ${pref.userEmail}`);
          continue;
        }

        // Generate email HTML
        const emailHtml = generateEmailHtml(pref.userName || "User", questions);

        // Send email via Resend
        const { data, error } = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "DSA Prep <onboarding@resend.dev>",
          to: pref.userEmail,
          subject: `🚀 Your Daily DSA Questions are Ready!`,
          html: emailHtml,
        });

        if (error) {
          console.error(`Failed to send email to ${pref.userEmail}:`, error);
          errors.push({ email: pref.userEmail, error: error.message });
          continue;
        }

        // Update lastSentDate
        await db
          .update(dsaPreferenceTable)
          .set({ lastSentDate: today })
          .where(eq(dsaPreferenceTable.id, pref.id));

        emailsSent++;
        console.log(`Email sent to ${pref.userEmail}`);
      } catch (err) {
        console.error(`Error processing ${pref.userEmail}:`, err);
        errors.push({ email: pref.userEmail, error: err.message });
      }
    }

    return NextResponse.json({
      success: true,
      emailsSent,
      totalPreferences: preferences.length,
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error("Error in cron job:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

function generateEmailHtml(userName, questions) {
  const questionRows = questions
    .map(
      (q, index) => `
      <tr>
        <td style="padding: 15px; border-bottom: 1px solid #e5e7eb;">
          <div style="display: flex; align-items: flex-start; gap: 12px;">
            <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; flex-shrink: 0;">
              ${index + 1}
            </div>
            <div style="flex: 1;">
              <div style="font-weight: 600; color: #1f2937; margin-bottom: 4px;">${q.name}</div>
              <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                <span style="background: ${getDifficultyColor(q.difficulty)}; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">${q.difficulty}</span>
                <span style="color: #6b7280; font-size: 13px;">📁 ${q.topic}</span>
              </div>
            </div>
            <a href="${q.link}" style="background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 8px 16px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 14px;">
              Solve →
            </a>
          </div>
        </td>
      </tr>
    `
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 16px 16px 0 0; padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🎯 Daily DSA Challenge</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your personalized coding questions are ready!</p>
        </div>
        
        <!-- Content -->
        <div style="background: white; padding: 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #374151; font-size: 16px; margin-top: 0;">
            Hi <strong>${userName}</strong>! 👋
          </p>
          <p style="color: #6b7280; font-size: 15px;">
            Here are your DSA questions for today. Each question is carefully selected from your chosen topics. Take your time, think through the approach, and don't forget to test your solutions!
          </p>
          
          <!-- Questions Table -->
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0; background: #f9fafb; border-radius: 12px; overflow: hidden;">
            ${questionRows}
          </table>
          
          <!-- Tips -->
          <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 16px; border-radius: 12px; margin: 20px 0;">
            <p style="margin: 0; color: #92400e; font-size: 14px;">
              💡 <strong>Pro Tip:</strong> Before coding, spend 5-10 minutes understanding the problem and thinking about edge cases. A good plan leads to cleaner code!
            </p>
          </div>
          
          <!-- CTA -->
          <div style="text-align: center; margin-top: 30px;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dsa-prep" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 14px 32px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 16px;">
              Open DSA Prep Dashboard
            </a>
          </div>
          
          <!-- Footer -->
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #9ca3af; font-size: 13px; margin: 0;">
              You're receiving this because you subscribed to daily DSA questions.
            </p>
            <p style="color: #9ca3af; font-size: 13px; margin: 8px 0 0 0;">
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dsa-prep/settings" style="color: #6366f1;">Manage preferences</a> · 
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dsa-prep/settings" style="color: #6366f1;">Unsubscribe</a>
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "#22c55e";
    case "Medium":
      return "#f59e0b";
    case "Hard":
      return "#ef4444";
    default:
      return "#6b7280";
  }
}
