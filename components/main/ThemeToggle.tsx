'use client';

import { useCallback, useEffect, useState } from 'react';
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

import {
  applyTheme,
  clearStoredTheme,
  getStoredTheme,
  getSystemTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from '@/lib/theme';

type ThemeMode = 'light' | 'dark' | 'system';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mode, setMode] = useState<ThemeMode>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme();
    setMode(stored ?? 'system');
    setTheme(stored ?? getSystemTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted || mode !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystem = () => setTheme(getSystemTheme());
    media.addEventListener('change', syncSystem);
    return () => media.removeEventListener('change', syncSystem);
  }, [mounted, mode]);

  const pickMode = useCallback((next: ThemeMode) => {
    setMode(next);
    if (next === 'system') {
      clearStoredTheme();
      setTheme(getSystemTheme());
      return;
    }
    setTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  }, []);

  const btnBase = compact ? 'p-2' : 'px-3 py-1.5 text-sm';
  const isActive = (target: ThemeMode) => mounted && mode === target;

  const options: { id: ThemeMode; label: string; icon: typeof SunIcon }[] = [
    { id: 'light', label: 'Light', icon: SunIcon },
    { id: 'dark', label: 'Dark', icon: MoonIcon },
    { id: 'system', label: 'System', icon: ComputerDesktopIcon },
  ];

  return (
    <div
      className="flex rounded-full border border-gray-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 p-0.5 backdrop-blur"
      role="group"
      aria-label="Theme"
      title={
        mode === 'system'
          ? `Following system (${theme})`
          : `${mode.charAt(0).toUpperCase()}${mode.slice(1)} mode`
      }
    >
      {options.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => pickMode(id)}
          className={`rounded-full ${btnBase} font-medium transition inline-flex items-center justify-center gap-1.5 ${
            isActive(id)
              ? id === 'dark'
                ? 'brand-button shadow'
                : 'bg-white text-gray-900 shadow dark:bg-white/90'
              : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          }`}
          aria-pressed={isActive(id)}
          aria-label={label}
        >
          <Icon className="h-4 w-4" aria-hidden />
          {!compact ? <span>{label}</span> : null}
        </button>
      ))}
    </div>
  );
}
