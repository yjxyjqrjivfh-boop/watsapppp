'use client';

import { useState } from 'react';
import { TopNav } from '@/components/top-nav';
import { submitAnswer } from '@/lib/actions';

const options = ['Ярослав Мудрый', 'Владимир Великий', 'Богдан Хмельницкий', 'Иван Мазепа'];

export default function QuizPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');

  return (
    <main>
      <TopNav />
      <section className="container stack" style={{ paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Тема: История Украины</h2>
        <article className="card stack">
          <p style={{ margin: 0, color: '#a8b3d1' }}>Вопрос:</p>
          <h3 style={{ margin: 0 }}>Кто построил Софийский собор в Киеве?</h3>
          <div className="grid">
            {options.map((option) => (
              <button key={option} className="btn secondary" onClick={() => setSelected(option)}>
                {option}
              </button>
            ))}
          </div>
          <button
            className="btn"
            disabled={!selected}
            onClick={async () => {
              if (!selected) return;
              const response = await submitAnswer(selected, 'Ярослав Мудрый');
              setResult(response.message);
            }}
          >
            Ответить
          </button>
          {result && <p style={{ margin: 0 }}>{result}</p>}
        </article>
      </section>
    </main>
  );
}
