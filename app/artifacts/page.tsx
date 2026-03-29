const items = [
  ['Софійський собор', 'перша половина XI ст., м. Київ'],
  ['Спасо-Преображенський собор', '1036 р., м. Чернігів'],
  ['Успенський собор', '1073 р., м. Київ']
];

export default function ArtifactsPage() {
  return (
    <main className="app-shell">
      <h1 className="section-title">Мої артефакти</h1>
      <section className="phone">
        <div className="status">9:41</div>
        <h2 style={{ margin: '8px 0 12px', fontSize: 44 }}>Мої артефакти</h2>

        <div className="artifacts">
          {items.map(([name, date]) => (
            <article className="artifact" key={name}>
              <div className="img" />
              <div className="txt">
                <strong style={{ display: 'block', fontSize: 34 }}>{name}</strong>
                <span style={{ color: '#666872', fontSize: 26 }}>{date}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
