import { TestBed } from '@angular/core/testing';
import { Button } from './button';

describe('Button', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Button);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should apply primary variant class by default', () => {
    const fixture = TestBed.createComponent(Button);
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn.classList.contains('app-button--primary')).toBe(true);
  });

  it('should apply secondary variant class', () => {
    const fixture = TestBed.createComponent(Button);
    fixture.componentRef.setInput('variant', 'secondary');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button');
    expect(btn.classList.contains('app-button--secondary')).toBe(true);
  });

  it('should disable the native button', () => {
    const fixture = TestBed.createComponent(Button);
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
  });
});
