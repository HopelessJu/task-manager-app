import { BoardItem } from './../models/boards.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class BoardsService {
  private url = 'https://final-task-backend-production-a3f5.up.railway.app/boards';

  constructor(private httpClient: HttpClient) { }

  getBoards(): Observable<BoardItem[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get<BoardItem[]>(this.url, {headers});
  }

  createBoard(item: BoardItem): Observable<BoardItem> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.post<BoardItem>(this.url, item, {headers} )
  }


}
