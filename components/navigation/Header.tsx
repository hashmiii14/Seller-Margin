'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { CommandPalette } from '@/components/navigation/CommandPalette';
import { MAIN_NAV_ITEMS } from '@/lib/config/navigation';
import { Calculator, Sun, Moon, Search, Menu, X, ChevronDown } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export const Header: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem('sellrivo_theme') as 'light' | 'dark';
    if (saved === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      // Default strictly to clean Light / Morning theme across the entire site
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('sellrivo_theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('sellrivo_theme', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    trackEvent('theme_changed', { theme: next });
  };

  const calculatorItems = MAIN_NAV_ITEMS.filter((item) => item.category === 'calculators');
  const otherItems = MAIN_NAV_ITEMS.filter((item) => item.category !== 'calculators' && item.href !== '/');

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-black text-2xl text-slate-900 dark:text-slate-100 tracking-tight hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Sellrivo
          </span>
        </Link>

        {/* Desktop Navigation Links — All Calculators & Pages Visible */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold">
          <Link
            href="/"
            className={`px-2.5 py-1.5 rounded-lg transition-colors ${
              pathname === '/'
                ? 'text-brand-600 dark:text-brand-400 font-bold bg-brand-50 dark:bg-slate-900'
                : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900'
            }`}
          >
            Home
          </Link>

          {calculatorItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                pathname === item.href
                  ? 'text-brand-600 dark:text-brand-400 font-bold bg-brand-50 dark:bg-slate-900'
                  : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {otherItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'text-brand-600 dark:text-brand-400 font-bold bg-brand-50 dark:bg-slate-900'
                  : 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Utility Buttons */}
        <div className="flex items-center gap-2">
          {/* Quick Search Trigger */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search calculators"
            className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Search Calculators (Cmd+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Single Unified Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode theme"
            className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title={`Active: ${theme === 'dark' ? 'Night Dark Mode (Moon)' : 'Morning Light Mode (Sun)'}. Click to switch.`}
          >
            {theme === 'dark' ? (
              <Moon className="w-4 h-4 text-brand-400" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
          </button>

          {/* Primary CTA */}
          <Link href="/etsy-profit-calculator" className="hidden sm:inline-block">
            <Button size="sm" variant="brand">
              Calculate Profit
            </Button>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 rounded-lg text-sm font-bold text-brand-600 dark:text-brand-400 bg-brand-50/70 dark:bg-slate-900"
          >
            Home
          </Link>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 pt-1 px-2">
            Calculators
          </div>
          <div className="grid grid-cols-2 gap-1">
            {calculatorItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-xs font-medium text-slate-800 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-slate-100 dark:border-slate-900 pt-3 space-y-1">
            {otherItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Command Palette Search Modal */}
      <CommandPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
};
