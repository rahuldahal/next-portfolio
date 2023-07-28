export async function POST(req: Request): Promise<Response> {
  const { documentId, email, fullName, message } = await req.json();

  const {
    APPWRITE_API_KEY,
    APPWRITE_API_URL,
    APPWRITE_PROJECT_ID,
    APPWRITE_DB_ID,
    APPWRITE_COLLECTION_ID,
  } = process.env;

  const endpoint = `/databases/${APPWRITE_DB_ID}/collections/${APPWRITE_COLLECTION_ID}/documents`;

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('X-Appwrite-Project', APPWRITE_PROJECT_ID);
  headers.append('X-Appwrite-Key', APPWRITE_API_KEY);

  const requestBody = JSON.stringify({
    documentId,
    data: {
      email,
      fullName,
      message,
    },
  });

  try {
    const responseFromAppwrite = await fetch(`${APPWRITE_API_URL}${endpoint}`, {
      method: 'POST',
      headers,
      body: requestBody,
    });

    if (!responseFromAppwrite.ok) {
      throw new Error('Network responseFromAppwrite was not ok.');
    }

    const { $id, $createdAt } = await responseFromAppwrite.json();
    console.log(
      `Document added successfully with id: ${$id} on ${new Date(
        $createdAt
      ).toLocaleDateString()}`
    );

    const responseToClient = JSON.stringify({ success: true });
    return new Response(responseToClient, { status: 201 });
  } catch (error) {
    console.error('Error updating document:', error);

    const responseToClient = JSON.stringify({ success: false });
    return new Response(responseToClient, { status: 500 });
  }
}
