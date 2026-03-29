import Link from 'next/link';

const topics = [
  ['Олег Віщий', '3 запитання'],
  ['Ігор Рюрикович', '2 запитання'],
  ['Княгиня Ольга', '4 запитання'],
  ['Святослав Ігорович', '3 запитання'],
  ['Володимир Великий', '5 запитань'],
  ['Ярослав Мудрий', '7 запитань']
];

export default function TopicPage() {
  return (
    <main className="app-shell">
      <h1 className="section-title">5) После выбора темы</h1>
      <section className="phone">
        <div className="status">9:41</div>
        <div className="topic-header">
          <span style={{ fontSize: 30 }}>←</span>
        </div>

        <article className="topic-card">
          <h2 style={{ margin: 0, fontSize: 46 }}>Київська русь</h2>
          <p style={{ margin: '8px 0 0', fontSize: 36, fontWeight: 700 }}>В загальному 85 питань</p>
          <p style={{ margin: '6px 0 0', color: '#666870', fontSize: 30 }}>У вас є 2 невдалі спроби перш ніж почати знову</p>
          <Link className="btn btn-yellow" href="/quiz" style={{ marginTop: 10 }}>Пройти всі питання</Link>

          <h3 style={{ margin: '16px 0 8px', fontSize: 40 }}>Обери тему</h3>
          <div className="topic-list">
            {topics.map(([name, count]) => (
              <Link key={name} className="topic-item" href="/quiz">
                <div>
                  <strong style={{ display: 'block', fontSize: 34 }}>{name}</strong>
                  <span style={{ color: '#5f6068', fontSize: 28 }}>{count}</span>
                </div>
                <span style={{ fontSize: 34 }}>›</span>
              </Link>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
