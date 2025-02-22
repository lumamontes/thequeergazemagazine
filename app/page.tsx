import Image from 'next/image';
import Footer from './components/Layout/Footer';
import { FloatingBadge } from './components/Home/FloatingBadge';
import { NavItem } from './components/Home/NavItem';

const navItems = [
  { title: 'About', href: '/about', color: 'pink-site' },
  { title: 'Issues', href: '/issues', color: 'yellow-site' },
  { title: 'Submissions', href: '/submissions', color: 'lightgreen-site' },
  { title: 'Blog', href: '/blog', color: 'red-site' },
];

export default function Home() {
  return (
    <div className="w-full bg-black text-white flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
      <FloatingBadge title="ISSUE #2 AVAILABLE NOW" redirectUrl="/issues/2" />
      <Image
        src="/images/hero.png"
        alt="projects"
        width={626}
        height={414}
        sizes={
          '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 626px'
        }
        priority
      />
      <h1 className="text-xl font-bold tracking-wide text-center">
        LITERARY MAGAZINE EST 2025
      </h1>

      <nav>
        <ul className="flex flex-wrap justify-center gap-6">
          {navItems.map(({ title, href, color }) => (
            <li key={title}>
              <NavItem title={title} href={href} color={color} />
            </li>
          ))}
        </ul>
      </nav>

      <Footer />
    </div>
  );
}
