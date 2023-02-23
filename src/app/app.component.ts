import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private auth: Auth, private authService: AuthService){}

  ngOnInit(){
    onAuthStateChanged(this.auth, (user)=>{
      if(user){
        this.authService.currentUser = user;
      }
    })
  }
}
