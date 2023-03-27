import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './pages/main-page/boards.component';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { BoardComponent } from './components/board/board.component';
import { BoardsService } from './services/boards.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    BoardsComponent,
    CreateBoardComponent,
    BoardComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    BoardsService,
  ],
})
export class BoardsModule { }
