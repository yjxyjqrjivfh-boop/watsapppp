import Link from 'next/link';

export default function RewardPage() {
  return (
    <main className="app-shell">
      <h1 className="section-title">9) Логика после правильного ответа</h1>
      <section className="phone">
        <div className="status">9:41</div>

        <h2 style={{ marginTop: 30, fontSize: 44 }}>Ви отримуєте цей Артефакт!</h2>
        <div className="reward-illu" />

        <h3 style={{ textAlign: 'center', marginTop: 26, fontSize: 40 }}>Успенський собор Києво-Печерської лаври</h3>
        <p style={{ textAlign: 'center', color: '#686970', fontSize: 28 }}>1073-1078 рр., м. Київ</p>

        <div style={{ display: 'grid', gap: 10, marginTop: 26 }}>
          <Link href="/dashboard" className="btn btn-yellow">На головну</Link>
          <Link href="/quiz" className="btn btn-black">Пройти знову</Link>
          <Link href="/artifacts" className="btn btn-black">Мої артефакти</Link>
        </div>
      </section>
    </main>
  );
}
