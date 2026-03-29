import Link from 'next/link';

export default function WrongPage() {
  return (
    <main className="app-shell">
      <h1 className="section-title">7) Неправильный ответ</h1>
      <section className="phone wrong-screen">
        <div className="status">9:41</div>
        <div style={{ marginTop: 16, height: 210, background: 'linear-gradient(180deg,#e0dbc2,#ada37a)', borderRadius: 8 }} />
        <h2 style={{ textAlign: 'center', margin: '24px 0 8px', fontSize: 40 }}>Я такого не робила!</h2>
        <div className="wrong-box">
          Княгиня Ольга була дружиною князя Ігоря! За його смерть вона помстилася деревлянам.
        </div>

        <div style={{ display: 'grid', gap: 10, marginTop: 20 }}>
          <Link href="/quiz" className="btn btn-yellow">Далі</Link>
        </div>

        <p style={{ textAlign: 'center', marginTop: 14, color: '#c5bfbc', fontSize: 16 }}>
          в тебе залишилась ще одна невірна відповідь і почнеш спочатку
        </p>
      </section>
    </main>
  );
}
