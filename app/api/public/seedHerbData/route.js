import { initSequelize, model } from "@/models";
import { diseases, herbs } from "./seedData";

export async function GET(request) {
  let result = "Failed";

  await initSequelize();

  try {
    console.log('data seeding....');

    herbs.forEach(async (herb) => {
        await model.Herb.create(herb);
    })
    
    diseases.forEach(async (disease) => {
      let created = await model.Disease.create(disease);

      disease.diseaseTreatments.forEach(async (treatement) => {
          await model.DiseaseTreatment.create({...treatement, DiseaseId: created.id});
      })

      disease.diseaseSymptoms.forEach(async (symptom) => {
        await model.DiseaseSymptoms.create({...symptom, DiseaseId: created.id});
    })
  })

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