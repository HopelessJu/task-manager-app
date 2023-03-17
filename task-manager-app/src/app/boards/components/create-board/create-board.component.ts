import { BoardItem } from './../../models/boards.model';
import { BoardsService } from './../../services/boards.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent {
  boardPostRequestObj: BoardItem = {
    title: '',
    owner: '',
    users: [
    ''
  ]
  }
  boardList: BoardItem[] = [];
  showForm: boolean = false;

  // @Output() addTodo:EventEmitter<BoardItem> = new EventEmitter<BoardItem>();

  constructor (private boardsService: BoardsService) {}

  showCreateForm() {
    this.showForm = true;
  }

  closeCreateForm() {
    this.showForm = false;
  }

  onCreateBoardBtnClick() {
    this.boardsService.createBoard(this.boardPostRequestObj).subscribe((item) => {
      this.getBoards()
    })
  }

  private getBoards() {
    this.boardsService.getBoards().subscribe((boardList) => {
      this.boardList = boardList;
    });
  }
}
