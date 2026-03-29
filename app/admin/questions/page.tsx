import { TopNav } from '@/components/top-nav';
import { AdminStudio } from '@/components/admin-studio';

export default function AdminQuestionsPage() {
  return (
    <main className="app-shell">
      <TopNav />
      <section style={{ display: 'grid', gap: 12, paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Admin · Конструктор меню, вопросов, логики и анимаций</h2>
        <p style={{ margin: 0, color: '#5f6068' }}>
          Да, прямо сейчас: добавляете пункт/вопрос/артефакт — и он сразу появляется ниже (сохранение в localStorage браузера).
        </p>
        <AdminStudio section="all" />
      </section>
    </main>
  );
}
