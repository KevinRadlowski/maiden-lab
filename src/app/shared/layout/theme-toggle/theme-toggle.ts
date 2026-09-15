import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../../core/theme/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggle {
  private readonly themeService = inject(ThemeService);

  protected readonly label = computed(() =>
    this.themeService.resolvedTheme() === 'dark'
      ? 'Activer le thème clair'
      : 'Activer le thème sombre',
  );

  protected toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
