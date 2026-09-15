import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'projets', renderMode: RenderMode.Prerender },
  { path: 'projets/mcprevention', renderMode: RenderMode.Prerender },
  { path: 'projets/xbase', renderMode: RenderMode.Prerender },
  { path: 'projets/ridetogether', renderMode: RenderMode.Prerender },
  { path: 'projets/pax-horizon', renderMode: RenderMode.Prerender },
  { path: 'parcours', renderMode: RenderMode.Prerender },
  { path: 'lab', renderMode: RenderMode.Prerender },
  { path: 'a-propos', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Prerender },
];
