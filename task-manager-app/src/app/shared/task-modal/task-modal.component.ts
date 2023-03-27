import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent {
  @Output() cancelled = new EventEmitter();
  @Output() confirmed = new EventEmitter<{title: string, description: string}>();
  title: string = '';
  description: string = '';

  onCancel() {
    this.cancelled.emit();
  }

  onConfirm() {
    this.confirmed.emit({ title: this.title, description: this.description});
  }
}
