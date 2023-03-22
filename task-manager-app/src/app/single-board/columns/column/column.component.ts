import { Component } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
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
