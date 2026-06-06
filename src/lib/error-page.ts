export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>NirmanEdge — Something went wrong</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap');
      body { font: 15px/1.5 'Space Grotesk', system-ui, sans-serif; background: #000; color: #fff; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      .logo { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.03em; margin-bottom: 2rem; }
      .logo span { color: #0064B4; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #6b7280; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1.25rem; border-radius: 9999px; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #0064B4; color: #fff; }
      .secondary { background: transparent; color: #fff; border-color: #333; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="logo">Nirman<span>Edge</span></div>
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
