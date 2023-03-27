import { CustomErrorHandlerService } from 'src/app/custom-error-handler.service';
import { ColumnItem } from './../models/column.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SingleBoardService } from '../../services/single-board.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-column',
  templateUrl: './create-column.component.html',
  styleUrls: ['./create-column.component.scss']
})
export class CreateColumnComponent {
  @Input() boardId: string = '';
  @Output() columnCreated = new EventEmitter<ColumnItem>();
  columnObj:ColumnItem = {
    title: '',
    order: 0
  }

  isClicked: boolean = false;

  constructor(private singleBoardService: SingleBoardService, private route: ActivatedRoute, private router: Router, private handleError: CustomErrorHandlerService) {}

  onCreateColumnClick() {
    this.isClicked = true;
  }

  cancel() {
    this.isClicked = false;
  }

  confirm(inputValue: string) {
    this.columnObj.title = inputValue;
    this.route.params.subscribe(params => {
    this.boardId = params['boardId'];
  });
  this.singleBoardService.createColumn(this.boardId, this.columnObj).subscribe({
    next: item => {
    this.columnCreated.emit();
    },
    error: (error) => {
      if(error.status === 403) {
        this.router.navigate(['']);
        localStorage.clear();
      }
    }
  })
  this.isClicked = false;
}



}
