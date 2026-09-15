import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TextLink } from './text-link';

describe('TextLink', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextLink],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render an internal router link', () => {
    const fixture = TestBed.createComponent(TextLink);
    fixture.componentRef.setInput('href', '/projets');
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector('a');
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toContain('/projets');
  });

  it('should render an external link with rel noopener', () => {
    const fixture = TestBed.createComponent(TextLink);
    fixture.componentRef.setInput('href', 'https://github.com');
    fixture.componentRef.setInput('external', true);
    fixture.detectChanges();
    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(link.target).toBe('_blank');
    expect(link.rel).toContain('noopener');
  });
});
