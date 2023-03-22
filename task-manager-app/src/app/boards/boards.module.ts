import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsComponent } from './pages/main-page/boards.component';
import { CreateBoardComponent } from './components/create-board/create-board.component';
import { BoardComponent } from './components/board/board.component';
import { BoardsService } from './services/boards.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BoardsComponent,
    CreateBoardComponent,
    BoardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [
    BoardsService,
  ],
})
export class BoardsModule { }
