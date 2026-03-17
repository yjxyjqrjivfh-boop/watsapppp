import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

export default function ResultPage() {
  return (
    <main className="app-shell">
      <h1 className="preview-title">Екран результату</h1>

      <section className="phone-screen">
        <div className="status-bar">9:41</div>

        <div style={{ textAlign: 'center', marginTop: 170 }}>
          <h2 className="title" style={{ fontSize: 68 }}>Ой...</h2>
          <p className="subtitle" style={{ fontSize: 32, lineHeight: 1.2 }}>На жаль, ви не пройшли розділ княгиня Ольга</p>
        </div>

        <div className="summary-card" style={{ marginTop: 48 }}>
          <div className="metric">
            <span>Всього запитань</span>
            <span>4</span>
          </div>
          <div className="metric warn">
            <span>Помилок</span>
            <span>3</span>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 12, marginTop: 36 }}>
          <Link href="/dashboard" className="btn btn-yellow">На головну</Link>
          <Link href="/quiz" className="btn btn-black">Пройти знову</Link>
        </div>
      </section>

      <MobileNav />
    </main>
  );
}
