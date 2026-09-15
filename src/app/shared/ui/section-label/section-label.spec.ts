import { TestBed } from '@angular/core/testing';
import { SectionLabel } from './section-label';

describe('SectionLabel', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLabel],
    }).compileComponents();
  });

  it('should render index and title', () => {
    const fixture = TestBed.createComponent(SectionLabel);
    fixture.componentRef.setInput('index', '01');
    fixture.componentRef.setInput('title', 'Identité');
    fixture.detectChanges();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('01');
    expect(el.textContent).toContain('Identité');
  });

  it('should render title without index when index is null', () => {
    const fixture = TestBed.createComponent(SectionLabel);
    fixture.componentRef.setInput('title', 'Palette');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Palette');
  });
});
