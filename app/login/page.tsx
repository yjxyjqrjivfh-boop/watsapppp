'use client';

import { useState } from 'react';
import { TopNav } from '@/components/top-nav';
import { loginWithGoogle } from '@/lib/actions';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <main>
      <TopNav />
      <section className="container" style={{ paddingBottom: '2rem' }}>
        <div className="card stack" style={{ maxWidth: 520, margin: '0 auto' }}>
          <h2 style={{ margin: 0 }}>Вход через Google</h2>
          <p style={{ margin: 0, color: '#a8b3d1' }}>
            После авторизации создаём пользователя в Supabase и открываем Dashboard.
          </p>
          <button
            className="btn"
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              await loginWithGoogle();
              setLoading(false);
            }}
          >
            {loading ? 'Подключаем Google…' : 'Войти через Google'}
          </button>
        </div>
      </section>
    </main>
  );
}
