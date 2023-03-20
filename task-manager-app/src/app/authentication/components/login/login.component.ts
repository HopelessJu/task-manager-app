import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserItem } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  loginForm: FormGroup;
  userPostObj: UserItem = {
    login: '',
    password: '',
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.loginForm = formBuilder.group({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  get controls() {
    return this.loginForm.controls
  }

  onLoginBtnClick() {
    this.authService.loginUser(this.userPostObj).subscribe(
      (item) => {
        if(item.token) {
          localStorage.setItem('token', item.token)
          this.router.navigate(['/main'])
          this.setCurrentUsers(this.userPostObj.login);
        }
    })
  }

  private setCurrentUsers(currentUserLoginName: string) {
    this.authService.getUsers().subscribe((userList) => {
      const user = userList.find(user => user.login === currentUserLoginName)
      localStorage.setItem('currentUser', JSON.stringify(user))
    })
  }
}
