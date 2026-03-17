import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/login', label: 'Login' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/quiz', label: 'Quiz' },
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
