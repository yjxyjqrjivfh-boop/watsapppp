'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [message, setMessage] = useState('');
  const [showStreak, setShowStreak] = useState(false);

  function greet(text: string) {
    setMessage(text);
    setShowStreak(true);
    setTimeout(() => setShowStreak(false), 2500);
  }

  return (
    <main className="app-shell">
      <h1 className="section-title">3) Авторизация (заглушка)</h1>
      <section className="phone">
        <div className="status">9:41</div>

        <div className="login-center">
          <h1>Hi Story!</h1>
          <p>щоб продовжити, увійдіть в додаток</p>
        </div>

        <div className="oauth">
          <button onClick={() => greet('Привет Ларс')}>G</button>
          <button onClick={() => greet('Привет Лекс')}></button>
        </div>

        {message ? <div className="flash-msg">{message}</div> : null}
        {showStreak ? <div className="streak">🔥 Серія: перший день у додатку</div> : null}

        <p style={{ textAlign: 'center', color: '#a8c8eb', fontSize: 28, marginTop: 26 }}>
          Продовжуючи, ви погоджуєтеся з умовами та політикою конфіденційності.
        </p>

        <div style={{ position: 'absolute', left: 16, right: 16, bottom: 18 }}>
          <Link href="/dashboard" className="btn btn-yellow">Увійти</Link>
        </div>
      </section>
    </main>
  );
}
