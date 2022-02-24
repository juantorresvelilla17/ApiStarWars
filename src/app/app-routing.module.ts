import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'people-list', loadChildren: () => import('./components/pages/peoples/peoples-list/peoples-list.module').then(m => m.PeoplesListModule) },
  { path: 'people-details/id', loadChildren: () => import('./components/pages/peoples/peoples-details/peoples-details.module').then(m => m.PeoplesDetailsModule) },
  { path: 'films', loadChildren: () => import('./components/pages/films/films/films.module').then(m => m.FilmsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
