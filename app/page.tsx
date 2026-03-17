import Image from 'next/image';
import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

export default function HomePage() {
  return (
    <main className="app-shell">
      <h1 className="preview-title">Шуточное превью в стиле твоих экранов 😄</h1>

      <section className="phone-screen">
        <div className="status-bar">9:41</div>
        <div className="hero-blob">
          <Image src="/images/hero-figure.svg" alt="Onboarding" width={260} height={220} style={{ width: '84%', height: 'auto' }} />
        </div>

        <div style={{ marginTop: 26, textAlign: 'center' }}>
          <p className="subtitle" style={{ margin: 0 }}>Ласкаво просимо до</p>
          <h2 className="title" style={{ fontSize: 52, marginTop: 4 }}>Hi Story!</h2>
          <p className="subtitle" style={{ marginTop: 14 }}>Тут княгиня Ольга вже чекає твою відповідь 👀</p>
        </div>

        <div style={{ display: 'grid', gap: 12, marginTop: 44 }}>
          <Link href="/login" className="btn btn-yellow">
            Далі
          </Link>
          <Link href="/dashboard" className="btn btn-black">
            Пропустити
          </Link>
        </div>
      </section>

      <MobileNav />
    </main>
  );
}
