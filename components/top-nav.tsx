import Link from 'next/link';

const links = [
  { href: '/', label: 'Landing' },
  { href: '/login', label: 'Login' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/result', label: 'Result' },
  { href: '/admin/users', label: 'Admin' }
];

export function TopNav() {
  return (
    <nav className="container" style={{ padding: '1rem 0', display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="card" style={{ padding: '0.45rem 0.7rem', borderRadius: 10 }}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
