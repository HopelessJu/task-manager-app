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
  hide:boolean = true;
  loginForm: FormGroup;
  userList: UserItem[] = [];
  userPostObj: UserItem = {
    login: '',
    password: '',
    token: '',
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
      this.router.navigate(['/main'])
    })
  }

  private getUsers() {
    this.authService.getUsers().subscribe((userList) => {
      this.userList = userList;
    })
  }
}
