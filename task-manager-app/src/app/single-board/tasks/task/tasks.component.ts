import { ColumnItem } from './../../columns/models/column.model';
import { SingleBoardService } from './../../services/single-board.service';
import { TaskItem } from './../../columns/models/task.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TaskEditSharedService } from '../../services/task-edit-shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Output() deleted = new EventEmitter<TaskItem>()
  @Input() item: TaskItem | null = null;
  toDelete: boolean = false;
  toEdit: boolean = false;
  boardId: string = '';
  updateObj: TaskItem ={
    title: '',
    order: 0,
    description: '',
    // boardId: '',
    // columnId: '',
    userId: 0,
    users: ['']
  }

  constructor(private editService: TaskEditSharedService, private singleBoardService: SingleBoardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.updateObj.columnId = this.item?.columnId;
    this.route.params.subscribe(params => {
      this.boardId = params['boardId'];
      // this.updateObj.boardId = this.boardId;
    const user = (JSON.parse(localStorage.getItem('currentUser') || '' ));
    this.updateObj.userId = user?._id
    this.updateObj.columnId = this.item?.columnId;
  })
}

  onEditTaskClick() {
    this.sendData();
    this.toEdit = true;
  }

  onRemoveTaskClick() {
    this.toDelete = true;
  }

  cancelDelete() {
    this.toDelete = false;
  }

  confirmDelete() {
    this.singleBoardService.deleteTask(this.boardId, this.item?.columnId || '', this.item?._id || '').subscribe(() =>{
      this.deleted.emit()
    })
    this.toDelete = false;
  }

  cancelEdit() {
    this.toEdit = false;
  }

  confirmEdit(event: { title: string, description: string }) {
    this.updateObj.title = event.title;
    this.updateObj.description = event.description;
    this.singleBoardService.updateTask(this.boardId, this.item?.columnId || '', this.item?._id || '', this.updateObj).subscribe(item => {
      this.item = item;
    })
    this.toEdit = false;
  }

  private sendData() {
    const title = this.item?.title || '';
    const description = this.item?.description || '';
    this.editService.setSharedData({title, description});
  }
}
