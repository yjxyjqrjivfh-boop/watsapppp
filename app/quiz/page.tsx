'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

const frames = [
  'Чули що сталось? Ігоря вбили!',
  'Це триндець! Я маю вирішити що тепер робити!',
  'Княгиня Ольга думає над помстою…',
  'Час відповісти на питання 👇'
];

const options = ['Нічого, бо в неї був ще один чоловік', 'Охрестила Русь', 'Послала голубів і спалила село', 'Відсвяткувала, бо сама давно те вбивство планувала'];

export default function QuizPage() {
  const [frame, setFrame] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (frame >= frames.length - 1) return;
    const t = setTimeout(() => setFrame((f) => f + 1), 1500);
    return () => clearTimeout(t);
  }, [frame]);

  const progress = useMemo(() => `${Math.min(frame + 1, 4)}/4`, [frame]);

  const questionVisible = frame >= 2;

  return (
    <main className="app-shell">
      <h1 className="section-title">6) Комикс + вопрос</h1>
      <section className="phone" style={{ paddingTop: 0 }}>
        <div className="comic-bg" />
        <div className="comic-character" />

        <div style={{ position: 'relative', zIndex: 2, paddingTop: 14 }}>
          <div className="status">9:41</div>
          <div className="row-between">
            <button className="pill yellow" style={{ border: 0 }}>✕</button>
            <span className="pill yellow">{progress}</span>
          </div>

          <div className="comic-bubble">{frames[frame]}</div>

          {questionVisible ? (
            <div className="question-wrap">
              <div className="pill yellow" style={{ width: 'fit-content' }}>Що зробила княгиня Ольга?</div>

              <div className="answers">
                {options.map((option) => (
                  <button key={option} onClick={() => setSelected(option)} className={`answer ${selected === option ? 'selected' : ''}`}>
                    {option}
                  </button>
                ))}
              </div>

              <button
                className="btn btn-yellow"
                style={{ marginTop: 10 }}
                onClick={() => {
                  if (!selected) return;
                  if (selected === 'Охрестила Русь') {
                    router.push('/correct');
                  } else {
                    router.push('/wrong');
                  }
                }}
              >
                Обрати
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
