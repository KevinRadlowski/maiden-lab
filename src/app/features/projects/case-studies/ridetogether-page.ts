import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '../../../shared/ui/container/container';

@Component({
  selector: 'app-ridetogether-page',
  imports: [Container],
  templateUrl: './ridetogether-page.html',
  styleUrl: './ridetogether-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RidetogetherPage {}
