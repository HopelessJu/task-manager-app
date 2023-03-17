import {MatButtonModule} from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationComponent } from './authentication.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';




@NgModule({
  declarations: [
    AuthenticationComponent,
    SignupComponent,
    LoginComponent,
    ProfileViewComponent
  ],
  exports: [
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    AuthenticationService
  ],
})
export class AuthenticationModule { }
