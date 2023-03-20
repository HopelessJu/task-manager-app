import { Observable } from 'rxjs';
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
  constructor(private httpClient: HttpClient) { }

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
    return this.httpClient.post<{token: string}>(this.urlSignin, item)
  }
}
