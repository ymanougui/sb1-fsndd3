'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { NavLink } from './nav-link';
import { MobileNav } from './mobile-nav';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        isScrolled && 'shadow-sm'
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-['Mont']">
            CINNAMON
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/careers">Careers</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Play className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white hidden md:inline-flex">
              Let's collaborate
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;