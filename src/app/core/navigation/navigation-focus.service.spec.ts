import { TestBed } from '@angular/core/testing';
import { NavigationFocusService } from './navigation-focus.service';

describe('NavigationFocusService', () => {
  beforeEach(() => {
    document.body.innerHTML = '<main id="main-content" tabindex="-1"></main>';
  });

  it('should focus main content when requested', () => {
    const service = TestBed.inject(NavigationFocusService);

    service.focusMainContent();

    expect(document.activeElement?.id).toBe('main-content');
  });
});
