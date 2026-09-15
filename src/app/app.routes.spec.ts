import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';

describe('App routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });
  });

  it('should navigate to the home page', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Maiden Lab');
  });

  it('should navigate to the projects page', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/projets');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain('Projets');
  });

  it('should show the not found page for unknown routes', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/route-inexistante');
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toContain(
      'Page introuvable',
    );
  });

  it('should resolve project case study routes', async () => {
    const router = TestBed.inject(Router);
    const match = router.config.find((route) => route.path === 'projets/mcprevention');
    expect(match).toBeTruthy();
  });
});
