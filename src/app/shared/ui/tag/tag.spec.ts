import { TestBed } from '@angular/core/testing';
import { Tag } from './tag';

describe('Tag', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tag],
    }).compileComponents();
  });

  it('should render content', () => {
    const fixture = TestBed.createComponent(Tag);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.app-tag')).toBeTruthy();
  });

  it('should apply accent variant', () => {
    const fixture = TestBed.createComponent(Tag);
    fixture.componentRef.setInput('variant', 'accent');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.app-tag--accent')).toBeTruthy();
  });
});
