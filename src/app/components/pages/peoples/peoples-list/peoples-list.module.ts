import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesListRoutingModule } from './peoples-list-routing.module';
import { PeoplesListComponent } from './peoples-list.component';
import { SearchModule } from '@app/shared/components/search/search.module';


@NgModule({
  declarations: [
    PeoplesListComponent
  ],
  imports: [
    CommonModule,
    PeoplesListRoutingModule,
    SearchModule
  ]
})
export class PeoplesListModule { }
