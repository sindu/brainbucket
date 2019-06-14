import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrainBucketMaterialModule } from './brain-bucket-material.module';
import { NewGroupViewComponent } from './new-group-view/new-group-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IdeasListViewComponent } from './ideas-list-view/ideas-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGroupViewComponent,
    IdeasListViewComponent
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
