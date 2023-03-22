import { Component, Input, OnInit } from '@angular/core';
import { BoardItem } from '../../models/boards.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  @Input() item: BoardItem | null = null;



  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onBoardClick() {
    this.router.navigate(['board'])
  }

}
