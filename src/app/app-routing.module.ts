import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sportslist',
    loadChildren: () => import('./sportslist/sportslist.module').then( m => m.SportslistPageModule)
  },
  {
    path: 'answers',
    loadChildren: () => import('./answers/answers.module').then( m => m.AnswersPageModule)
  },
  {
    path: 'comment',
    loadChildren: () => import('./comment/comment.module').then( m => m.CommentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
