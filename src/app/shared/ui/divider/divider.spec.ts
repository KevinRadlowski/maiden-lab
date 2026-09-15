import { TestBed } from '@angular/core/testing';
import { Divider } from './divider';

describe('Divider', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Divider],
    }).compileComponents();
  });

  it('should render a horizontal rule', () => {
    const fixture = TestBed.createComponent(Divider);
    fixture.detectChanges();

    const hr = fixture.nativeElement.querySelector('hr');
    expect(hr).toBeTruthy();
    expect(hr?.classList.contains('app-divider')).toBe(true);
  });

  it('should apply strong modifier when strong is true', () => {
    const fixture = TestBed.createComponent(Divider);
    fixture.componentRef.setInput('strong', true);
    fixture.detectChanges();

    const hr = fixture.nativeElement.querySelector('hr');
    expect(hr?.classList.contains('app-divider--strong')).toBe(true);
  });
});
