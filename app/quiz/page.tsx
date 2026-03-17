'use client';

import { useState } from 'react';
import { MobileNav } from '@/components/mobile-nav';
import { submitAnswer } from '@/lib/actions';

const options = ['Нічого, бо в неї був ще один чоловік', 'Охрестила Русь', 'Послала голубів і спалила село', 'Відсвяткувала, бо сама давно те вбивство планувала'];

export default function QuizPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<{ isCorrect: boolean; message: string } | null>(null);

  return (
    <main className="app-shell">
      <h1 className="preview-title">Екран питання</h1>

      <section className="phone-screen" style={{ minHeight: 760 }}>
        <div className="quiz-bg" />

        <div className="quiz-content">
          <div className="status-bar">9:41</div>
          <div className="top-row">
            <span className="pill" style={{ paddingInline: 16 }}>✕</span>
            <span className="pill locked">1/4</span>
          </div>

          <div style={{ marginTop: 28 }}>
            <span className="bubble">Що зробила княгиня Ольга?</span>
          </div>

          <div className="quiz-options">
            {options.map((option) => (
              <button key={option} className={`quiz-option ${selected === option ? 'active' : ''}`} onClick={() => setSelected(option)}>
                {option}
              </button>
            ))}
          </div>

          <button
            className="btn btn-yellow"
            style={{ marginTop: 12 }}
            onClick={async () => {
              if (!selected) return;
              const response = await submitAnswer(selected, 'Охрестила Русь');
              setResult(response);
            }}
          >
            Обрати
          </button>

          <div style={{ marginTop: 22, color: '#fff', fontSize: 18 }}>{result ? result.message : 'Підказка: обери відповідь зі скріну 😉'}</div>
        </div>
      </section>

      <MobileNav />
    </main>
  );
}
