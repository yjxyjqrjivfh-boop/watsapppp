import { TopNav } from '@/components/top-nav';
import { AdminStudio } from '@/components/admin-studio';

export default function AdminArtifactsPage() {
  return (
    <main className="app-shell">
      <TopNav />
      <section style={{ display: 'grid', gap: 12, paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Admin · Артефакты (верный/неверный ответ)</h2>
        <AdminStudio section="artifacts" />
      </section>
    </main>
  );
}
