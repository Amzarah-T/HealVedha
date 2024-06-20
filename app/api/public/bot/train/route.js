import { NlpManager } from "node-nlp";

export async function POST(request) {
    const bodyContent = JSON.parse(JSON.stringify(await request.json()))
    const model = 'healWedhaModel';
    const trainData = Object.values(bodyContent.trainData);
    const manager = new NlpManager({ languages: ['en'], forceNER: true });

    for (const dt of trainData) {
        let answerConfigs = undefined;

        if (dt.action) {
            answerConfigs = { action: dt.action.name, params: dt.action.params };
        }

        for (const que of dt.questions) {
            await manager.addDocument('en', que.en, dt.intent);
            await manager.addDocument('en', que.ta, dt.intent);
            await manager.addDocument('en', que.sn, dt.intent);
        }

        for (const ans of dt.answers) {
            await manager.addAnswer('en', dt.intent, `{"en": "${ans.en}", "ta": "${ans.ta}", "sn": "${ans.sn}"}`, answerConfigs);
            // await manager.addAnswer('ta', dt.intent, `{"en": "${ans.en}", "ta": "${ans.ta}", "sn": "${ans.sn}"}`, answerConfigs);
            // await manager.addAnswer('sn', dt.intent, `{"en": "${ans.en}", "ta": "${ans.ta}", "sn": "${ans.sn}"}`, answerConfigs);
        }
    }

    await manager.train();
    manager.save(`./nlpModels/${model}.nlp`);

    return new Response(JSON.stringify({ message: "Training Complete!", ...trainData }), {
        headers: { 'Content-Type': 'application/json' },
    });
}


export const dynamic = 'force-dynamic'