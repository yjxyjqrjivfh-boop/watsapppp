import Link from 'next/link';

export default function ResultPage() {
  return (
    <main className="app-shell">
      <h1 className="section-title">Промежуточный результат</h1>
      <section className="phone">
        <div className="status">9:41</div>

        <div style={{ textAlign: 'center', marginTop: 120 }}>
          <h2 style={{ margin: 0, fontSize: 54 }}>Ой...</h2>
          <p style={{ marginTop: 12, color: '#5d5f66', fontSize: 28, lineHeight: 1.25 }}>
            На жаль, ви не пройшли розділ «Княгиня Ольга»
          </p>
        </div>

        <div style={{ marginTop: 34, border: '1px solid #d0d0d5', borderRadius: 16, background: '#f0f0f2', padding: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 24 }}>
            <span>Всього запитань</span>
            <span>4</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: 24, color: '#da3500', marginTop: 8 }}>
            <span>Помилок</span>
            <span>3</span>
          </div>
        </div>

        <div style={{ display: 'grid', gap: 10, marginTop: 28 }}>
          <Link href="/dashboard" className="btn btn-yellow">На головну</Link>
          <Link href="/quiz" className="btn btn-black">Пройти знову</Link>
        </div>
      </section>
    </main>
  );
}
