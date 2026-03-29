import { TopNav } from '@/components/top-nav';
import { AdminTabs } from '@/components/admin-tabs';

const users = [
  { email: 'user1@mail.com', xp: 120, streak: 4, joined: '2026-03-10' },
  { email: 'user2@mail.com', xp: 40, streak: 1, joined: '2026-03-15' }
];

export default function AdminUsersPage() {
  return (
    <main className="app-shell">
      <TopNav />
      <section style={{ display: 'grid', gap: 12, paddingBottom: '2rem' }}>
        <h2 style={{ margin: 0 }}>Admin · Users</h2>
        <AdminTabs />
        <div className="admin-card" style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th align="left">Email</th>
                <th align="left">XP</th>
                <th align="left">Серия дней</th>
                <th align="left">Регистрация</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email}>
                  <td>{user.email}</td>
                  <td>{user.xp}</td>
                  <td>{user.streak}</td>
                  <td>{user.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
