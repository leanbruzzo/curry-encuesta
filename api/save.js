export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages, sessionId } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages requerido' });
  }

  const transcript = messages
    .map(m => `${m.role === 'assistant' ? 'Curry' : 'Usuario'}: ${m.content}`)
    .join('\n\n');

  const payload = {
    timestamp: new Date().toISOString(),
    sessionId: sessionId || 'sin-id',
    transcript
  };

  try {
    await fetch(process.env.GOOGLE_SHEET_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'No se pudo guardar la encuesta' });
  }
}
