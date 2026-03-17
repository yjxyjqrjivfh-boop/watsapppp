'use client';

import { useState } from 'react';
import { MobileNav } from '@/components/mobile-nav';
import { loginWithGoogle } from '@/lib/actions';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="app-shell">
      <h1 className="preview-title">Екран входу</h1>

      <section className="phone-screen">
        <div className="status-bar">9:41</div>
        <div style={{ marginTop: 150, textAlign: 'center' }}>
          <h2 className="title" style={{ fontSize: 80 }}>Hi Story!</h2>
          <p style={{ marginTop: 44, fontSize: 52, fontWeight: 700 }}>щоб продовжити, увійдіть в додаток</p>
        </div>

        <div className="auth-row">
          <button
            className="auth-btn"
            onClick={async () => {
              setLoading(true);
              await loginWithGoogle();
              setLoading(false);
            }}
            aria-label="Google login"
          >
            G
          </button>
          <button className="auth-btn" aria-label="Apple login"></button>
        </div>

        <p style={{ textAlign: 'center', color: '#9ec5f0', fontSize: 34, lineHeight: 1.2, marginTop: 34 }}>
          Продовжуючи, ви погоджуєтеся з умовами та політикою конфіденційності
        </p>
        {loading ? <p style={{ textAlign: 'center' }}>Підключаємо Google…</p> : null}
      </section>

      <MobileNav />
    </main>
  );
}
