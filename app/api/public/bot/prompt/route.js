import { NlpManager } from "node-nlp";

export async function POST(request) {
    const bodyContent = JSON.parse(JSON.stringify(await request.json()))
    const model = 'healWedhaModel';
    let prompt = bodyContent.prompt;
    let showRaw = bodyContent.showRaw;

    let newManager = new NlpManager();
    newManager.load('./nlpModels/' + model + '.nlp');

    const response = await newManager.process('en', prompt);
    let defaultMessage = { en: "Sorry I can't process your request. Please ask me questions related to Symptoms!" };
    let message = defaultMessage;
    let dataNotFound = false;

    try {
        console.log(response.answer)
        message = JSON.parse(response.answer);
    } catch (err) {
        dataNotFound = true;
        message = defaultMessage;
    }

    if (response.answers.length === 0 || dataNotFound) {
        return new Response(JSON.stringify({ message: defaultMessage, question: prompt, trainMe: true }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } else {
        let extended = response.answers[0].opts;

        return new Response(JSON.stringify({
            result: {
                message,
                extended,
            },
            rawData: showRaw && showRaw === '1' ? response : -1
        }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }
}


export const dynamic = 'force-dynamic'