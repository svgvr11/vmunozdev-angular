import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import { ExperienceDataInterface } from "../../../interfaces/experience-data-interface";

@Component({
  selector: 'app-accordion-cv',
  templateUrl: './accordion-cv.component.html',
  styleUrls: ['./accordion-cv.component.scss']
})
export class AccordionCvComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<any>();

  nttWorkExpArray: ExperienceDataInterface[] = [
    {
      startDate: 'Aug 2023',
      endDate: 'Mar 2024',
      projectName: 'Movistar Empresas',
      positionName: 'Angular UI Developer',
      id: 'nttMovistar'
    },
    {
      startDate: 'May 2023',
      endDate: 'May 2023',
      projectName: 'Clinica Alemana',
      positionName: 'Angular UI Developer',
      id: 'nttClinica2'
    },
    {
      startDate: 'Oct 2022',
      endDate: 'Jan 2023',
      projectName: 'Santander Asset Management',
      positionName: 'CSS Specialist',
      id: 'nttSantander'
    },
    {
      startDate: 'Apr 2022',
      endDate: 'Oct 2022',
      projectName: 'Avangrid',
      positionName: 'CSS Specialist',
      id: 'nttAvangrid'
    },
    {
      startDate: 'Dec 2021',
      endDate: 'Apr 2022',
      projectName: 'Inter American Development Bank',
      positionName: 'Angular UI Developer',
      id: 'nttIadb'
    },
    {
      startDate: 'Jun 2021',
      endDate: 'Nov 2021',
      projectName: 'Clinica Alemana',
      positionName: 'Angular UI Developer',
      id: 'nttClinica1'
    },
    {
      startDate: 'Jun 2021',
      endDate: 'Nov 2021',
      projectName: 'BCI Wholesale & Investment Banking',
      positionName: 'Angular UI Developer',
      id: 'nttBciWib'
    },
  ];

  endboxWorkExpArray: ExperienceDataInterface[] = [
    {
      startDate: '2018',
      endDate: '2020',
      projectName: 'Freelance',
      positionName: 'Wordpress Site Builder',
      id: 'freelance'
    }
  ];

  educationExpArray: ExperienceDataInterface[] = [
    {
      startDate: '2018',
      endDate: '2023',
      projectName: 'Programmer Analyst',
      positionName: 'Universidad Tecnologica de Chile INACAP',
      id: 'educationInacap'
    }
  ];


  ngOnInit() {}

  optionSelected(evt: any) {
    evt.stopPropagation();
    const id = evt.target.id;
    this.clickEvent.emit(id);
  }

}
