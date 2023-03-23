import { BoardItem } from './../../models/boards.model';
import { BoardsService } from './../../services/boards.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  @Input() item: BoardItem | null = null;
  @Output() boardDeleted = new EventEmitter<BoardItem>();
  isClicked: boolean = false;
  boardList: BoardItem[] = [];

  constructor(private router: Router, private boardsService: BoardsService) {
  }

  ngOnInit(): void {
  }

  onBoardClick(boardId?: string) {
    this.router.navigate(['board', `${boardId}`])
  }

  onRemoveBoardClick() {
    this.isClicked = true;
  }

  cancel() {
    this.isClicked = false;
  }

  confirm(boardId?: string) {
    this.boardsService.deleteBoard(boardId || '').subscribe((item) => {
      this.boardDeleted.emit(item);
      this.isClicked = false;
    })
  }
}
