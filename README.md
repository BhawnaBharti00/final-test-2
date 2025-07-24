<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bhawna Creatives – Home</title>
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
      font-size: 2.2rem;
      color: var(--hotpink);
    }
    .nav-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
      margin: 2rem 0;
    }
    .nav-buttons a {
      background: var(--hotpink);
      color: white;
      padding: 1rem 2rem;
      border-radius: 999px;
      text-decoration: none;
      font-weight: bold;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .nav-buttons a:hover {
      background: #c0266b;
    }
    .video-section, .youtube-section, .about-section, .services-section, .book-section, .feedback-section {
      max-width: 800px;
      margin: 2rem auto;
      padding: 1rem;
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    h2 {
      color: var(--hotpink);
    }
    iframe {
      width: 100%;
      height: 400px;
      border: none;
      border-radius: 1rem;
    }
    .youtube-link a {
      display: inline-block;
      background: var(--rose);
      padding: 0.8rem 1.6rem;
      color: var(--hotpink);
      font-weight: bold;
      border-radius: 999px;
      text-decoration: none;
      margin-top: 1rem;
    }
    .youtube-link a:hover {
      background: var(--hotpink);
      color: white;
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
    <h1>🎨 Welcome to Bhawna Creatives</h1>
    <p>Bringing cozy stories and charming visuals to life ✨</p>
  </header>

  <div class="nav-buttons">
    <a href="animations.html">🎬 Animations</a>
    <a href="illustrations.html">🖌 Illustrations</a>
    <a href="services.html">💼 Services</a>
    <a href="feedback.html">💬 Feedback</a>
  </div>

  <section class="video-section">
    <h2>📺 Welcome Video – B1</h2>
    <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" title="Welcome Video B1" allowfullscreen></iframe>
  </section>

  <section class="youtube-section">
    <h2>📌 Visit My YouTube Channel</h2>
    <p class="youtube-link">
      <a href="https://youtube.com/@YOUR_CHANNEL" target="_blank">🌟 Watch More on YouTube</a>
    </p>
  </section>

  <section class="about-section">
    <h2>💡 About Me</h2>
    <p>I'm Bhawna, a self-taught creative learning to grow my animation and storytelling skills. Passionate about art, nature, and cozy vibes. 🌸</p>
  </section>

  <section class="services-section">
    <h2>💼 Services & Cost</h2>
    <ul>
      <li>Custom Animation: ₹1500+</li>
      <li>Wedding Highlight Videos: ₹2000+</li>
      <li>Illustration (Digital/Print): ₹1000+</li>
    </ul>
  </section>

  <section class="book-section">
    <h2>📩 Book Your Edit</h2>
    <p>Email me at <strong>bhawnacreatives@gmail.com</strong> to book your project!</p>
  </section>

  <section class="feedback-section">
    <h2>💬 Feedback</h2>
    <form action="mailto:bhawnacreatives@gmail.com" method="POST" enctype="text/plain">
      <label>Your Name:<br><input type="text" name="name" required></label><br><br>
      <label>Your Feedback:<br><textarea name="feedback" rows="4" required></textarea></label><br><br>
      <button type="submit">Send Feedback</button>
    </form>
  </section>

  <footer>
    <p>© 2025 Bhawna Creatives | Created with love and pastel pink vibes ✨</p>
  </footer>

</body>
</html>
