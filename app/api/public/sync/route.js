import { initSequelize, model } from "@/models";

export async function GET(request) {
  let result = "Failed";

  await initSequelize();

  try {
    result = "Success";
  } catch (error) {
    result = error.toString()
  } finally {
    return new Response(JSON.stringify({ message: result }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export const dynamic = 'force-dynamic'