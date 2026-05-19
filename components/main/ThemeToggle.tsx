'use client';

import { useCallback, useEffect, useState } from 'react';

import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from '@/lib/theme';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  /** null = follow system; set only when user clicks Light or Dark */
  const [userOverride, setUserOverride] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = getStoredTheme();
    setUserOverride(stored);
    setTheme(stored ?? getSystemTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted || userOverride !== null) return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystem = () => setTheme(getSystemTheme());
    media.addEventListener('change', syncSystem);
    return () => media.removeEventListener('change', syncSystem);
  }, [mounted, userOverride]);

  const pickTheme = useCallback((next: Theme) => {
    setUserOverride(next);
    setTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  }, []);

  const btnBase = compact ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-sm';
  const isSystemMode = mounted && userOverride === null;

  return (
    <div
      className="flex rounded-full border border-gray-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 p-0.5 backdrop-blur"
      role="group"
      aria-label="Theme"
      title={isSystemMode ? 'Following your system theme' : 'Custom theme selected'}
    >
      <button
        type="button"
        onClick={() => pickTheme('light')}
        className={`rounded-full ${btnBase} font-medium transition ${
          mounted && (userOverride === 'light' || (isSystemMode && theme === 'light'))
            ? 'bg-white text-gray-900 shadow dark:bg-white/90'
            : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
        }`}
        aria-pressed={mounted ? theme === 'light' : undefined}
      >
        Light
      </button>
      <button
        type="button"
        onClick={() => pickTheme('dark')}
        className={`rounded-full ${btnBase} font-medium transition ${
          mounted && (userOverride === 'dark' || (isSystemMode && theme === 'dark'))
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
