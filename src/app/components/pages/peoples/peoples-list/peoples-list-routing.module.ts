import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeoplesListComponent } from './peoples-list.component';

const routes: Routes = [{ path: '', component: PeoplesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesListRoutingModule { }
