'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';
import Image from 'next/image';


function NavLink({title, href, active, scrolled}: {
  title: string
  href: string
  active: boolean,
  scrolled: boolean
}){
  return (
    <Link href={href}>
      <motion.span
        whileHover={{ scale: 1.05 }}
        className={`cursor-pointer ${
          active ? 'underline underline-offset-4' : ''
        }

        ${
          scrolled ? ' text-pink-site' : ' text-gray-800 hover:text-black'
        }
        
        `}
      >
        {title}
      </motion.span>
    </Link>

  )
}

const Header = ({scroll = true}: {
  scroll?: boolean
}) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(!scroll ? true : false);

  useEffect(() => {
    const handleScroll = () => {
      if(scroll){
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActiveTab = (path: string) => {
    return pathname === path;
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed  px-6 md:px-12 py-2 w-full flex justify-between items-center text-lg font-light z-50 transition-all duration-300 ease-in-out 
        ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}
    >
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={100}
          height={100}
          alt="Queer Gaze Magazine logo!"
        />
      </Link>

      {/* Navigation */}
      <nav className="hidden sm:flex space-x-8">
        <NavLink
          href='/about'
          active={isActiveTab('/about')}
          scrolled={isScrolled}
          title='About'
        />
        <NavLink
          href='/issues'
          active={isActiveTab('/issues')}
          scrolled={isScrolled}
          title='Issues'
        />
        <NavLink
          href='/submissions'
          active={isActiveTab('/submissions')}
          scrolled={isScrolled}
          title='Submissions'
        />
        <NavLink
          href='/blog'
          active={isActiveTab('/blog')}
          scrolled={isScrolled}
          title='Blog'
        />
      </nav>

      <MobileMenu 
        scrolled={isScrolled}
      />
    </motion.header>
  );
};

export default Header;
