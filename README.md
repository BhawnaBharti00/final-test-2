<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bhawna Creatives</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background: #fff0f5;
      color: #333;
    }
    header {
      text-align: center;
      background: #ffe4e6;
      padding: 3rem 1rem;
    }
    header img {
      width: 130px;
      height: 130px;
      border-radius: 20px;
      border: 4px solid #f9a8d4;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      object-fit: cover;
    }
    header h1 {
      color: #db2777;
      font-size: 2.5rem;
      margin: 1rem 0 0.5rem;
    }
    header p {
      max-width: 600px;
      margin: 0 auto;
      font-size: 1.1rem;
      color: #555;
    }
    nav {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      background: #fbcfe8;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    nav a {
      background: #ec4899;
      color: white;
      padding: 0.6rem 1.2rem;
      border-radius: 999px;
      text-decoration: none;
      font-weight: 600;
    }
    nav a:hover {
      background: #db2777;
    }
    section {
      padding: 3rem 1rem;
      text-align: center;
    }
    h2 {
      font-size: 1.8rem;
      color: #db2777;
      margin-bottom: 1.5rem;
    }
    .gallery img {
      width: 100%;
      max-width: 300px;
      border-radius: 1rem;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    .gallery img:hover {
      transform: scale(1.05);
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
    .button {
      display: inline-block;
      background: #db2777;
      color: white;
      padding: 0.8rem 1.5rem;
      border-radius: 999px;
      font-weight: 600;
      text-decoration: none;
      margin-top: 1rem;
    }
    .button:hover {
      background: #be185d;
    }
    ul {
      list-style: none;
      padding: 0;
      font-size: 1.1rem;
    }
    ul li {
      margin-bottom: 0.8rem;
    }
    textarea {
      width: 100%;
      max-width: 600px;
      padding: 1rem;
      border-radius: 1rem;
      border: 1px solid #f9a8d4;
      margin-bottom: 1rem;
      font-family: 'Inter', sans-serif;
    }
    footer {
      text-align: center;
      padding: 2rem 1rem;
      background: #ffe4e6;
      color: #666;
      font-size: 0.9rem;
    }
    footer a {
      color: #db2777;
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <header>
    <img src="b2.gif" alt="Bhawna's animated logo" />
    <h1>Welcome to Bhawna Creatives</h1>
    <p>
      Where imagination finds its wings —<br>
      animations that soothe your soul,<br>
      illustrations that tell your story,<br>
      and visuals that connect emotions.
    </p>
  </header>

  <nav aria-label="Main Navigation">
    <a href="#animation">Animation</a>
    <a href="#illustration">Illustration</a>
    <a href="#collaboration">Collaboration</a>
    <a href="#bookedits">Book Edits</a>
  </nav>

  <section id="animation">
    <h2>🌟 Featured Animation</h2>
    <video controls width="80%" style="max-width:600px; border-radius: 1rem; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
      <source src="b2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </section>

  <section id="illustration">
    <h2>🖌 Illustrations</h2>
    <div class="gallery">
      <img src="b2.gif" alt="Whimsical character art by Bhawna" />
      <img src="b2.gif" alt="Emotional animation frame" />
      <img src="b2.gif" alt="Fantasy illustration concept" />
    </div>
  </section>

  <section id="collaboration">
    <h2>🤝 Collaborate With Me</h2>
    <p>
      Open to animation projects, creative editing, and soulful collabs.<br>
      Let's co-create magic!
    </p>
    <a class="button" href="https://wa.me/919263300290" target="_blank" rel="noopener">Connect on WhatsApp</a>
  </section>

  <section id="bookedits">
    <h2>💖 Services & Cost</h2>
    <ul>
      <li>✨ 2D Animation Edits – ₹800 per minute with 1 revision</li>
      <li>✨ 2D Animation Edits – ₹1000 per minute with 2 revisions</li>
      <li>🎨 Character Illustration – ₹200 per character</li>
      <li>🎮 Infographic Edits – ₹400 per minute</li>
    </ul>
    <a class="button" href="https://wa.me/919263300290" target="_blank" rel="noopener">Book Your Edit on WhatsApp</a>
  </section>

  <section id="feedback">
    <h2>💬 Feedback & Comments</h2>
    <form method="POST" action="#">
      <textarea rows="4" placeholder="Leave a comment or feedback..."></textarea>
      <br>
      <button type="submit" class="button">Submit Feedback</button>
    </form>
  </section>

  <footer>
    <p>📧 bhartibhawna4488@example.com | 
      <a href="https://www.behance.net/bhawnabharti48" target="_blank" rel="noopener">Behance</a>
    </p>
    <p>© 2025 Bhawna Creatives</p>
  </footer>

</body>
</html>
