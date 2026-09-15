import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page').then((m) => m.HomePage),
  },
  {
    path: 'projets',
    loadComponent: () => import('./features/projects/projects-page').then((m) => m.ProjectsPage),
  },
  {
    path: 'projets/mcprevention',
    loadComponent: () =>
      import('./features/projects/case-studies/mcprevention-page').then((m) => m.McpreventionPage),
  },
  {
    path: 'projets/xbase',
    loadComponent: () =>
      import('./features/projects/case-studies/xbase-page').then((m) => m.XbasePage),
  },
  {
    path: 'projets/ridetogether',
    loadComponent: () =>
      import('./features/projects/case-studies/ridetogether-page').then((m) => m.RidetogetherPage),
  },
  {
    path: 'projets/pax-horizon',
    loadComponent: () =>
      import('./features/projects/case-studies/pax-horizon-page').then((m) => m.PaxHorizonPage),
  },
  {
    path: 'parcours',
    loadComponent: () => import('./features/journey/journey-page').then((m) => m.JourneyPage),
  },
  {
    path: 'lab',
    loadComponent: () => import('./features/lab/lab-page').then((m) => m.LabPage),
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./features/about/about-page').then((m) => m.AboutPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact-page').then((m) => m.ContactPage),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found-page').then((m) => m.NotFoundPage),
  },
];
