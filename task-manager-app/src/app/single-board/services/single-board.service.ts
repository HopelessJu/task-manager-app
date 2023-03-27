import { BoardItem } from './../../boards/models/boards.model';
import { TaskItem } from './../columns/models/task.model';
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

  getUpdatedHeaders() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return headers;
  }

  getBoard(BoardId:string): Observable<BoardItem> {
    const url = `${this.urlBody}/boards/${BoardId}`
    return this.httpClient.get<BoardItem>(url, {headers: this.getUpdatedHeaders()})
  }

  getColumns(BoardId: string): Observable<ColumnItem[]> {
    const url = `${this.urlBody}/boards/${BoardId}/columns`
    return this.httpClient.get<ColumnItem[]>(url, {headers: this.getUpdatedHeaders()});
  }

  getTasks(boardId:string, columnId:string): Observable<TaskItem[]> {
    const url = `${this.urlBody}/boards/${boardId}/columns/${columnId}/tasks`;
    return this.httpClient.get<TaskItem[]>(url, {headers: this.getUpdatedHeaders()})
  }

  createColumn(BoardId: string, item: ColumnItem): Observable<ColumnItem> {
    const url = `${this.urlBody}/boards/${BoardId}/columns`;
    return this.httpClient.post<ColumnItem>(url, item, {headers: this.getUpdatedHeaders()})
  }

  createTask(boardId:string, columnId:string, item: TaskItem): Observable<TaskItem> {
    const url = `${this.urlBody}/boards/${boardId}/columns/${columnId}/tasks`;
    return this.httpClient.post<TaskItem>(url, item, {headers: this.getUpdatedHeaders()})
  }

  updateTask(boardId:string, columnId: string, taskId: string, item: TaskItem): Observable<TaskItem> {
    const taskForSending = {...item};
    delete taskForSending._id;
    delete taskForSending.boardId;

    const url = `${this.urlBody}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`;
    return this.httpClient.put<TaskItem>(url, taskForSending, {headers: this.getUpdatedHeaders()} )
  }

  updateColumn(column: ColumnItem): Observable<ColumnItem> {
    const url = `${this.urlBody}/boards/${column.boardId}/columns/${column._id}`;
    const columnForSend = {...column};
    delete columnForSend._id;
    delete columnForSend.boardId;
    return this.httpClient.put<ColumnItem>(url, columnForSend, {headers: this.getUpdatedHeaders()})
    }

  deleteColumn(boardId:string, columnId: string): Observable<ColumnItem> {
    const url = `${this.urlBody}/boards/${boardId}/columns/${columnId}`;
    return this.httpClient.delete<ColumnItem>(url, {headers: this.getUpdatedHeaders()})

  }

  deleteTask(boardId:string, columnId: string, taskId: string): Observable<TaskItem> {
    const url = `${this.urlBody}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`;
    return this.httpClient.delete<TaskItem>(url, {headers: this.getUpdatedHeaders()})
  }

}
