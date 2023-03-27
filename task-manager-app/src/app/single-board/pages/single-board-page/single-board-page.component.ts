import { CustomErrorHandlerService } from 'src/app/custom-error-handler.service';
import { BoardItem } from './../../../boards/models/boards.model';
import { TaskItem } from './../../columns/models/task.model';
import { SingleBoardService } from './../../services/single-board.service';
import { ColumnItem } from './../../columns/models/column.model';
import { Component, OnInit } from '@angular/core';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-single-board-page',
  templateUrl: './single-board-page.component.html',
  styleUrls: ['./single-board-page.component.scss']
})

export class SingleBoardPageComponent implements OnInit {
  boardId:string = '';
  columnList: ColumnItem[] = [];
  taskList: TaskItem[] = [];
  item: ColumnItem | null = null;
  boardTitle: string = '';

  constructor(private singleBoardService: SingleBoardService, private route: ActivatedRoute, private router: Router, private handleError: CustomErrorHandlerService) {}

  dropColumn(event: CdkDragDrop<ColumnItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  ngOnInit(): void {
    const star: HTMLElement | null = document.querySelector('app-single-board-page');

    if (star) {
      star.style.width = '100%';
    }

    this.route.params.subscribe(params => {
      this.boardId = params['boardId'];
      this.singleBoardService.getBoard(this.boardId).subscribe({
        next: (boardItem) => {
        this.boardTitle = boardItem.title;
        this.getColumns();
        },
        error: (error) => {
          if(error.status === 403) {
            this.router.navigate(['']);
            localStorage.clear();
          }
        }
      })
    })
  }

  public getColumns() {
    this.singleBoardService.getColumns(this.boardId).subscribe({
      next: (columnList: ColumnItem[]) => {
      this.columnList = columnList;
      },
      error: (error) => {
        if(error.status === 403) {
          this.router.navigate(['']);
          localStorage.clear();
        }
      }
    });
  }
}
