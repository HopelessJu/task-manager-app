import { Router } from '@angular/router';
import { UserItem } from '../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CustomErrorHandlerService } from 'src/app/custom-error-handler.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  hide:boolean = true;
  deleteUser: boolean = false;
  token: string = '';
  user: UserItem = {};
  signUpForm: FormGroup;
  userId:string = '';

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

  onEditAccountBtnClick() {
    const {name, login, password} = this.signUpForm.value;
    this.userId = (JSON.parse(localStorage.getItem('currentUser') || ''))?._id
    this.authService.updateUser(this.userId, {name, login, password}).subscribe({
      next: (item) => {
      localStorage.setItem('currentUser', JSON.stringify(item));
      this.user.login = login;
      this.router.navigate(['main']);
      },
      error: (error) => {
        if(error.status === 403) {
          this.router.navigate(['']);
          localStorage.clear();
        }
        this.handleError.handleError(error.error.message);
      }
   })
  }

  cancelDelete() {
    this.deleteUser = false;
  }

  onDeleteBtnClick() {
    this.deleteUser = true;
  }

  confirmDelete() {
    this.userId = (JSON.parse(localStorage.getItem('currentUser') || ''))?._id
    this.authService.deleteUser(this.userId || '').subscribe(() => {
    this.deleteUser = false;
    localStorage.clear();
    window.location.href='/login';

    })
  }
}
