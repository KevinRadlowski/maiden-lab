import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '../../shared/ui/container/container';

@Component({
  selector: 'app-about-page',
  imports: [Container],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPage {}
