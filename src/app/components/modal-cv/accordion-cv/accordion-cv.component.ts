import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-accordion-cv',
  templateUrl: './accordion-cv.component.html',
  styleUrls: ['./accordion-cv.component.scss']
})
export class AccordionCvComponent {
  @Output() clickEvent = new EventEmitter<any>();
  ngOnInit() {
    const mainItems = document.querySelectorAll(
      '.main-item'
    );
    mainItems.forEach((mainItem) => {
      mainItem.addEventListener('click', () => {
        mainItem.classList.toggle(
          'main-item--open'
        );
      })
    });
  }

  optionSelected(evt: any) {
    const id = evt.target.id;
    this.clickEvent.emit(id);
  }

}
