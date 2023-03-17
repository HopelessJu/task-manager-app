import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardsModule } from './boards/boards.module';
import { DirectivesDirective } from './shared/directives.directive';
import { ComponentsComponent } from './profile-view/components/components.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesDirective,
    ComponentsComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    BoardsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
