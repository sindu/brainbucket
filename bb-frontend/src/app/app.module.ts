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
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { VoteViewComponent } from './vote-view/vote-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateGroupViewComponent,
    GroupsListComponent,
    IdeasListViewComponent,
    CreateIdeaContainerComponent,
    GroupDetailComponent,
    VoteViewComponent,
    GroupDetailComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrainBucketMaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
