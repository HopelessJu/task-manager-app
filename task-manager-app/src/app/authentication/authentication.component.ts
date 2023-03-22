import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {UserItem} from './models/user.model'


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  token: boolean = false;
  user: UserItem = {};

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.token = !!localStorage.getItem('token');
    this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');

    if (!this.token) {
      this.authService.token$.subscribe(res => {
        this.token = !!res;
        this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      });
    }
  }

  onLogoutBtnClick() {
    //if nothing else replace with clear
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userList')
    this.token = false;
    this.user = {};
    this.router.navigate(['/'])
  }
}



