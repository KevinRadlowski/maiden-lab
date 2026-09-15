import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NotFoundPage } from './not-found-page';

describe('NotFoundPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPage],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NotFoundPage);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render an understandable message', () => {
    const fixture = TestBed.createComponent(NotFoundPage);
    fixture.detectChanges();
    const heading = fixture.nativeElement.querySelector('h1') as HTMLElement;
    expect(heading.textContent).toContain('Page introuvable');
  });
});
