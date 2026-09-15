import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-text-link',
  imports: [RouterLink],
  templateUrl: './text-link.html',
  styleUrl: './text-link.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextLink {
  readonly href = input<string | null>(null);
  readonly external = input(false);
  readonly showArrow = input(true);
}
