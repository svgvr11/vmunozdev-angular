import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-cv',
  templateUrl: './modal-cv.component.html',
  styleUrls: ['./modal-cv.component.scss']
})
export class ModalCvComponent {
  // Url
  urlNttDataLogo = '../../../assets/img/nttdata-logo.svg';
  urlBciWholesaleInvestLogo = '../../../assets/img/bci-wsb-logo.png';
  urlClinicaLogo = '../../../assets/img/alemana-logo.svg';
  urlIdbLogo = '../../../assets/img/idb-logo.png';
  urlAvangridLogo = '../../../assets/img/avangrid-logo.svg';
  urlSantanderAmLogo = '../../../assets/img/santanderam-logo.svg';
  urlMovistarEmpresasLogo = '../../../assets/img/movistar-empresas-logo.svg';
  // Aparece / desaparece info
  defaultInfo = true;
  nttBci = false;
  nttClinica1 = false;
  nttIadb = false;
  nttAvangrid = false;
  nttSantander = false;
  nttClinica2 = false;
  nttMovistar = false;
  freelance = false;
  educationInacap = false;

  constructor(private http: HttpClient) {}

  handleClickEvent(clickedId: string) {
    console.log('Click event from child component captured!', clickedId);
    switch (clickedId) {
      case 'nttBciWib':
        this.defaultInfo = false;
        this.nttBci = true;
        this.nttClinica1 = false;
        this.nttIadb = false;
        this.nttAvangrid = false;
        this.nttSantander = false;
        this.nttClinica2 = false;
        this.nttMovistar = false;
        this.freelance = false;
        this.educationInacap = false;
        break;
      case 'nttClinica1':
        this.defaultInfo = false;
        this.nttBci = false;
        this.nttClinica1 = true;
        this.nttIadb = false;
        this.nttAvangrid = false;
        this.nttSantander = false;
        this.nttClinica2 = false;
        this.nttMovistar = false;
        this.freelance = false;
        this.educationInacap = false;
        break;
      case 'nttIadb':
        this.defaultInfo = false;
        this.nttBci = false;
        this.nttClinica1 = false;
        this.nttIadb = true;
        this.nttAvangrid = false;
        this.nttSantander = false;
        this.nttClinica2 = false;
        this.nttMovistar = false;
        this.freelance = false;
        this.educationInacap = false;
        break;
      case 'nttAvangrid':
        this.defaultInfo = false;
        this.nttBci = false;
        this.nttClinica1 = false;
        this.nttIadb = false;
        this.nttAvangrid = true;
        this.nttSantander = false;
        this.nttClinica2 = false;
        this.nttMovistar = false;
        this.freelance = false;
        this.educationInacap = false;
        break;
      case 'nttSantander':
        this.defaultInfo = false;
        this.nttBci = false;
        this.nttClinica1 = false;
        this.nttIadb = false;
        this.nttAvangrid = false;
        this.nttSantander = true;
        this.nttClinica2 = false;
        this.nttMovistar = false;
        this.freelance = false;
        this.educationInacap = false;
        break;
      case 'nttClinica2':
        this.defaultInfo = false;
        this.nttBci = false;
        this.nttClinica1 = false;
        this.nttIadb = false;
        this.nttAvangrid = false;
        this.nttSantander = false;
        this.nttClinica2 = true;
        this.nttMovistar = false;
        this.freelance = false;
        this.educationInacap = false;
        break;
      case 'nttMovistar':
        this.defaultInfo = false;
        this.nttBci = false;
        this.nttClinica1 = false;
        this.nttIadb = false;
        this.nttAvangrid = false;
        this.nttSantander = false;
        this.nttClinica2 = false;
        this.nttMovistar = true;
        this.freelance = false;
        this.educationInacap = false;
        break;
      case 'freelance':
        this.defaultInfo = false;
        this.nttBci = false;
        this.nttClinica1 = false;
        this.nttIadb = false;
        this.nttAvangrid = false;
        this.nttSantander = false;
        this.nttClinica2 = false;
        this.nttMovistar = false;
        this.freelance = true;
        this.educationInacap = false;
        break;
      case 'educationInacap':
        this.defaultInfo = false;
        this.nttBci = false;
        this.nttClinica1 = false;
        this.nttIadb = false;
        this.nttAvangrid = false;
        this.nttSantander = false;
        this.nttClinica2 = false;
        this.nttMovistar = false;
        this.freelance = false;
        this.educationInacap = true;
        break;
    }
  }

  downloadPDF(url: string, nombreArchivo: string) {
    this.http.get(url, { responseType: 'blob' })
      .subscribe(
        (data: Blob) => {
          const archivo = new Blob([data], { type: 'application/pdf' });
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(archivo);
          link.download = nombreArchivo;
          link.click();
        },
        (error) => {
          console.error('Error al descargar el archivo:', error);
        }
      );
  }

}
