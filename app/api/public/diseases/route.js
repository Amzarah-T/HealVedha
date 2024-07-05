import { model } from "@/models";

export async function GET(request) {
  const result = await model.Disease.findAll({ include: model.DiseaseTreatment });
  
    return new Response(JSON.stringify({ result: result}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }


export const dynamic = 'force-dynamic'