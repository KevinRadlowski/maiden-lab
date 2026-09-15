import { TestBed } from '@angular/core/testing';
import { THEME_STORAGE_KEY } from './theme.constants';
import { ThemeService } from './theme.service';

function mockMatchMedia(matches: boolean): void {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: vi.fn().mockImplementation(() => ({
      matches,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
}

describe('ThemeService', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    mockMatchMedia(false);
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
    TestBed.resetTestingModule();
  });

  it('should follow system preference when no stored preference exists', () => {
    mockMatchMedia(true);

    const service = TestBed.inject(ThemeService);
    expect(service.resolvedTheme()).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('should persist and apply an explicit theme preference', () => {
    const service = TestBed.inject(ThemeService);

    service.setTheme('dark');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark');
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    service.setTheme('light');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false);
  });

  it('should toggle between light and dark', () => {
    const service = TestBed.inject(ThemeService);

    service.setTheme('light');
    service.toggleTheme();
    expect(service.resolvedTheme()).toBe('dark');

    service.toggleTheme();
    expect(service.resolvedTheme()).toBe('light');
  });
});
