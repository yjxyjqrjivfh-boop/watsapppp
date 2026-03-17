import { TopNav } from '@/components/top-nav';

export default function ResultPage() {
  return (
    <main>
      <TopNav />
      <section className="container stack" style={{ paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Результат темы</h2>
        <div className="grid">
          <article className="card">
            <p>Правильных ответов</p>
            <h3>3 / 4</h3>
          </article>
          <article className="card">
            <p>Получено XP</p>
            <h3>+30 XP</h3>
          </article>
          <article className="card">
            <p>Новый артефакт</p>
            <h3>Тризуб князей</h3>
          </article>
        </div>
      </section>
    </main>
  );
}
