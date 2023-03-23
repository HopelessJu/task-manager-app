import { Component, Input } from '@angular/core';
import { ColumnItem } from '../models/column.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() item: ColumnItem | null = null;
  isClicked: boolean = false;

  constructor() {}

  onRemoveColumnClick() {
    this.isClicked = true;
   console.log('hello')
  }

  cancel() {
    this.isClicked = false;
  }

  confirm() {
    console.log('deleted')
    this.isClicked = false;
  }
}
