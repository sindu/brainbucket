import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrainBucketMaterialModule } from './brain-bucket-material.module';
import { CreateGroupViewComponent } from './create-group-view/create-group-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { IdeasListViewComponent } from './ideas-list-view/ideas-list-view.component';
import { CreateIdeaContainerComponent } from './create-idea-container/create-idea-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGroupViewComponent,
    GroupsListComponent,
    IdeasListViewComponent,
    CreateIdeaContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrainBucketMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
