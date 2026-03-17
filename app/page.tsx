import Image from 'next/image';
import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

export default function HomePage() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="logo">Hi<span>History</span></div>
      </header>

      <section className="card hero">
        <div style={{ display: 'grid', gap: 14 }}>
          <p style={{ margin: 0, color: '#ffb86b', fontWeight: 700 }}>История как игра</p>
          <h1>Подготовка к экзамену в стиле твоего дизайна</h1>
          <p>Логин, квиз, прогресс, артефакты и админка. Интерфейс сразу адаптирован для телефона и ноутбука.</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" href="/login">
              Start
            </Link>
            <Link className="btn btn-soft" href="/dashboard">
              Открыть Dashboard
            </Link>
          </div>
        </div>
        <Image src="/images/hero-figure.svg" alt="Исторический персонаж" width={600} height={420} className="screen-img" />
      </section>

      <MobileNav />
    </main>
  );
}
