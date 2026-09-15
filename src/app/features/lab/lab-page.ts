import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lab-page',
  templateUrl: './lab-page.html',
  styleUrl: './lab-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabPage {}
