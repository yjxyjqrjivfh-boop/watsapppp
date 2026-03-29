'use client';

import { useState } from 'react';
import Link from 'next/link';

const slides = [
  {
    title: 'Hi Story!',
    text: 'Цей додаток допоможе дізнатися історію України та підготуватись до ЗНО/НМТ.',
    emoji: '📚'
  },
  {
    title: 'Історичні Постаті',
    text: 'Ти познайомишся з постатями та їхнім внеском в історію України.',
    emoji: '🧙'
  },
  {
    title: "Пам'ятки культури",
    text: 'Розшириш свої знання пам’ятками культури та архітектури.',
    emoji: '🏛️'
  }
];

export default function OnboardingPage() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <main className="app-shell">
      <h1 className="section-title">2) Онбординг</h1>
      <section className="phone">
        <div className="status">9:41</div>
        <div className="onboard-top">
          <div style={{ fontSize: 120 }}>{slide.emoji}</div>
        </div>

        <h2 style={{ textAlign: 'center', margin: 0, fontSize: 32 }}>{slide.title}</h2>
        <p style={{ textAlign: 'center', color: '#5c5d63', fontSize: 18, lineHeight: 1.25 }}>{slide.text}</p>

        <div className="dots">
          {slides.map((_, i) => (
            <span key={i} className={`dot ${i === index ? 'active' : ''}`} />
          ))}
        </div>

        <div className="row-between" style={{ position: 'absolute', left: 16, right: 16, bottom: 20 }}>
          <Link href="/login" style={{ fontSize: 20, color: '#55565e' }}>Пропустити</Link>
          {index < slides.length - 1 ? (
            <button
              onClick={() => setIndex((v) => v + 1)}
              style={{ border: 0, background: 'none', fontSize: 20, color: '#55565e', cursor: 'pointer' }}
            >
              Далі
            </button>
          ) : (
            <Link href="/login" style={{ fontSize: 20, color: '#55565e' }}>Далі</Link>
          )}
        </div>
      </section>
    </main>
  );
}
