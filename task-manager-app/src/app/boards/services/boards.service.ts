import { BoardItem } from './../models/boards.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class BoardsService {
  private url = 'https://final-task-backend-production-a3f5.up.railway.app/boards';

  constructor(private httpClient: HttpClient) { }

  getBoards(): Observable<BoardItem[]> {
    return this.httpClient.get<BoardItem[]>(this.url)
  }

  createBoard(item: BoardItem): Observable<BoardItem> {
    return this.httpClient.post<BoardItem>(this.url, item)
  }


}
