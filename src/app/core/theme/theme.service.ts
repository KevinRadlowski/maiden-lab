import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { THEME_STORAGE_KEY, ThemeMode } from './theme.constants';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly explicitPreference = signal<ThemeMode | null>(null);
  private readonly systemPrefersDark = signal(false);

  readonly resolvedTheme = computed<ThemeMode>(() => {
    const explicit = this.explicitPreference();
    if (explicit) {
      return explicit;
    }
    return this.systemPrefersDark() ? 'dark' : 'light';
  });

  readonly hasExplicitPreference = computed(() => this.explicitPreference() !== null);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.explicitPreference.set(this.readStoredPreference());
    this.systemPrefersDark.set(this.readSystemPreference());

    if (typeof window.matchMedia === 'function') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (event) => {
        this.systemPrefersDark.set(event.matches);
        if (!this.explicitPreference()) {
          this.applyTheme(this.resolvedTheme());
        }
      });
    }

    this.applyTheme(this.resolvedTheme());
  }

  setTheme(theme: ThemeMode): void {
    this.explicitPreference.set(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    const next: ThemeMode = this.resolvedTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  private readStoredPreference(): ThemeMode | null {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      return stored === 'light' || stored === 'dark' ? stored : null;
    } catch {
      return null;
    }
  }

  private readSystemPreference(): boolean {
    if (typeof window.matchMedia !== 'function') {
      return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyTheme(theme: ThemeMode): void {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
}
