export async function GET(request) {
    return new Response(JSON.stringify({ result: result}), {
      headers: { 'Content-Type': 'application/json' },
    });
  }


// export const dynamic = 'force-dynamic'