import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '../../shared/ui/container/container';

@Component({
  selector: 'app-journey-page',
  imports: [Container],
  templateUrl: './journey-page.html',
  styleUrl: './journey-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneyPage {}
