import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '../../shared/ui/container/container';

@Component({
  selector: 'app-home-page',
  imports: [Container],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
