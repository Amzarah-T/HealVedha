import { model } from "@/models";

export async function GET(request) {
  const result = await model.Post.findAll({ include: model.User });
  
    return new Response(JSON.stringify({ result: result}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }