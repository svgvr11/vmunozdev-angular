import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ModalCvComponent} from "../modal-cv/modal-cv.component";

@Component({
  selector: 'app-main-hero',
  templateUrl: './main-hero.component.html',
  styleUrls: ['./main-hero.component.scss']
})
export class MainHeroComponent {
  ngOnInit() {}
  modalTitle = 'Profile update';
  modalContent = 'content'; // Aquí debe ser la referencia a tu ng-template #content
  @ViewChild('modalRef', { static: false }) modal?: ModalCvComponent;

  constructor() {}
  openModal() {
    debugger;
    this.modal?.open(this.modalContent);
  }
  handleModalClose(event: any) {
    if (event.status === 'closed') {
      console.log('Modal cerrado con:', event.result);
    } else if (event.status === 'dismissed') {
      console.log('Modal despedido:', event.reason);
    }
  }
}
