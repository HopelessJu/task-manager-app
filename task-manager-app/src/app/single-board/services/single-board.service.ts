import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColumnItem } from '../columns/models/column.model';

@Injectable({
  providedIn: 'root'
})
export class SingleBoardService {
  private urlBody = `https://final-task-backend-production-a3f5.up.railway.app`;

  constructor(private httpClient: HttpClient) { }

  getColumns(BoardId: string): Observable<ColumnItem[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = `${this.urlBody}/boards/${BoardId}/columns`
    return this.httpClient.get<ColumnItem[]>(url, {headers});
  }
}
