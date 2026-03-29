import Link from 'next/link';

const tabs = [
  { href: '/admin/topics', label: 'Уровни' },
  { href: '/admin/questions?tab=topics', label: 'Темы' },
  { href: '/admin/questions', label: 'Вопросы' },
  { href: '/admin/media', label: 'Медиа' }
];

export function AdminTabs() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {tabs.map((tab) => (
        <Link key={tab.href} href={tab.href} className="admin-btn" style={{ width: 'auto', padding: '8px 12px' }}>
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
