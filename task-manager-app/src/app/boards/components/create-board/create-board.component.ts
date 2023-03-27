import { AuthenticationService } from './../../../authentication/services/authentication.service';
import { UserItem } from './../../../authentication/models/user.model';
import { BoardItem } from './../../models/boards.model';
import { BoardsService } from './../../services/boards.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { CustomErrorHandlerService } from 'src/app/custom-error-handler.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.scss']
})
export class CreateBoardComponent {
  @Output() boardCreated = new EventEmitter<BoardItem>();
  boardPostRequestObj: BoardItem = {
    title: '',
    owner: '',
    users: [''],
  }
  boardList: BoardItem[] = [];
  showForm: boolean = false;

  constructor (private boardsService: BoardsService, private handleError: CustomErrorHandlerService, private router: Router, private authService: AuthenticationService) {}

  showCreateForm() {
    this.showForm = true;
  }

  closeCreateForm() {
    this.boardPostRequestObj.title = '';
    this.showForm = false;
  }

  onCreateBoardBtnClick() {
    const mappedUsers = (JSON.parse(localStorage.getItem('userList') || '')).map((obj:UserItem) => obj.login);
    const currentUser = localStorage.getItem('currentUser');
    const parsed = JSON.parse(currentUser || '');
    this.boardPostRequestObj.owner = parsed.login;
    this.boardPostRequestObj.users = mappedUsers;
    this.boardsService.createBoard(this.boardPostRequestObj).subscribe({
      next: (item) => {
        this.boardCreated.emit(item)
        this.showForm = false;
        this.boardPostRequestObj.title = '';
      },
      error: (error) => {
        if(error.status === 403) {
          localStorage.clear();
          this.router.navigate(['']);
        }
      }
    })
  }
}
