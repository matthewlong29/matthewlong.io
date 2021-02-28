import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotioComponent } from './dotio.component';

const routes: Routes = [
  {
    path: '',
    component: DotioComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DotioRoutingModule { }
