# Curry — Encuesta conversacional de mascotas

Encuesta conversacional con IA para investigación de mercado sobre alimentación de mascotas.

## Estructura

```
curry-encuesta/
├── api/
│   └── chat.js        # Backend serverless (protege la API key)
├── public/
│   └── index.html     # Frontend con la UI del chat
└── vercel.json        # Configuración de Vercel
```

## Deploy en Vercel

1. Subí esta carpeta a un repositorio de GitHub
2. Entrá a vercel.com y conectá el repo
3. Agregá la variable de entorno: `ANTHROPIC_API_KEY`
4. Deploy automático — listo

## Variable de entorno requerida

| Variable | Valor |
|---|---|
| `ANTHROPIC_API_KEY` | Tu API key de Anthropic (console.anthropic.com) |
