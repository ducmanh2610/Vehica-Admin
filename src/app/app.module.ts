import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { MainmenuComponent } from 'src/components/mainmenu/mainmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainmenuComponent
  ],
  imports: [
    BrowserModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
