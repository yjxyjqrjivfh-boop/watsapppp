import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

export default function DashboardPage() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="logo">Hi<span>History</span></div>
        <span style={{ color: '#a9b0d0' }}>Тема: История Украины</span>
      </header>

      <section className="card" style={{ display: 'grid', gap: 14 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(24px, 4vw, 36px)' }}>Твой прогресс</h1>
        <div className="stats">
          <article className="stat-item">
            <p>🔥 Серия</p>
            <h3>7 дней</h3>
          </article>
          <article className="stat-item">
            <p>⭐ XP</p>
            <h3>240</h3>
          </article>
          <article className="stat-item">
            <p>🏺 Артефакты</p>
            <h3>3 / 12</h3>
          </article>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link href="/quiz" className="btn btn-primary">
            Начать тест
          </Link>
          <button className="btn btn-soft">Продолжить тему</button>
        </div>
      </section>

      <MobileNav />
    </main>
  );
}
