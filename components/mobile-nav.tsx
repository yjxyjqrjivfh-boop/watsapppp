import Link from 'next/link';

const links = [
  { href: '/', label: 'Онборд' },
  { href: '/login', label: 'Логін' },
  { href: '/dashboard', label: 'Рівні' },
  { href: '/quiz', label: 'Квіз' },
  { href: '/result', label: 'Фініш' }
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
