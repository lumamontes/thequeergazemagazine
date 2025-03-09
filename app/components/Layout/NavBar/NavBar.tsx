'use client';
import { NavLink } from './NavLink';
import { useCallback, useState } from 'react';
import type { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

const navbarItems = [
  { ref: '/', label: 'Home' },
  { ref: '/about', label: 'About' },
  { ref: '/projects', label: 'Projects' },
  { ref: '/team', label: 'Team' },
  { ref: '/news', label: 'News' },
  { ref: '/contact', label: 'Contact' },
];

const StyledNavLink = ({
  isActive,
  className,
  ...linkProps
}: LinkProps & {
  isActive: boolean;
  children: React.ReactNode;
  className?: string;
}) => (
  <NavLink
    className={`${className ?? ''} relative transition duration-300 ${
      isActive
        ? 'text-purple-600 font-semibold'
        : 'hover:text-purple-600 text-gray-800'
    }`}
    {...linkProps}
  >
    {linkProps.children}
    <span
      className={`absolute left-0 -bottom-2 h-[2px] w-full bg-gradient-to-r from-pink-500 to-blue-500 transition-transform ${
        isActive ? 'scale-x-100' : 'scale-x-0'
      }`}
    />
  </NavLink>
);

export function NavBar() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const pathname = usePathname();
  const [linkRef, setLinkRef] = useState<LinkProps['href']>(pathname!);

  const toggleOpen = useCallback(
    () => setIsMenuShown(!isMenuShown),
    [isMenuShown]
  );

  return (
    <>
      {/* Hamburger Menu (Mobile) */}
      <button
        className="block md:hidden relative z-50 p-3"
        onClick={toggleOpen}
      >
        <div className="space-y-2">
          <span
            className={`block h-[3px] w-8 bg-black transition-all ${
              isMenuShown ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          />
          <span
            className={`block h-[3px] w-8 bg-black transition-all ${
              isMenuShown ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[3px] w-8 bg-black transition-all ${
              isMenuShown ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          />
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navbarItems.map(({ ref, label }) => (
          <StyledNavLink
            key={ref}
            isActive={ref === linkRef}
            href={ref}
            onClick={() => setLinkRef(ref)}
            className="relative text-lg font-medium tracking-wide"
          >
            {label}
          </StyledNavLink>
        ))}
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`fixed inset-0 bg-white text-black flex flex-col items-center justify-center transform transition-transform ${
          isMenuShown ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <button
          onClick={toggleOpen}
          className="absolute top-6 right-6 text-4xl"
        >
          &times;
        </button>
        <ul className="space-y-8 text-2xl font-semibold">
          {navbarItems.map(({ ref, label }) => (
            <li key={ref}>
              <StyledNavLink
                isActive={ref === linkRef}
                href={ref}
                onClick={() => {
                  setLinkRef(ref);
                  setIsMenuShown(false);
                }}
                className="block text-center"
              >
                {label}
              </StyledNavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
