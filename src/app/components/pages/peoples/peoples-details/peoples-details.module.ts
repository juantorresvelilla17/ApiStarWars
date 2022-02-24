import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesDetailsRoutingModule } from './peoples-details-routing.module';
import { PeoplesDetailsComponent } from './peoples-details.component';


@NgModule({
  declarations: [
    PeoplesDetailsComponent
  ],
  imports: [
    CommonModule,
    PeoplesDetailsRoutingModule
  ]
})
export class PeoplesDetailsModule { }
