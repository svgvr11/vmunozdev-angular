import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeroComponent } from './components/main-hero/main-hero.component';
import { ModalCvComponent } from './components/modal-cv/modal-cv.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionCvComponent } from './components/modal-cv/accordion-cv/accordion-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeroComponent,
    ModalCvComponent,
    AccordionCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
