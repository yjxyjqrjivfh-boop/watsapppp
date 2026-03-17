import { TopNav } from '@/components/top-nav';

export default function AdminTopicsPage() {
  return (
    <main>
      <TopNav />
      <section className="container stack" style={{ paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Admin · Topics</h2>
        <div className="grid">
          <article className="card">История Украины</article>
          <article className="card">Средневековье</article>
          <article className="card">Казаки</article>
        </div>
      </section>
    </main>
  );
}
