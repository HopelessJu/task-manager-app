import { HomePageModule } from './home-page/home-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardsModule } from './boards/boards.module';
import { SingleBoardModule } from './single-board/single-board.module';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    BoardsModule,
    SingleBoardModule,
    SharedModule,
    HomePageModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
