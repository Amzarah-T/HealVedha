import { initSequelize, model } from "@/models";
import { herbs } from "./seedData";

export async function GET(request) {
  let result = "Failed";

  await initSequelize();

  try {
    console.log('data seeding....');

    herbs.forEach(async (herb) => {
        await model.Herb.create(herb);
    })
    
  //   herbs.forEach(async (herb) => {
  //     let created = await model.Herb.create(herb);

  //     herb.serviceTreatments.forEach(async (treatement) => {
  //         await model.ServiceTreatment.create({...treatement, ServiceId: created.id});
  //     })
  // })

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