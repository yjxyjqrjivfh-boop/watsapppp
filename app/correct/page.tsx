import Link from 'next/link';

export default function CorrectPage() {
  return (
    <main className="app-shell">
      <h1 className="section-title">8) Правильный ответ</h1>
      <section className="phone correct-screen">
        <div className="status">9:41</div>
        <button className="pill yellow" style={{ border: 0 }}>✕</button>

        <div className="speech">Правильно!</div>

        <div style={{ marginTop: 140, height: 470, borderRadius: 18, background: 'linear-gradient(180deg,#7c5a3f,#2f2017)' }} />

        <div style={{ marginTop: 12 }}>
          <Link href="/reward" className="btn btn-yellow">Далі</Link>
        </div>
      </section>
    </main>
  );
}
