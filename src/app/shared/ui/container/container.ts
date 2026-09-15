import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type ContainerSize = 'narrow' | 'default' | 'wide';

@Component({
  selector: 'app-container',
  templateUrl: './container.html',
  styleUrl: './container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'hostClass()',
  },
})
export class Container {
  readonly size = input<ContainerSize>('default');

  protected hostClass(): string {
    return `container container--${this.size()}`;
  }
}
