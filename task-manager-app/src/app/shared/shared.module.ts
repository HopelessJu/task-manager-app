import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormStyle } from '@angular/common';
import { MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ColumnModalComponent } from './column-modal/column-modal.component';
import { TaskModalComponent } from './task-modal/task-modal.component';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';


@NgModule({
  declarations: [
    ConfirmationModalComponent,
    ColumnModalComponent,
    TaskModalComponent,
    EditUserModalComponent,
  ],
  exports: [
    ConfirmationModalComponent,
    ColumnModalComponent,
    TaskModalComponent,
    EditUserModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ]
})
export class SharedModule { }
