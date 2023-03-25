import { TaskEditSharedService } from './services/task-edit-shared.service';
import { TasksComponent } from './tasks/task/tasks.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleBoardPageComponent } from './pages/single-board-page/single-board-page.component';
import { CreateColumnComponent } from './columns/create-column/create-column.component';
import { ColumnComponent } from './columns/column/column.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '../shared/shared.module';
import { SingleBoardService } from './services/single-board.service';


@NgModule({
  declarations: [
    SingleBoardPageComponent,
    CreateColumnComponent,
    ColumnComponent,
    TasksComponent,
    EditTaskComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    MatIconModule,
    SharedModule,
    FormsModule,
    DragDropModule
  ],
  providers: [
    SingleBoardService,
    TaskEditSharedService
  ],
})
export class SingleBoardModule { }
