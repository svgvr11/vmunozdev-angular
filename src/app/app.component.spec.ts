import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CV_FILES, EXPERIENCE, PROJECTS } from './data/profile.data';

describe('AppComponent', () => {
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  it('renders a single h1 with the name', () => {
    const h1s = el.querySelectorAll('h1');
    expect(h1s.length).toBe(1);
    expect(h1s[0].textContent).toContain('Victor Munoz');
  });

  it('offers direct download links for every CV', () => {
    for (const cv of CV_FILES) {
      const links = el.querySelectorAll<HTMLAnchorElement>(`a[download="${cv.filename}"]`);
      expect(links.length).toBeGreaterThan(0);
      expect(links[0].getAttribute('href')).toBe(cv.href);
    }
  });

  it('renders every experience entry with its description', () => {
    const total = EXPERIENCE.reduce((n, g) => n + g.entries.length, 0);
    const entries = el.querySelectorAll('.entry');
    expect(entries.length).toBe(total);
    entries.forEach((e) => expect(e.querySelector('.entry__description')?.textContent?.trim()).toBeTruthy());
  });

  it('lists every project with a link to its site', () => {
    for (const project of PROJECTS.flatMap((s) => s.projects)) {
      const link = el.querySelector<HTMLAnchorElement>(`.project__link[href="${project.url}"]`);
      expect(link?.textContent).toContain(project.name);
    }
  });

  it('gives every icon-only link an accessible name', () => {
    el.querySelectorAll<HTMLAnchorElement>('.hero__social a').forEach((a) => {
      expect(a.getAttribute('aria-label')).toBeTruthy();
    });
  });
});
