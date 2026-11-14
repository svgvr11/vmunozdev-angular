import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';
import { CV_FILES } from '../../data/profile.data';

interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
  external: boolean;
}

@Component({
  selector: 'app-main-hero',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './main-hero.component.html',
  styleUrl: './main-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeroComponent {
  readonly stack = ['Angular', 'CSS', 'Ionic', 'Flutter', 'WordPress'];
  readonly cvFiles = CV_FILES;

  readonly links: SocialLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/victor-mu%C3%B1oz-f/', icon: 'linkedin', external: true },
    { label: 'Instagram', href: 'https://www.instagram.com/svgvr_/', icon: 'instagram', external: true },
    { label: 'Email', href: 'mailto:victor@vmunoz.dev', icon: 'email', external: false },
  ];
}
