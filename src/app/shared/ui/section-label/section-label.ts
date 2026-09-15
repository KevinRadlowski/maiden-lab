import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-label',
  templateUrl: './section-label.html',
  styleUrl: './section-label.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionLabel {
  readonly index = input<string | null>(null);
  readonly title = input.required<string>();
}
