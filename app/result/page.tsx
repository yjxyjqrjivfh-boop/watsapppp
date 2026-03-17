import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

export default function ResultPage() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="logo">🏛 Hi<span>History</span></div>
        <span className="badge">Тема завершена</span>
      </header>

      <section className="card" style={{ display: 'grid', gap: 12 }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(24px, 4vw, 34px)' }}>Результат</h1>

        <div className="stats">
          <article className="stat-item">
            <p>Правильных ответов</p>
            <h3>3 / 4</h3>
          </article>
          <article className="stat-item">
            <p>XP</p>
            <h3>+30</h3>
          </article>
          <article className="stat-item">
            <p>Награда</p>
            <h3>Тризуб</h3>
          </article>
        </div>

        <div className="actions">
          <Link href="/dashboard" className="btn btn-primary">
            На главный экран
          </Link>
          <Link href="/quiz" className="btn btn-soft">
            Пройти ещё раз
          </Link>
        </div>
      </section>

      <MobileNav />
    </main>
  );
}
