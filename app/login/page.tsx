'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MobileNav } from '@/components/mobile-nav';
import { loginWithGoogle } from '@/lib/actions';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="logo">🏛 Hi<span>History</span></div>
        <span style={{ color: '#ccb796', fontSize: 13 }}>Шаг 1 / 5</span>
      </header>

      <section className="card hero">
        <div style={{ display: 'grid', gap: 14 }}>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 38px)' }}>Вход в аккаунт</h1>
          <p>Авторизация через Google + создание профиля в Supabase: XP, серия дней, дата регистрации.</p>

          <button
            className="btn btn-primary"
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              await loginWithGoogle();
              setLoading(false);
            }}
          >
            {loading ? 'Подключаем...' : 'Войти через Google'}
          </button>
        </div>

        <Image src="/images/quiz-card.svg" alt="Login illustration" width={900} height={500} className="screen-img" />
      </section>

      <MobileNav />
    </main>
  );
}
