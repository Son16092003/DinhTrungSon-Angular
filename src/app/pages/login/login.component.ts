import { Component } from '@angular/core';
import { onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public authService:AuthService){

  }

  login(){
    this.authService.loginWithGoogle();
  }

  logout(){
    this.authService.logout()
  }
}
