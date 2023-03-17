import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationComponent } from './components/localization/localization.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    LocalizationComponent
  ],
  exports: [
    LocalizationComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
  ]
})
export class LocalizationModule { }

