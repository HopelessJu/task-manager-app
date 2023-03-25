import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserItem } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm: FormGroup;
  // userPostObj: UserItem = {
  //   login: '',
  //   password: '',
  // }

  constructor(private formBuilder: FormBuilder, public authService: AuthenticationService, private router: Router) {
    this.loginForm = formBuilder.group({
      login: [null, Validators.required],
      password:[null, Validators.required],
    })
  }

  ngOnInit(): void {
    const user: string | null = localStorage.getItem('currentUser');
    const token: string | null = localStorage.getItem('token');
    if(token && user) {
      this.router.navigate(['main'])
    }
  }

  get controls() {
    return this.loginForm.controls
  }

  onLoginBtnClick() {
    const { login, password } = this.loginForm.value;
    this.authService.loginUser({ login, password }).subscribe(
      (item) => {
        if(item.token) {
          localStorage.setItem('token', item.token);
          this.setCurrentUsers(login, item.token);
          this.router.navigate(['main']);
        }
    })
  }

  private setCurrentUsers(currentUserLoginName: string, token: string) {
    this.authService.getUsers().subscribe((userList:UserItem[]) => {
      localStorage.setItem('userList', JSON.stringify(userList))
      const user:UserItem | undefined = userList.find(user => user.login === currentUserLoginName)
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.authService.changeData(token);
    })
  }

}
