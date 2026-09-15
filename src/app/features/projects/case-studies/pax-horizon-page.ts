import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '../../../shared/ui/container/container';

@Component({
  selector: 'app-pax-horizon-page',
  imports: [Container],
  templateUrl: './pax-horizon-page.html',
  styleUrl: './pax-horizon-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaxHorizonPage {}
