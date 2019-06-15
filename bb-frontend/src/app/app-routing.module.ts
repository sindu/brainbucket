import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGroupViewComponent } from './create-group-view/create-group-view.component';
import { IdeasListViewComponent } from './ideas-list-view/ideas-list-view.component';
import { UserGuard } from './user.guard';
import { VoteViewComponent } from './vote-view/vote-view.component';
import { LockedGuard } from './locked.guard';

const routes: Routes = [
  { path: '', component: CreateGroupViewComponent, canActivate: [UserGuard] },
  { path: ':id', component: IdeasListViewComponent, canActivate: [UserGuard, LockedGuard] },
  { path: ':id/vote', component: VoteViewComponent, canActivate: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
