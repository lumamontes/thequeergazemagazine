'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Pages that should always have black header (no transition)
const DARK_HEADER_PAGES = ['/issues', '/submissions', '/blog'];

function NavLink({
  title,
  href,
  active,
  variant,
}: {
  title: string;
  href: string;
  active: boolean;
  variant: 'transparent' | 'dark';
}) {
  return (
    <Link href={href}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        className={`cursor-pointer ${
          active ? 'underline underline-offset-4' : ''
        } ${
          variant === 'dark'
            ? 'text-white hover:text-gray-300'
            : 'text-gray-800 hover:text-black'
        } transition-colors duration-300`}
      >
        {title}
      </motion.span>
    </Link>
  );
}

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Determine if this page should have the scroll effect
  const shouldHaveScrollEffect = !DARK_HEADER_PAGES.includes(pathname);

  // Determine if we should start with dark header (either always dark or scrolled)
  const isDarkHeader = !shouldHaveScrollEffect || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (shouldHaveScrollEffect) {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Set initial state based on current scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, shouldHaveScrollEffect]);

  const isActiveTab = (path: string) => {
    return pathname === path;
  };

  // Determine the current nav link variant
  const navVariant = isDarkHeader ? 'dark' : 'transparent';

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed px-6 md:px-12 py-4 w-full flex justify-between items-center text-lg font-light z-50 transition-all duration-300 ease-in-out ${
        isDarkHeader ? 'bg-black shadow-md' : 'bg-transparent'
      }`}
    >
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={100}
          height={60}
          alt="Queer Gaze Magazine logo!"
          className="transition-opacity duration-300"
        />
      </Link>

      {/* Navigation */}
      <nav className="hidden sm:flex space-x-8">
        <NavLink
          href="/about"
          active={isActiveTab('/about')}
          variant={navVariant}
          title="About"
        />
        <NavLink
          href="/issues"
          active={isActiveTab('/issues')}
          variant={navVariant}
          title="Issues"
        />
        <NavLink
          href="/submissions"
          active={isActiveTab('/submissions')}
          variant={navVariant}
          title="Submissions"
        />
        <NavLink
          href="/blog"
          active={isActiveTab('/blog')}
          variant={navVariant}
          title="Blog"
        />
      </nav>

      <MobileMenu scrolled={isDarkHeader} />
    </motion.header>
  );
};

export default Header;
