import { Component, OnInit } from '@angular/core';
import { BoardsService } from '../../services/boards.service';
import { BoardItem } from '../../models/boards.model';


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  boardList: BoardItem[] = [];

  constructor(private boardsService: BoardsService) {}

  ngOnInit(): void {
    // this.getBoards()
  }

 private getBoards() {
    this.boardsService.getBoards().subscribe((boardList) => {
      this.boardList = boardList;
    });
  }
}
