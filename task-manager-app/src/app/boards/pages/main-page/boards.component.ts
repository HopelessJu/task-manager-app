import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import { BoardItem } from '../../models/boards.model';
import { CustomErrorHandlerService } from 'src/app/custom-error-handler.service';



@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  boardList: BoardItem[] = [];

  constructor(private boardsService: BoardsService, private handleError: CustomErrorHandlerService, private router: Router) {}

  ngOnInit(): void {
    this.getBoards();
  }

 public getBoards() {
    this.boardsService.getBoards().subscribe({
      next: (boardList) => {
      this.boardList = boardList;
      },
      error: (error) => {
        if(error.status === 403) {
          this.router.navigate(['']);
          localStorage.clear();
        }
      }
    })
  }
}
