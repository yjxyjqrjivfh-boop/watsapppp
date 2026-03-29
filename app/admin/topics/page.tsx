import { TopNav } from '@/components/top-nav';
import { AdminStudio } from '@/components/admin-studio';

export default function AdminTopicsPage() {
  return (
    <main className="app-shell">
      <TopNav />
      <section style={{ display: 'grid', gap: 12, paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Admin · Пункты меню/темы</h2>
        <AdminStudio section="menu" />
      </section>
    </main>
  );
}
