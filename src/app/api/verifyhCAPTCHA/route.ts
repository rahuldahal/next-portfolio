export async function POST(req: Request) {
  const { token } = await req.json();
  const secret = process.env.HCAPTCHA_SECRET_KEY;

  const clientData = {
    secret,
    response: token,
  };

  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(clientData)) {
    formData.append(key, value);
  }

  const hResponse = await fetch('https://hcaptcha.com/siteverify', {
    method: 'POST',
    body: formData,
  });

  const data = await hResponse.json();

  if (data.success) {
    const message = JSON.stringify({ success: true });
    return new Response(message, {
      status: 200,
    });
  } else {
    const message = JSON.stringify({ 'error-codes': data['error-codes'] });
    return new Response(message, { status: 400 });
  }
}
