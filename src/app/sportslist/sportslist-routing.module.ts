import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportslistPage } from './sportslist.page';

const routes: Routes = [
  {
    path: '',
    component: SportslistPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportslistPageRoutingModule {}
