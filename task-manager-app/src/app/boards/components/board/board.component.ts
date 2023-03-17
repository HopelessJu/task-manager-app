import { Component, Input, OnInit } from '@angular/core';
import { BoardItem } from '../../models/boards.model';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  @Input() item: BoardItem | null = null;


  constructor() {}

  ngOnInit(): void {

  }

}
