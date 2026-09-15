import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Container } from '../../shared/ui/container/container';

@Component({
  selector: 'app-contact-page',
  imports: [Container],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {}
