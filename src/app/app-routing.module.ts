import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainHeroComponent} from "./components/main-hero/main-hero.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
