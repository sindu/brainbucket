import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGroupViewComponent } from './create-group-view/create-group-view.component';
import { IdeasListViewComponent } from './ideas-list-view/ideas-list-view.component';

const routes: Routes = [
  { path: '', component: CreateGroupViewComponent },
  { path: ':id', component: IdeasListViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
