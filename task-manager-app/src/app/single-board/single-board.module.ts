import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBoardPageComponent } from './pages/single-board-page/single-board-page.component';
import { CreateColumnComponent } from './columns/create-column/create-column.component';
import { ColumnComponent } from './columns/column/column.component';
import { RouterModule } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TasksComponent } from './tasks/tasks.component';



@NgModule({
  declarations: [
    SingleBoardPageComponent,
    CreateColumnComponent,
    ColumnComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    MatIconModule
  ]
})
export class SingleBoardModule { }
