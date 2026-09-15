import { TestBed } from '@angular/core/testing';
import { ThemeService } from '../../../core/theme/theme.service';
import { ThemeToggle } from './theme-toggle';

describe('ThemeToggle', () => {
  beforeEach(async () => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');

    await TestBed.configureTestingModule({
      imports: [ThemeToggle],
    }).compileComponents();
  });

  afterEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('should expose an accessible theme label', () => {
    const fixture = TestBed.createComponent(ThemeToggle);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.visually-hidden')?.textContent).toContain(
      'Activer le thème',
    );
  });

  it('should toggle theme through ThemeService', () => {
    const fixture = TestBed.createComponent(ThemeToggle);
    const service = TestBed.inject(ThemeService);
    fixture.detectChanges();

    service.setTheme('light');
    fixture.nativeElement.querySelector('button')?.click();

    expect(service.resolvedTheme()).toBe('dark');
  });
});
