import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';



@NgModule({
  declarations: [CarsListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CarsListComponent
  ]
})
export class CarsModule { }
