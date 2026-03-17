import Image from 'next/image';
import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

export default function HomePage() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="logo">🏛 Hi<span>History</span></div>
        <span className="badge">MVP</span>
      </header>

      <section className="card hero">
        <div style={{ display: 'grid', gap: 14 }}>
          <p style={{ color: '#f8c15e', margin: 0, fontWeight: 700 }}>ИСТОРИЯ УКРАИНЫ • БЫСТРЫЙ СТАРТ</p>
          <h1>Подготовка к НМТ в формате коротких миссий</h1>
          <p>
            Экран построен в mobile-first стиле: крупные блоки, контрастные CTA, понятная структура и единый визуальный стиль
            для телефона и ноутбука.
          </p>
          <div className="actions">
            <Link href="/login" className="btn btn-primary">
              Начать экзамен
            </Link>
            <Link href="/dashboard" className="btn btn-soft">
              Посмотреть прогресс
            </Link>
          </div>
        </div>

        <Image src="/images/hero-figure.svg" alt="Исторический персонаж" width={700} height={470} className="screen-img" />
      </section>

      <MobileNav />
    </main>
  );
}
