import { Component } from '@angular/core';
import { Mainmenu, Navbar } from 'src/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Dashboard';
  mainMenu: Mainmenu = {
    showMenu: true
  }
}
