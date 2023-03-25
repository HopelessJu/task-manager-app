import { SingleBoardService } from './../../services/single-board.service';
import { Component, Input, OnInit, Output, ViewChildren, EventEmitter } from '@angular/core';
import { ColumnItem } from '../models/column.model';
import { TaskItem } from '../models/task.model';
import { ActivatedRoute } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Output() deleted = new EventEmitter<ColumnItem>;

  @Input() item: ColumnItem | null = null;
  columnId: string = '';
  toDelete: boolean = false;
  addTask: boolean = false;
  boardId: string = '';
  @Input() taskList: TaskItem[] = [];
  @Input() columnList: ColumnItem[] = [];

  taskObj: TaskItem = {
    title: "string",
    order: 0,
    description: "string",
    userId: 0,
    users: [''],
  }

  constructor(private singleBoardService: SingleBoardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const user = (JSON.parse(localStorage.getItem('currentUser') || '' ));
    this.taskObj.userId = user._id
    this.columnId = this.item?._id || '';
    this.route.params.subscribe(params => {
      this.boardId = params['boardId'];
    });
    this.getTasks()
  }

  drop(event: CdkDragDrop<TaskItem[]>, newColumnId?: string) {
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
    event.item.data.order = event.currentIndex;
    event.item.data.columnId = newColumnId;

    event.container.data.forEach((taskInColumn, index) => {
      this.singleBoardService.updateTask(this.boardId, newColumnId || '', taskInColumn._id || '', {...taskInColumn, order: index}).subscribe();
    })
  }

  onAddTaskClick() {
    this.addTask = true;
  }

  cancelAdd() {
    this.addTask = false;
  }

  confirmAdd(event: { title: string, description: string }) {
    this.taskObj.title = event.title;
    this.taskObj.description = event.description;
    this.singleBoardService.createTask(this.boardId, this.columnId, this.taskObj).subscribe(item => {
      console.log(item)
      this.getTasks()
    })
    this.addTask = false;
  }

  onRemoveColumnClick() {
    this.toDelete = true;
  }

  cancelDelete() {
    this.toDelete = false;
  }

  confirmDelete() {
    this.singleBoardService.deleteColumn(this.boardId, this.columnId).subscribe(() => {
      this.deleted.emit();
    })
    this.toDelete = false;
  }

  public getTasks() {
    // this.columnId = this.item?._id || '';
    this.singleBoardService.getTasks(this.boardId, this.columnId).subscribe(taskList => {
      this.taskList = taskList.sort((taskA, taskB) => taskA.order - taskB.order);
    })
  }
}
