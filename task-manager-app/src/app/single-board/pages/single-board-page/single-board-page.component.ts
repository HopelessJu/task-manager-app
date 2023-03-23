import { SingleBoardService } from './../../services/single-board.service';
import { ColumnItem } from './../../columns/models/column.model';
import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-board-page',
  templateUrl: './single-board-page.component.html',
  styleUrls: ['./single-board-page.component.scss']
})
export class SingleBoardPageComponent implements OnInit {
  boardId:string = '';

  columnList: ColumnItem[] = [];

  constructor(private singleBoardService: SingleBoardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.boardId = params['boardId'];
      this.getColumns()
     console.log(this.columnList)
    });
  }

  public getColumns() {
    this.singleBoardService.getColumns(this.boardId).subscribe((columnList: ColumnItem[]) => {
      this.columnList = columnList;
    });
  }
}
