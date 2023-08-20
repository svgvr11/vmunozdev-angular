import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {ModalCvComponent} from "../modal-cv/modal-cv.component";
import {NgbModal, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main-hero',
  templateUrl: './main-hero.component.html',
  styleUrls: ['./main-hero.component.scss'],
})
export class MainHeroComponent {
  constructor(private modalService: NgbModal) {}

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true, size: 'xl', centered: true });
  }

}
