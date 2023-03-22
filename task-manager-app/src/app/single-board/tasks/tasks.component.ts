import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  isClicked: boolean = false;

  constructor() {}

  onRemoveTaskClick() {
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
