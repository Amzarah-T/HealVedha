export async function GET(request) {
    return new Response(JSON.stringify({ result: request}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }


// export const dynamic = 'force-dynamic'