'use client';

import { useState } from 'react';
import Link from 'next/link';

type ModalType = 'logout' | 'delete' | null;

const levels = [
  { title: 'Русь - Україна', count: '24 питання', open: true },
  { title: 'Галицько - Волинська держава', count: '24 питання', open: true },
  { title: 'Друга Половина XVI ст.', count: '24 питання', open: false },
  { title: 'Друга Половина XVI ст.', count: '24 питання', open: false },
  { title: 'Друга Половина XVI ст.', count: '24 питання', open: false }
];

export default function DashboardPage() {
  const [modal, setModal] = useState<ModalType>(null);

  return (
    <main className="app-shell">
      <h1 className="section-title">4) Выбор темы + выход из профиля</h1>
      <section className="phone">
        <div className="status">9:41</div>

        <div className="row-between">
          <h2 style={{ margin: 0, fontSize: 44 }}>Обери рівень</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="pill">+3</span>
            <button className="pill yellow" onClick={() => setModal('logout')} style={{ border: 0, cursor: 'pointer' }}>👤</button>
          </div>
        </div>

        <div className="levels">
          {levels.map((level, i) => (
            <article className={`level ${level.open ? '' : 'locked'}`} key={`${level.title}-${i}`}>
              <div>
                <h3 style={{ margin: 0, fontSize: 36 }}>{level.title}</h3>
                <p style={{ margin: '8px 0 0', color: '#65666c', fontSize: 30 }}>{level.count}</p>
              </div>
              {level.open ? (
                <Link className="pill" href={i === 0 ? '/topic' : '/quiz'}>Перейти</Link>
              ) : (
                <span className="pill yellow">Відкрити 🔒</span>
              )}
            </article>
          ))}
        </div>

        <div className="bottom-nav">
          <span>↩️</span>
          <span style={{ background: 'var(--yellow)', borderRadius: '999px', padding: '10px 14px' }}>🏠</span>
          <button style={{ border: 0, background: 'none', cursor: 'pointer' }} onClick={() => setModal('delete')}>🗑️</button>
        </div>

        {modal ? (
          <div className="modal-overlay">
            <div className="modal">
              <h3>{modal === 'logout' ? 'Вийти з профілю' : 'Видалити акаунт'}</h3>
              <p>
                {modal === 'logout'
                  ? 'Ви точно хочете вийти з профілю?'
                  : 'Ви точно хочете видалити акаунт? Після видалення дані не можна буде відновити'}
              </p>
              <div className="stack">
                <button className="btn btn-yellow" onClick={() => setModal(null)}>{modal === 'logout' ? 'Вийти' : 'Видалити'}</button>
                <button className="btn btn-black" onClick={() => setModal(null)}>Ні</button>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}
