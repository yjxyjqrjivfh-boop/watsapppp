import { TopNav } from '@/components/top-nav';

export default function AdminQuestionsPage() {
  return (
    <main>
      <TopNav />
      <section className="container stack" style={{ paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Admin · Questions</h2>
        <div className="card stack">
          <button className="btn">Добавить вопрос</button>
          <p style={{ margin: 0, color: '#a8b3d1' }}>
            Поля формы: тема, вопрос, картинка, ответы A/B/C/D, правильный вариант, success/fail анимации.
          </p>
        </div>
      </section>
    </main>
  );
}
