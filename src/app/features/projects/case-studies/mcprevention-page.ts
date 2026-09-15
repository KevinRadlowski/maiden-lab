import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '../../../shared/ui/container/container';

@Component({
  selector: 'app-mcprevention-page',
  imports: [Container],
  templateUrl: './mcprevention-page.html',
  styleUrl: './mcprevention-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class McpreventionPage {}
