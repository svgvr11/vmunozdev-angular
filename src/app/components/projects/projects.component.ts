import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { PROJECTS } from '../../data/profile.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly studios = PROJECTS;

  /** Display URL without protocol, e.g. "thelister.atenis.app". */
  host(url: string): string {
    return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  }
}
