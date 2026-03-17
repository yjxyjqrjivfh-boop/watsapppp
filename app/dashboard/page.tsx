import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

export default function DashboardPage() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="logo">🏛 Hi<span>History</span></div>
        <span className="badge">Тема: Казаки</span>
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

        <div className="card" style={{ padding: 14, borderRadius: 18 }}>
          <p style={{ margin: 0, color: '#ccb796' }}>Сегодня открыто</p>
          <h3 style={{ margin: '6px 0 0' }}>Тема: Гетманщина и ключевые даты</h3>
        </div>

        <div className="actions">
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
