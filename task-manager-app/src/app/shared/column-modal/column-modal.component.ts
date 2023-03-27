import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-column-modal',
  templateUrl: './column-modal.component.html',
  styleUrls: ['./column-modal.component.scss']
})
export class ColumnModalComponent {
  @Output() cancelled = new EventEmitter();
  @Output() confirmed = new EventEmitter();
  title: string = '';

  onCancel() {
    this.cancelled.emit();
  }

  onConfirm() {
    this.confirmed.emit(this.title);
  }

}
