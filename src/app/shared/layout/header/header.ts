import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { Brand } from '../brand/brand';
import { PRIMARY_NAV_ITEMS } from '../navigation/nav-items';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  imports: [Brand, RouterLink, RouterLinkActive, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-header-host',
  },
})
export class Header implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  protected readonly navItems = PRIMARY_NAV_ITEMS;
  protected readonly mobileMenuOpen = signal(false);
  protected readonly mobileNavId = 'primary-mobile-nav';

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.closeMobileMenu());

    if (isPlatformBrowser(this.platformId) && typeof window.matchMedia === 'function') {
      const desktopQuery = window.matchMedia('(min-width: 768px)');
      const onViewportChange = (): void => {
        if (desktopQuery.matches) {
          this.closeMobileMenu();
        }
      };
      desktopQuery.addEventListener('change', onViewportChange);
      this.destroyRef.onDestroy(() => desktopQuery.removeEventListener('change', onViewportChange));
    }
  }

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  @HostListener('document:keydown', ['$event'])
  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.mobileMenuOpen()) {
      event.preventDefault();
      this.closeMobileMenu();
      this.menuButton()?.nativeElement.focus();
    }
  }
}
