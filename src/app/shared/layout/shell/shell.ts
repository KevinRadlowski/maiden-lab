import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationFocusService } from '../../../core/navigation/navigation-focus.service';
import { ThemeService } from '../../../core/theme/theme.service';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-shell',
  imports: [Header, Footer],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shell {
  private readonly navigationFocus = inject(NavigationFocusService);
  private readonly themeBootstrap = inject(ThemeService);

  constructor() {
    void this.themeBootstrap;
    this.navigationFocus.init();
  }
}
