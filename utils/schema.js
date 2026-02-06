
import { pgTable, serial, text, varchar,integer, boolean, json  } from "drizzle-orm/pg-core";
import { SubscriptIcon } from "lucide-react";

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: varchar("createdAt"),
  mockId: varchar("mockId").notNull(),
});
export const UserAnswer=pgTable("userAnswer", {
  id: serial("id").primaryKey(),
   mockIdRef: varchar("mockId").notNull(),
   question:varchar("question").notNull(),
   correctAns:text("correctAns"),
   userAns:text("userAns"),
   feedback:text("feedback"),
   rating:varchar("rating").notNull(),
   userEmail:varchar("userEmail"),
    createdAt: varchar("createdAt"),
});

export const userTable = pgTable('user', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  SubscriptIconId:varchar()
});

export const coursesTable=pgTable("courses",{
  id: serial("id").primaryKey(),
  cid:varchar().notNull().unique(),
  name:varchar(),
  description:varchar(),
  duration:varchar(),
  noofChapters:integer().notNull(),
  includeVedio:boolean().default(false),
  level:varchar().notNull(),
  category:varchar(),
  courseJson:json(),
  courseContent:json().default({}),
  bannerImageUrl:varchar().default(''),
   userEmail:varchar('userEmail').references(()=>userTable.email).notNull()
})

export const dsaPreferenceTable = pgTable("dsaPreference", {
  id: serial("id").primaryKey(),
  userEmail: varchar("userEmail", { length: 255 }).references(() => userTable.email).notNull(),
  userName: varchar("userName", { length: 255 }),
  topics: json("topics").notNull(), // Array of selected topics
  frequency: varchar("frequency", { length: 50 }).notNull(), // "daily" or "weekly"
  sendTime: varchar("sendTime", { length: 10 }).notNull(), // "07:00", "19:00", etc.
  startDate: varchar("startDate", { length: 20 }).notNull(),
  endDate: varchar("endDate", { length: 20 }).notNull(),
  isActive: boolean("isActive").default(true),
  lastSentDate: varchar("lastSentDate", { length: 20 }),
  createdAt: varchar("createdAt"),
});
export const enrollCourseTable = pgTable("enrollCourse", {
  id: serial("id").primaryKey(),
  cid: varchar("cid", { length: 255 }).references(() => coursesTable.cid),
  userEmail: varchar("userEmail", { length: 255 }).references(() => userTable.email),
  completedChapters: json("completedChapters"),
});
