import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionCvComponent } from './accordion-cv.component';

describe('AccordionCvComponent', () => {
  let component: AccordionCvComponent;
  let fixture: ComponentFixture<AccordionCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionCvComponent]
    });
    fixture = TestBed.createComponent(AccordionCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
