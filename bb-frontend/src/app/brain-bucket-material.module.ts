import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatRadioModule,
  MatTabsModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule
  ]
})
export class BrainBucketMaterialModule { }
