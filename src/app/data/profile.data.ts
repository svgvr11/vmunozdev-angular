import { IconName } from '../components/icon/icon.component';

export interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ExperienceEntry {
  /** Human readable period, e.g. "Aug 2023 – Mar 2024". */
  period: string;
  /** Machine readable start date (ISO, yyyy or yyyy-mm). */
  datetime: string;
  title: string;
  subtitle: string;
  description: string;
  logo?: Logo;
}

export interface ExperienceGroup {
  id: string;
  heading: string;
  period?: string;
  icon: IconName;
  logo?: Logo;
  entries: ExperienceEntry[];
}

export interface CvFile {
  lang: string;
  label: string;
  href: string;
  filename: string;
}

export interface Project {
  name: string;
  url: string;
  /** Short monogram shown in the project tile. */
  mark: string;
  description: string;
  tags: string[];
}

export interface ProjectStudio {
  id: string;
  name: string;
  description: string;
  projects: Project[];
}

export const PROJECTS: ProjectStudio[] = [
  {
    id: 'atenis',
    name: 'Atenis.app',
    description: 'My own product studio, where I design, build and ship small, focused web apps.',
    projects: [
      {
        name: 'The Lister',
        url: 'https://thelister.atenis.app',
        mark: 'TL',
        description: 'A lists and notes app to keep tasks, ideas and everyday lists organized in one place.',
        tags: ['Lists', 'Notes', 'Productivity'],
      },
      {
        name: 'QRLand',
        url: 'https://qrland.atenis.app',
        mark: 'QR',
        description: 'A free QR code generator that creates both classic and 3D QR codes.',
        tags: ['QR codes', '3D', 'Free'],
      },
    ],
  },
];

const IMG = 'assets/img/';

const logos = {
  ntt: { src: `${IMG}nttdata-logo.svg`, alt: 'NTT Data', width: 510, height: 83 },
  bciWib: { src: `${IMG}bci-wsb-logo.png`, alt: 'BCI Wholesale & Investment Banking', width: 674, height: 200 },
  alemana: { src: `${IMG}alemana-logo.svg`, alt: 'Clínica Alemana', width: 1280, height: 276 },
  idb: { src: `${IMG}idb-logo.png`, alt: 'Inter-American Development Bank', width: 245, height: 98 },
  avangrid: { src: `${IMG}avangrid-logo.svg`, alt: 'Avangrid', width: 878, height: 323 },
  santander: { src: `${IMG}santanderam-logo.svg`, alt: 'Santander Asset Management', width: 229, height: 63 },
  movistar: { src: `${IMG}movistar-empresas-logo.svg`, alt: 'Movistar Empresas', width: 138, height: 37 },
} satisfies Record<string, Logo>;

export const CV_FILES: CvFile[] = [
  { lang: 'es', label: 'CV en español', href: 'assets/pdf/cv-vmunoz-es.pdf', filename: 'cv-vmunoz-es.pdf' },
  { lang: 'en', label: 'Resume in English', href: 'assets/pdf/resume-vmunoz.pdf', filename: 'resume-vmunoz.pdf' },
];

