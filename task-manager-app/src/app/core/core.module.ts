import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthenticationModule } from '../authentication/authentication.module';
import { LocalizationModule } from '../localization/localization.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationModule,
    LocalizationModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule
  ]

})
export class CoreModule { }
