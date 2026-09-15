import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-journey-page',
  templateUrl: './journey-page.html',
  styleUrl: './journey-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JourneyPage {}
