import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGroupViewComponent } from './new-group-view/new-group-view.component';

const routes: Routes = [{ path: '', component: NewGroupViewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
