import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TaskEditSharedService } from '../../services/task-edit-shared.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  @Output() cancelled = new EventEmitter();
  @Output() confirmed = new EventEmitter<{title: string, description: string}>();
  title: string = '';
  description: string = '';

  constructor( private editService: TaskEditSharedService) {}

  ngOnInit() {
    const sharedData = this.editService.getSharedData();
    this.title = sharedData.title;
    this.description = sharedData.description;
    this.editService.sharedData$.subscribe(data => {
      this.title = data.title;
      this.description = data.description;
    });
  }

  onCancel() {
    this.cancelled.emit();
  }

  onConfirm() {
    this.confirmed.emit({ title: this.title, description: this.description});
  }
}
