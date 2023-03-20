import { Router } from '@angular/router';
import { UserItem } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide:boolean = true;
  signUpForm: FormGroup;
  userList: UserItem[] = [];
  userPostObj: UserItem = {
    name: '',
    login: '',
    password: '',
  }

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router) {
    this.signUpForm = formBuilder.group({
      username: new FormControl(null, Validators.required),
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirm_password: new FormControl(null, Validators.required)
    },
    {
      validators: this.MustMatch('password', 'confirm_password')
    });
  }

  get controls() {
    return this.signUpForm.controls;
  }

  MustMatch(controlName:string, matchControlName:string) {
    return(formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchControl = formGroup.controls[matchControlName];
      if(matchControl.errors && !matchControl.errors['MustMatch']) {
        return
      }
      if(control.value !== matchControl.value) {
        matchControl.setErrors({MustMatch: true})
      } else {
        matchControl.setErrors(null)
      }
    }
  }

  onCreateAccountBtnClick() {
    this.authService.createUser(this.userPostObj).subscribe((item) => {
      window.alert('Success!')
      this.router.navigate(['/login'])
    })
  }

  onClick() {
    console.log('clicked')
  }

  private getUsers() {
    this.authService.getUsers().subscribe((userList) => {
      this.userList = userList;
    })
  }
}




