import { TopNav } from '@/components/top-nav';
import { AdminTabs } from '@/components/admin-tabs';
import { AdminStudio } from '@/components/admin-studio';

export default function AdminTopicsPage() {
  return (
    <main className="app-shell">
      <TopNav />
      <section style={{ display: 'grid', gap: 12, paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Admin · Уровни</h2>
        <AdminTabs />
        <AdminStudio section="levels" />
      </section>
    </main>
  );
}
