import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

// Health check endpoint
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// For development, we don't need complex routing as Vite handles static files
// In production, the build process will handle static file serving
app.get('*', (c) => {
  return c.text('OK');
});

export default app;
