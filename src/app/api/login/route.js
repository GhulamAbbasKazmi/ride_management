export async function POST(request) {
    const { email, password } = await request.json();
    if (email === 'test@example.com' && password === 'password') {
      return new Response(
        JSON.stringify({
          token: 'mock-jwt-token',
          user: { id: 1, email, name: 'John Doe' },
        }),
        { status: 200 }
      );
    }
    return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
  }
  