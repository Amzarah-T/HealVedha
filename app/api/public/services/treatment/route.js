import { model } from "@/models";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    console.log('Search Params', searchParams)
    const id = searchParams.get('dist');
    const result = await model.Service.findOne({ where: { id }, include: model.ServiceTreatment });

    return new Response(JSON.stringify({ result: result }), {
        headers: { 'Content-Type': 'application/json' },
    });
}


export const dynamic = 'force-dynamic'