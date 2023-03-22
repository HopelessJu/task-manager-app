import { UserItem } from './../../../authentication/models/user.model';

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
    users: [''],
  }
  boardList: BoardItem[] = [];
  showForm: boolean = false;

  constructor (private boardsService: BoardsService) {}

  showCreateForm() {
    this.showForm = true;
  }

  closeCreateForm() {
    this.showForm = false;
  }

  onCreateBoardBtnClick() {
    const mappedUsers = (JSON.parse(localStorage.getItem('userList') || '')).map((obj:UserItem) => obj.login);
    const currentUser = localStorage.getItem('currentUser');
    const parsed = JSON.parse(currentUser || '');
    this.boardPostRequestObj.owner = parsed.login;
    this.boardPostRequestObj.users = mappedUsers;
    this.boardsService.createBoard(this.boardPostRequestObj).subscribe((item) => {
      console.log(item)
      this.getBoards();
    })
  }

  private getBoards() {
    this.boardsService.getBoards().subscribe((boardList) => {
      this.boardList = boardList;
      console.log(this.boardList)
    });
  }
}
