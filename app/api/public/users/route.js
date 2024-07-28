import { model } from "@/models";

export async function GET(request) {
  const result = await model.User.findAll();
  
    return new Response(JSON.stringify({ result: result}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  export async function POST(request) {
    const formData = await request.json();

    const response = await model.User.create(formData);
    
      return new Response(JSON.stringify({ result: response}), {
        headers: { 'Content-Type': 'application/json' },
      });
    }


export const dynamic = 'force-dynamic'