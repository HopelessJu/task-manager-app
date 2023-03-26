import { Router } from '@angular/router';
import { UserItem } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { CustomErrorHandlerService } from 'src/app/custom-error-handler.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  hide:boolean = true;
  signUpForm: FormGroup;
  userList: UserItem[] = [];
  // userPostObj: UserItem = {
  //   name: '',
  //   login: '',
  //   password: '',
  // }

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private router: Router, private handleError: CustomErrorHandlerService) {
    this.signUpForm = formBuilder.group({
      name: [null, Validators.required],
      login: [null, Validators.required],
      password: [null, Validators.required],
      confirm_password: [null, Validators.required]
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
      if(matchControl.errors && !matchControl.errors['MustMatch'] && matchControl.errors != null) {
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
    const {name, login, password} = this.signUpForm.value;
    this.authService.createUser({name, login, password}).subscribe({
      next: (item) => {
      this.router.navigate(['/login'])
    },
      error: (error) => {
        this.handleError.handleError(error.error.message);
      }
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




