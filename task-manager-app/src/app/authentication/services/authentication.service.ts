import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserItem } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urlAuth:string = 'https://final-task-backend-production-a3f5.up.railway.app/auth/signup';
  private urlSignin:string = 'https://final-task-backend-production-a3f5.up.railway.app/auth/signin';
  private urlUsers:string = 'https://final-task-backend-production-a3f5.up.railway.app/users';
  private token = new BehaviorSubject('');
  token$ = this.token.asObservable();

  constructor(private httpClient: HttpClient) { }

  changeData(token: string) {
    this.token.next(token)
  };

  getUsers(): Observable<UserItem[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get<UserItem[]>(this.urlUsers, {headers})

  }

  createUser(item:UserItem): Observable<UserItem> {
    return this.httpClient.post<UserItem>(this.urlAuth, item)
  }

  loginUser(item:UserItem): Observable<{token: string}> {
      return this.httpClient.post<{token: string}>(this.urlSignin, item);
  }

  updateUser(userId:string, item:UserItem): Observable<UserItem> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url = `${this.urlUsers}/${userId}`;
    return this.httpClient.put<UserItem>(url, item, {headers})
  }

  deleteUser(userId: string): Observable<UserItem> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const url =`${this.urlUsers}/${userId}`;
    return this.httpClient.delete<UserItem>(url, {headers})
  }
}
