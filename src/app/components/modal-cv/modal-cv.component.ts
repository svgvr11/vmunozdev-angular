import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-cv',
  templateUrl: './modal-cv.component.html',
  styleUrls: ['./modal-cv.component.scss']
})
export class ModalCvComponent {
  @Input() modalTitle: string = '';
  @Input() modalContent: string = '';
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  closeResult = '';
  constructor(private modalService: NgbModal) {}

  open(content: any) {
    const modalRef = this.modalService.open(this.modalContent, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.result.then(
      (result) => {
        this.onClose.emit({ status: 'closed', result });
      },
      (reason) => {
        this.onClose.emit({ status: 'dismissed', reason });
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
