<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Home – Bhawna Creatives</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --pink: #ffe4e6;
      --rose: #fbcfe8;
      --hotpink: #db2777;
      --lavender: #e0bbff;
    }
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background: var(--pink);
      color: #333;
    }
    header {
      text-align: center;
      background: var(--lavender);
      padding: 2rem;
    }
    header h1 {
      font-size: 2.4rem;
      color: var(--hotpink);
    }
    nav {
      text-align: center;
      background: var(--rose);
      padding: 1rem;
    }
    nav a {
      margin: 0 1rem;
      color: var(--hotpink);
      text-decoration: none;
      font-weight: bold;
    }
    nav a:hover {
      text-decoration: underline;
    }
    section {
      padding: 2rem 1rem;
      max-width: 900px;
      margin: 0 auto;
    }
    .button-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .btn {
      display: block;
      text-align: center;
      padding: 1rem;
      background: var(--hotpink);
      color: white;
      border-radius: 1rem;
      font-weight: bold;
      text-decoration: none;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .btn:hover {
      background: #be185d;
    }
    video {
      width: 100%;
      border-radius: 1rem;
      margin: 1.5rem 0;
    }
    .youtube {
      text-align: center;
      margin-bottom: 2rem;
    }
    .youtube a {
      display: inline-block;
      background: #ff005c;
      color: white;
      padding: 0.7rem 1.5rem;
      border-radius: 50px;
      font-weight: bold;
      text-decoration: none;
      box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    }
    .youtube a:hover {
      background: #c70046;
    }
    .about {
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }
    footer {
      text-align: center;
      background: var(--lavender);
      padding: 2rem;
      color: #666;
    }
  </style>
</head>
<body>

  <header>
    <h1>🎨 Bhawna Creatives</h1>
    <p>Welcome to a world of animation, imagination and inspiration!</p>
  </header>

  <nav>
    <a href="#services">💼 Services</a>
    <a href="#feedback">📝 Feedback</a>
  </nav>

  <section>
    <div class="button-grid">
      <a class="btn" href="animation.html">🎬 Animation</a>
      <a class="btn" href="illustration.html">🎨 Illustration</a>
      <a class="btn" href="#services">💼 Services</a>
      <a class="btn" href="#feedback">📝 Feedback</a>
    </div>

    <h2>📺 Welcome Video</h2>
    <video controls>
      <source src="b1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>

    <div class="youtube">
      <a href="https://youtube.com/@yourchannel" target="_blank">📺 Visit My YouTube Channel</a>
    </div>

    <div class="about">
      <h2>🌸 About Me</h2>
      <p>I’m learning to grow my creativity and skills in animation and illustration, exploring new ways to bring cozy, dreamy visuals to life.</p>
    </div>

    <div id="services">
      <h2>💼 Services & Cost</h2>
      <p>Offering custom animation edits, illustrations, and video templates. Reach out for personalized pricing based on your needs.</p>
      <p><strong>Book via email:</strong> <a href="mailto:bhawnacreatives@email.com">bhawnacreatives@email.com</a></p>
    </div>

    <div id="feedback">
      <h2>📝 Feedback</h2>
      <p>Your feedback helps me grow! Share your thoughts, suggestions, or project experience with Bhawna Creatives.</p>
      <!-- Feedback form or link can be added here -->
    </div>

  </section>

  <footer>
    <p>© 2025 Bhawna Creatives | Created with love and pastel pink vibes ✨</p>
  </footer>

</body>
</html>
