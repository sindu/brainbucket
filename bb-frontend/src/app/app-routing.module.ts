import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGroupViewComponent } from './new-group-view/new-group-view.component';
import { IdeasListViewComponent } from './ideas-list-view/ideas-list-view.component';

const routes: Routes = [
  { path: '', component: NewGroupViewComponent },
  { path: ':id', component: IdeasListViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
