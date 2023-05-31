import { NgModule } from '@angular/core';
import { AddaAccordionComponent } from './adda-accordion.component';
import { CommonModule, NgIf } from '@angular/common';



@NgModule({
  declarations: [
    AddaAccordionComponent
  ],
  imports: [
    CommonModule,
    // BrowserAnimationsModule
    /*
    BrowserModule,
    */
  ],
  exports: [
    AddaAccordionComponent
  ]
})
export class AddaAccordionModule { }
