import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type TagVariant = 'default' | 'accent' | 'technical';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.html',
  styleUrl: './tag.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tag {
  readonly variant = input<TagVariant>('default');
}
