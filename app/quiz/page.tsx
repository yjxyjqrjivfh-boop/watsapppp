'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MobileNav } from '@/components/mobile-nav';
import { submitAnswer } from '@/lib/actions';

const options = ['Ярослав Мудрый', 'Владимир Великий', 'Княгиня Ольга', 'Богдан Хмельницкий'];

export default function QuizPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<{ isCorrect: boolean; message: string } | null>(null);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="logo">🏛 Hi<span>History</span></div>
        <span style={{ color: '#ccb796', fontSize: 13 }}>Вопрос 1 / 4</span>
      </header>

      <section className="card" style={{ display: 'grid', gap: 14 }}>
        <Image src="/images/quiz-card.svg" alt="Вопрос" width={900} height={500} className="screen-img" />
        <h2 style={{ margin: 0 }}>Кто построил Софийский собор в Киеве?</h2>

        <div className="quiz-options">
          {options.map((option) => (
            <button
              key={option}
              className={`quiz-option ${selected === option ? 'active' : ''}`}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="btn btn-primary"
          disabled={!selected}
          onClick={async () => {
            if (!selected) return;
            const response = await submitAnswer(selected, 'Ярослав Мудрый');
            setResult(response);
          }}
        >
          Ответить
        </button>

        {result ? <p className={result.isCorrect ? 'result-ok' : 'result-bad'}>{result.message}</p> : null}
      </section>

      <MobileNav />
    </main>
  );
}
