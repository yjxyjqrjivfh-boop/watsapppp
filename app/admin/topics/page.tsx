import { TopNav } from '@/components/top-nav';
import { AdminStudio } from '@/components/admin-studio';

export default function AdminTopicsPage() {
  return (
    <main className="app-shell">
      <TopNav />
      <section style={{ display: 'grid', gap: 12, paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Admin · Уровни/темы</h2>
        <p style={{ margin: 0, color: '#5f6068' }}>
          Добавьте новый уровень здесь — и откройте <strong>/dashboard</strong>, он появится сразу.
        </p>
        <AdminStudio section="levels" />
      </section>
    </main>
  );
}
