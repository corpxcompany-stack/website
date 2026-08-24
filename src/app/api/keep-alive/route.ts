import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  // Optional: Verify Vercel Cron Secret for security
  const authHeader = request.headers.get("authorization");
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // Run a lightweight read query to register activity on the database
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("id")
    .limit(1);

  if (error) {
    console.error("[cron] Keep-alive query failed:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, timestamp: new Date().toISOString() });
}