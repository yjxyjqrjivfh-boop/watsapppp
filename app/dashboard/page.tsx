import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

const levels = [
  { title: 'Русь - Україна', count: '24 питання', open: true },
  { title: 'Галицько - Волинська держава', count: '24 питання', open: true },
  { title: 'Друга Половина XVI ст.', count: '24 питання', open: false },
  { title: 'Друга Половина XVI ст.', count: '24 питання', open: false }
];

export default function DashboardPage() {
  return (
    <main className="app-shell">
      <h1 className="preview-title">Екран вибору рівня</h1>

      <section className="phone-screen" style={{ minHeight: 680 }}>
        <div className="status-bar">9:41</div>
        <div className="top-row">
          <h2 style={{ margin: 0, fontSize: 42 }}>Обери рівень</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <span className="pill" style={{ paddingInline: 12 }}>+3</span>
            <span className="pill locked">👤</span>
          </div>
        </div>

        <div className="level-list">
          {levels.map((level, idx) => (
            <article key={`${level.title}-${idx}`} className={`level-card ${level.open ? '' : 'locked'}`}>
              <div>
                <h3 style={{ margin: 0, fontSize: 36, maxWidth: 450 }}>{level.title}</h3>
                <p style={{ margin: '10px 0 0', color: '#666873', fontSize: 30 }}>{level.count}</p>
              </div>
              <Link href="/quiz" className={`pill ${level.open ? '' : 'locked'}`}>
                {level.open ? 'Перейти' : 'Відкрити 🔒'}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <MobileNav />
    </main>
  );
}
