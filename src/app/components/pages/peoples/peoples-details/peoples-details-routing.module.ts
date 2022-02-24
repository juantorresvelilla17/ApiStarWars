import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeoplesDetailsComponent } from './peoples-details.component';

const routes: Routes = [{ path: '', component: PeoplesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesDetailsRoutingModule { }
