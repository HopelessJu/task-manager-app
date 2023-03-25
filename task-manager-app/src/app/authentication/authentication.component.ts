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
  token: boolean = !!localStorage.getItem('token');
  user: UserItem = JSON.parse(localStorage.getItem('currentUser') || '{}');
  deleteUser: boolean = false;
  isClicked: boolean = false;
  login:string = '';
  password: string = '';
  userObj: UserItem = {
    name: '',
    login: '',
    password: '',
  }


  constructor(private authService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.authService.token$.subscribe(res => {
      if (res) {
        this.token = true;
      }
      this.user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    });
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

  onEditProfileClick() {
    this.router.navigate(['profile'])
  }

  onUserDelete() {
  }

  cancelEdit() {
    this.isClicked = false;
  }

  confirmEdit(event: {login: string, password: string}) {
    this.userObj.password = event.password;
    this.userObj.login = event.login
    this.userObj.name = this.user.name;
    this.authService.updateUser(this.user._id || '', this.userObj).subscribe((item) => {
      console.log(item)
    })
    this.isClicked = false;
  }
}




