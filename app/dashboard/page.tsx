import Link from 'next/link';
import { TopNav } from '@/components/top-nav';

export default function DashboardPage() {
  return (
    <main>
      <TopNav />
      <section className="container stack" style={{ paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Главный экран</h2>
        <div className="grid">
          <article className="card">
            <p>🔥 Серия дней</p>
            <h3>4 дня</h3>
          </article>
          <article className="card">
            <p>⭐ XP</p>
            <h3>120 XP</h3>
          </article>
          <article className="card">
            <p>🏺 Артефакты</p>
            <h3>1 / 10</h3>
          </article>
        </div>
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
          <Link href="/quiz" className="btn">
            Начать тест
          </Link>
          <button className="btn secondary">Продолжить тему</button>
        </div>
      </section>
    </main>
  );
}
