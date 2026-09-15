import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '../../../shared/ui/container/container';

@Component({
  selector: 'app-xbase-page',
  imports: [Container],
  templateUrl: './xbase-page.html',
  styleUrl: './xbase-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XbasePage {}
