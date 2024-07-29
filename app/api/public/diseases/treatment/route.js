import { model } from "@/models";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    console.log('Search Params', searchParams)
    const id = searchParams.get('dist');
    const result = await model.Disease.findOne({ where: { id }, include: [model.DiseaseTreatment, model.DiseaseSymptoms] });

    return new Response(JSON.stringify({ result: result }), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(request) {
    const reqObj = await request.json();
    const result = await model.DiseaseTreatment.findAll({ where: { DiseaseId: reqObj.diseaseId }, include: model.Disease });

    return new Response(JSON.stringify({ result: result }), {
        headers: { 'Content-Type': 'application/json' },
    });
}


export const dynamic = 'force-dynamic'