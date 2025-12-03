'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 150);
  };

  const navItems = [
    { name: 'Projects', href: '/projects' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Lauren Peña
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 dark:text-gray-300 hover:text-cyan-600/80 dark:hover:text-cyan-400/80 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Resume Button */}
              <a
                href="/LP_CV.pdf"
                download
                className="ml-4 bg-cyan-500/80 hover:bg-cyan-600/80 dark:bg-cyan-500/80 dark:hover:bg-cyan-600/80 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-cyan-600/80 dark:hover:text-cyan-400/80 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500/80"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-900 dark:text-gray-300 hover:text-cyan-600/80 dark:hover:text-cyan-400/80 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}
          
          <a
            href="/Lauren_Pena_Resume.pdf"
            download
            className="bg-cyan-500/80 hover:bg-cyan-600/80 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2"
            onClick={closeMobileMenu}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;