import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Header);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should expose aria-expanded false by default on menu button', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.header__menu-button') as HTMLButtonElement;
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('should toggle mobile menu and aria-expanded', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.header__menu-button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(fixture.nativeElement.querySelector('.header__nav--mobile')).toBeTruthy();
  });

  it('should close mobile menu on Escape and restore focus to menu button', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.header__menu-button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(fixture.nativeElement.querySelector('.header__nav--mobile')).toBeFalsy();
  });
});
