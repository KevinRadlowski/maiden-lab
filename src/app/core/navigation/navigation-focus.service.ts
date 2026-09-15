import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationFocusService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private initialized = false;
  private hasHandledInitialNavigation = false;

  init(): void {
    if (this.initialized || !isPlatformBrowser(this.platformId)) {
      return;
    }

    this.initialized = true;

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (!this.hasHandledInitialNavigation) {
        this.hasHandledInitialNavigation = true;
        return;
      }

      requestAnimationFrame(() => this.focusMainContent());
    });
  }

  focusMainContent(): void {
    const main = document.getElementById('main-content');
    main?.focus({ preventScroll: false });
  }
}
