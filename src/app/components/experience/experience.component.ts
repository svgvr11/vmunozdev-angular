import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { CV_FILES, EXPERIENCE } from '../../data/profile.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [IconComponent, NgOptimizedImage],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly groups = EXPERIENCE;
  readonly cvFiles = CV_FILES;
}
