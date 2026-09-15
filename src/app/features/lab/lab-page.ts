import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Button } from '../../shared/ui/button/button';
import { Container } from '../../shared/ui/container/container';
import { Divider } from '../../shared/ui/divider/divider';
import { SectionLabel } from '../../shared/ui/section-label/section-label';
import { Tag } from '../../shared/ui/tag/tag';
import { TextLink } from '../../shared/ui/text-link/text-link';

type ThemeMode = 'light' | 'dark';

@Component({
  selector: 'app-lab-page',
  imports: [Button, Container, Divider, SectionLabel, Tag, TextLink],
  templateUrl: './lab-page.html',
  styleUrl: './lab-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabPage {
  protected readonly theme = signal<ThemeMode>('light');

  protected readonly colorSwatches = [
    { name: 'Bleu signature', token: '--blue-500', primitive: true },
    { name: 'Bleu profond', token: '--blue-600', primitive: true },
    { name: 'Violet signature', token: '--violet-500', primitive: true },
    { name: 'Violet profond', token: '--violet-600', primitive: true },
    { name: 'Background', token: '--color-background', primitive: false },
    { name: 'Surface', token: '--color-surface', primitive: false },
    { name: 'Surface muted', token: '--color-surface-muted', primitive: false },
    { name: 'Texte', token: '--color-text', primitive: false },
    { name: 'Texte muted', token: '--color-text-muted', primitive: false },
    { name: 'Bordure', token: '--color-border', primitive: false },
    { name: 'Interactive', token: '--color-interactive', primitive: false },
    { name: 'Accent', token: '--color-accent', primitive: false },
  ] as const;

  protected readonly spacingSamples = [
    { name: 'space-2', size: 'var(--space-2)', value: '0.5 rem' },
    { name: 'space-4', size: 'var(--space-4)', value: '1 rem' },
    { name: 'space-6', size: 'var(--space-6)', value: '1.5 rem' },
    { name: 'space-8', size: 'var(--space-8)', value: '2 rem' },
    { name: 'space-12', size: 'var(--space-12)', value: '3 rem' },
    { name: 'space-16', size: 'var(--space-16)', value: '4 rem' },
  ] as const;

  toggleTheme(): void {
    const next: ThemeMode = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(next);
    if (next === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
}
