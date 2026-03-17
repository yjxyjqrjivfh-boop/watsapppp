import { TopNav } from '@/components/top-nav';

export default function AdminArtifactsPage() {
  return (
    <main>
      <TopNav />
      <section className="container stack" style={{ paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Admin · Artifacts</h2>
        <div className="card stack">
          <p style={{ margin: 0 }}>Добавление наград: название, картинка, описание, условие получения.</p>
          <button className="btn">Добавить артефакт</button>
        </div>
      </section>
    </main>
  );
}
