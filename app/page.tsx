import Link from 'next/link';
import { TopNav } from '@/components/top-nav';

export default function HomePage() {
  return (
    <main>
      <TopNav />
      <section className="container" style={{ padding: '2rem 0 3rem' }}>
        <div className="card stack" style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ margin: 0, color: '#8ea5de' }}>Hi History</p>
          <h1 style={{ margin: 0 }}>Подготовка к экзамену через игровые квизы</h1>
          <p style={{ margin: 0, color: '#a8b3d1' }}>
            Mobile-first интерфейс по твоему сценарию: регистрация → дашборд → вопросы → награды.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
            <Link href="/login" className="btn">
              Начать экзамен
            </Link>
            <Link href="/dashboard" className="btn secondary">
              Демо главного экрана
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
