import { TestBed } from '@angular/core/testing';
import { Container } from './container';

describe('Container', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Container],
    }).compileComponents();
  });

  it('should apply default container class', () => {
    const fixture = TestBed.createComponent(Container);
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('container--default')).toBe(true);
  });

  it('should apply narrow size class', () => {
    const fixture = TestBed.createComponent(Container);
    fixture.componentRef.setInput('size', 'narrow');
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('container--narrow')).toBe(true);
  });
});
