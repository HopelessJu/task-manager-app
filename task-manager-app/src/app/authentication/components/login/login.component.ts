import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserItem } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';
import { CustomErrorHandlerService } from 'src/app/custom-error-handler.service';


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
  error: Error | null = null;

  constructor(private formBuilder: FormBuilder, public authService: AuthenticationService, private router: Router, private handleError: CustomErrorHandlerService) {
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
    this.authService.loginUser({login, password}).subscribe({
      next: (item) => {
        if(item.token) {
          localStorage.setItem('token', item.token);
          this.setCurrentUsers(login, item.token);
          this.router.navigate(['main']);
        }
      },
      error: (error) => {
        this.handleError.handleError(error.error.message);
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
