import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800">
      <header className="text-center py-10 bg-pink-100">
        <img src="b2.gif" alt="Bhawna Logo" className="mx-auto w-32 rounded-full shadow-md mb-4" />
        <h1 className="text-4xl font-bold text-pink-600">Welcome to Bhawna Creatives</h1>
        <p className="text-lg mt-2">Animation ✦ Illustration ✦ Aesthetics</p>
      </header>

      <nav className="flex flex-wrap justify-center gap-4 bg-pink-200 py-4 shadow-sm">
        {['Welcome', 'YouTube', 'Projects', 'Illustrations', 'Services', 'Contact'].map((section) => (
          <a key={section} href={#${section.toLowerCase()}} className="px-5 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 font-semibold">
            {section}
          </a>
        ))}
      </nav>

      <section id="welcome" className="px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">🌸 Welcome Video
        </h2>
        <video controls autoPlay muted loop className="mx-auto rounded-xl max-w-xl shadow-lg">
          <source src="b2.mp4" type="video/mp4" />
          <p>Your browser does not support the video tag.</p>
        </video>
      </section>

      <section id="youtube" className="px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">📺 Visit My YouTube Channel
        </h2>
        <a
          href="https://www.youtube.com/@Asmrbabe12"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full shadow hover:bg-pink-700"
        >
          Go to YouTube
        </a>
      </section>

      <section id="projects" className="px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">🎮 Featured Animation Project
        </h2>
        <video controls className="mx-auto rounded-xl max-w-xl shadow-lg">
          <source src="b2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section id="illustrations" className="px-4 py-12">
        <h2 className="text-2xl font-bold text-pink-500 text-center mb-8">🖌 Illustrations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((img) => (
            <img
              key={img}
              src="b2.gif"
              alt={Illustration ${img}}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      <section id="services" className="bg-pink-100 px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-pink-500 mb-6">💖 Services & Cost
        </h2>
        <ul className="space-y-3 text-lg">
          <li>✨ 2D Animation Edits – ₹800 per minute with 1 revision</li>
          <li>✨ 2D Animation Edits – ₹1000 per minute with 2 revisions</li>
          <li>🎨 Character Illustration – ₹200 per character</li>
          <li>🎮 Infographic Edits – ₹400 per minute</li>
        </ul>
        <a
          href="https://wa.me/919263300290"
          className="inline-block bg-pink-600 text-white px-6 py-3 mt-6 rounded-full shadow hover:bg-pink-700"
        >
          Book Your Edit on WhatsApp
        </a>
      </section>

      <footer id="contact" className="text-center py-10 bg-pink-100 text-sm text-gray-700">
        <p>📧 bhartibhawna4488@example.com |{' '}
          <a href="https://www.behance.net/bhawnabharti48" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">
            Behance
          </a>
        </p>
        <p className="mt-2">© 2025 Bhawna Creatives</p>
      </footer>
    </main>
  );
}
