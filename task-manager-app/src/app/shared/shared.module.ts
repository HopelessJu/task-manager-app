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
import { TranslatePipePipe } from './translate-pipe.pipe';


@NgModule({
  declarations: [
    ConfirmationModalComponent,
    ColumnModalComponent,
    TaskModalComponent,
    TranslatePipePipe,
  ],
  exports: [
    ConfirmationModalComponent,
    ColumnModalComponent,
    TaskModalComponent,
    TranslatePipePipe
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
