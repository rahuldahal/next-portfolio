export async function POST(req: Request) {
  const { token } = await req.json();

  const hResponse = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      response: token,
      secret: process.env.HCAPTCHA_SECRET_KEY,
    }),
  });

  const data = await hResponse.json();

  if (data.success) {
    const message = JSON.stringify({ verified: true });
    return new Response(message, {
      status: 200,
    });
  } else {
    const message = JSON.stringify({ 'error-codes': data['error-codes'] });
    return new Response(message, { status: 400 });
  }
}
