import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LabPage } from './lab-page';

describe('LabPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  afterEach(() => {
    document.documentElement.removeAttribute('data-theme');
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LabPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the main heading', () => {
    const fixture = TestBed.createComponent(LabPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.text-display')?.textContent).toContain(
      'MAIDEN/LAB',
    );
  });

  it('should toggle dark theme on document element', () => {
    const fixture = TestBed.createComponent(LabPage);
    fixture.detectChanges();
    fixture.componentInstance.toggleTheme();
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    fixture.componentInstance.toggleTheme();
    expect(document.documentElement.hasAttribute('data-theme')).toBe(false);
  });

  it('should expose design system specimens', () => {
    const fixture = TestBed.createComponent(LabPage);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.lab-swatches')).toBeTruthy();
    expect(el.querySelector('app-button')).toBeTruthy();
    expect(el.querySelector('app-text-link')).toBeTruthy();
  });
});
