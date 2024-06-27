import { model } from "@/models";

export async function GET(request) {
  const result = await model.Service.findAll({ include: model.ServiceTreatment });
  
    return new Response(JSON.stringify({ result: result}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }


export const dynamic = 'force-dynamic'