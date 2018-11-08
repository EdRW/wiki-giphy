import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wiki-giphy';

  loggedIn: boolean;

  constructor(private loginService: LoginService) {
    this.loginService.getUserStatus().subscribe( user => {
      this.loggedIn = !!user;
    });
  }

  logout() {
    console.log('LOGGING OUT USER. INCOMING PERMISSIONS ERRORS!');
    this.loginService.signOut();
  }
}
