import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './pages/bio/bio.component';
import { HomeComponent } from './pages/home/home.component';
import { UsesComponent } from './pages/uses/uses.component';
import { PolicyListComponent } from '../policy-list/policy-list.component';

const routes: Routes = [
  {
    path: 'crud',
    component: PolicyListComponent
  },
  {
    path: 'uses',
    component: UsesComponent
  },
  {
    path: 'bio',
    component: BioComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DotioRoutingModule { }
