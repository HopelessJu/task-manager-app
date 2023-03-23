import { Component } from '@angular/core';

@Component({
  selector: 'app-create-column',
  templateUrl: './create-column.component.html',
  styleUrls: ['./create-column.component.scss']
})
export class CreateColumnComponent {
  isClicked: boolean = false;

  constructor() {}

  onCreateColumnClick() {
    this.isClicked = true;
  }

  cancel() {
    this.isClicked = false;
  }

  confirm() {
    console.log('confirm')
    this.isClicked = false;
  }



}
