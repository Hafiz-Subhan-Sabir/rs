'use client';

import { useEffect, useState } from 'react';

import { applyTheme, resolveTheme, THEME_STORAGE_KEY, type Theme } from '@/lib/theme';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(resolveTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, mounted]);

  const btnBase = compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-sm';

  return (
    <div
      className="flex rounded-full border border-gray-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 p-0.5 backdrop-blur"
      role="group"
      aria-label="Theme"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`rounded-full ${btnBase} font-medium transition ${
          mounted && theme === 'light'
            ? 'bg-white text-gray-900 shadow dark:bg-white/90'
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
        }`}
        aria-pressed={mounted ? theme === 'light' : undefined}
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`rounded-full ${btnBase} font-medium transition ${
          mounted && theme === 'dark'
            ? 'brand-button shadow'
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
        }`}
        aria-pressed={mounted ? theme === 'dark' : undefined}
      >
        Dark
      </button>
    </div>
  );
}
