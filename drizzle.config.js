import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
    // Use the same DATABASE_URL you configured in your .env (Neon URL)
    url: process.env.DATABASE_URL ?? "",
  },
});