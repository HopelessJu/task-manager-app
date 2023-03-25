import { HomePageComponent } from './home-page/home-page.component';
import { EditProfileComponent } from './authentication/components/edit-profile/edit-profile.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { SignupComponent } from './authentication/components/signup/signup.component';
import { BoardsComponent } from './boards/pages/main-page/boards.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleBoardPageComponent } from './single-board/pages/single-board-page/single-board-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'main', component: BoardsComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: EditProfileComponent},
  { path: 'board/:boardId', component: SingleBoardPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