export const EXPERIENCE: ExperienceGroup[] = [
  {
    id: 'ntt-data',
    heading: 'NTT Data',
    period: 'Dec 2020 – Mar 2024',
    icon: 'briefcase',
    logo: logos.ntt,
    entries: [
      {
        period: 'Aug 2023 – Mar 2024',
        datetime: '2023-08',
        title: 'Movistar Empresas',
        subtitle: 'Angular UI Developer',
        description:
          'Built a new front-end for the payment module. Also responsible for defining how styles were used across the project, promoting best practices and continuously running QA on new developments to ensure quality and adherence to the guidelines.',
        logo: logos.movistar,
      },
      {
        period: 'May 2023',
        datetime: '2023-05',
        title: 'Clínica Alemana',
        subtitle: 'Angular UI Developer',
        description:
          'Supported prototyping for a team restructuring modules such as Dentistry and Oncology.',
        logo: logos.alemana,
      },
      {
        period: 'Oct 2022 – Jan 2023',
        datetime: '2022-10',
        title: 'Santander Asset Management',
        subtitle: 'CSS Specialist / Liferay Developer',
        description: 'Developed a new website for Santander Asset Management using Liferay 7.2.',
        logo: logos.santander,
      },
      {
        period: 'Apr 2022 – Oct 2022',
        datetime: '2022-04',
        title: 'Avangrid',
        subtitle: 'CSS Specialist / Liferay Developer',
        description:
          'Solved visual and structural problems involved in migrating nine websites from IBM WebSphere to Liferay CMS.',
        logo: logos.avangrid,
      },
      {
        period: 'Dec 2021 – Apr 2022',
        datetime: '2021-12',
        title: 'Inter-American Development Bank',
        subtitle: 'Angular UI Developer',
        description:
          'Led the development of the new site for the APC service, creating proofs of concept to drive key decisions about how the website was built.',
        logo: logos.idb,
      },
      {
        period: 'Jun 2021 – Nov 2021',
        datetime: '2021-06',
        title: 'Clínica Alemana',
        subtitle: 'Angular UI Developer',
        description:
          'Refactored components from Storybook into Angular components and built web pages for Clínica Alemana, working closely with the Design Experience team.',
        logo: logos.alemana,
      },
      {
        period: 'Jun 2021 – Nov 2021',
        datetime: '2021-06',
        title: 'BCI Wholesale & Investment Banking',
        subtitle: 'Angular UI Developer',
        description:
          'Contributed to “e-sales”, a key internal project: business software for buying and selling stock through BCI, one of the largest banks in Chile.',
        logo: logos.bciWib,
      },
    ],
  },
  {
    id: 'freelance',
    heading: 'Freelance',
    period: '2018 – 2020',
    icon: 'code',
    entries: [
      {
        period: '2018 – 2020',
        datetime: '2018',
        title: 'Freelance',
        subtitle: 'WordPress Site Builder',
        description:
          'Designed, developed and maintained WordPress websites for small contracting companies.',
      },
    ],
  },
  {
    id: 'courses',
    heading: 'Courses & certifications',
    icon: 'award',
    entries: [
      {
        period: 'Oct 2026',
        datetime: '2026-10',
        title: 'Foundations of Project Management',
        subtitle: 'Google',
        description: 'Completed Google’s Foundations of Project Management course. Credential ID: NTJ1A458V2RL.',
      },
      {
        period: 'Oct 2026',
        datetime: '2026-10',
        title: 'Introduction to AI',
        subtitle: 'Google',
        description: 'Completed Google’s Introduction to AI course. Credential ID: BS7FVMCR3KOC.',
      },
      {
        period: 'Feb 2026',
        datetime: '2026-02',
        title: 'Foundations of Liferay Frontend Development',
        subtitle: 'Liferay',
        description: 'Certified in the foundations of front-end development on the Liferay platform.',
      },
      {
        period: '2025',
        datetime: '2025',
        title: 'Flutter Course',
        subtitle: 'Platzi',
        description: 'Completed the Android-oriented Flutter course.',
      },
      {
        period: '2025',
        datetime: '2025',
        title: 'Foundations of Professional Web Development',
        subtitle: 'Platzi',
        description: 'Completed the full learning path for Professional Web Development.',
      },
      {
        period: '2024',
        datetime: '2024',
        title: 'EF SET English Certificate 66/100 (C1 Advanced)',
        subtitle: 'EF SET',
        description: 'Certified in English at C1 Advanced level.',
      },
      {
        period: '2021',
        datetime: '2021',
        title: 'Scrum Fundamentals Certified (SFC)',
        subtitle: 'SCRUMstudy',
        description: 'Completed the SFC certification.',
      },
    ],
  },
  {
    id: 'education',
    heading: 'Education',
    icon: 'mortarboard',
    entries: [
      {
        period: '2018 – 2023',
        datetime: '2018',
        title: 'Advanced Technical Degree in Programming Analysis',
        subtitle: 'Universidad Tecnológica de Chile INACAP',
        description: 'Graduated with a diploma in the Programmer Analyst program.',
      },
    ],
  },
];
