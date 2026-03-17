import Link from 'next/link';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/login', label: 'Вход' },
  { href: '/dashboard', label: 'Прогресс' },
  { href: '/quiz', label: 'Тест' },
  { href: '/admin/users', label: 'Admin' }
];

export function MobileNav() {
  return (
    <div className="footer-nav">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
