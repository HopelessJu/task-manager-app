import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ColumnModalComponent } from './column-modal/column-modal.component';



@NgModule({
  declarations: [
    ConfirmationModalComponent,
    ColumnModalComponent
  ],
  exports: [
    ConfirmationModalComponent,
    ColumnModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
