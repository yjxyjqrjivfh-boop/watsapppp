import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="app-shell">
      <h1 className="section-title">1) Стартовый экран</h1>
      <section className="phone splash">
        <h1>Hi Story!</h1>
        <div style={{ position: 'absolute', bottom: 26, left: 16, right: 16 }}>
          <Link href="/onboarding" className="btn btn-black">Почати</Link>
        </div>
      </section>
    </main>
  );
}
