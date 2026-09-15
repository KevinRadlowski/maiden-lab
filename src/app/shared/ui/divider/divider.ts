import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-divider',
  template: '<hr class="app-divider" [class.app-divider--strong]="strong()" />',
  styleUrl: './divider.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Divider {
  readonly strong = input(false);
}
