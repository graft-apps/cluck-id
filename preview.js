const http = require('http');
const PORT = process.env.PORT || 4001;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Chicken Cluck Identifier</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #fef9e7 0%, #fdebd0 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2c3e50;
  }
  .app { text-align: center; max-width: 480px; width: 100%; padding: 40px 20px; }
  .logo { font-size: 64px; margin-bottom: 8px; }
  h1 { font-size: 28px; font-weight: 700; margin-bottom: 4px; }
  .subtitle { color: #7f8c8d; font-size: 14px; margin-bottom: 32px; }
  .result {
    background: #fff;
    border-radius: 16px;
    padding: 28px;
    margin-top: 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    text-align: center;
  }
  .result-emoji { font-size: 56px; margin-bottom: 12px; }
  .result-breed { font-size: 22px; font-weight: 700; color: #d35400; }
  .result-confidence {
    display: inline-block;
    margin-top: 6px;
    padding: 4px 12px;
    background: #eafaf1;
    color: #27ae60;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 600;
  }
  .trait {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 13px;
  }
  .trait-label { width: 80px; color: #7f8c8d; text-align: right; }
  .trait-track {
    flex: 1; height: 8px; background: #f0e6d3; border-radius: 4px; overflow: hidden;
  }
  .trait-fill { height: 100%; border-radius: 4px; background: #e67e22; }
  .trait-bar-wrap { margin-top: 16px; text-align: left; }
  .result-facts {
    margin-top: 16px; text-align: left; font-size: 14px; line-height: 1.6; color: #555;
  }
  .result-facts li { margin-bottom: 4px; }
  .try-again {
    margin-top: 20px; padding: 10px 24px; background: #e67e22; color: #fff;
    border: none; border-radius: 8px; font-size: 14px; cursor: pointer;
  }
</style>
</head>
<body>
<div class="app">
  <div class="logo">&#x1F414;</div>
  <h1>Cluck ID</h1>
  <p class="subtitle">Identify chicken breeds by their cluck</p>

  <div class="result">
    <div class="result-emoji">&#x1F413;</div>
    <div class="result-breed">Leghorn</div>
    <div class="result-confidence">89% match</div>
    <div class="trait-bar-wrap">
      <div class="trait"><span class="trait-label">Loudness</span><div class="trait-track"><div class="trait-fill" style="width:55%"></div></div></div>
      <div class="trait"><span class="trait-label">Pitch</span><div class="trait-track"><div class="trait-fill" style="width:90%"></div></div></div>
      <div class="trait"><span class="trait-label">Tempo</span><div class="trait-track"><div class="trait-fill" style="width:85%"></div></div></div>
      <div class="trait"><span class="trait-label">Sass</span><div class="trait-track"><div class="trait-fill" style="width:95%"></div></div></div>
    </div>
    <ul class="result-facts">
      <li>The breed behind Foghorn Leghorn</li>
      <li>High-pitched, rapid clucking style</li>
      <li>Originated in Tuscany, Italy</li>
    </ul>
    <button class="try-again">Try Another Cluck</button>
  </div>
</div>
</body>
</html>`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(PORT, () => {
  console.log('Preview running at http://localhost:' + PORT);
});
