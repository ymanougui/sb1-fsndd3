'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { NavLink } from './nav-link';

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[300px] pt-16">
        <nav className="flex flex-col space-y-6">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/careers">Careers</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
}