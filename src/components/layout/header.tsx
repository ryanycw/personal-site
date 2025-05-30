'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import ThemeToggle from '@/src/components/ui/theme-toggle';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-xl flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-serif text-xl font-bold">Ryan, ryanycw</span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-1 sm:space-x-2 md:justify-center">
          {navItems.map((item) => {
            const isActive = 
              item.path === '/' 
                ? pathname === '/' 
                : pathname.startsWith(item.path);
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-foreground"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 