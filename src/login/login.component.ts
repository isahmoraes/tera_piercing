import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(
    private authService: AuthService
  ){

  } 

  // pegando os dados trazidos do service

  login(){
    this.authService.isAuthenticated()

  }
  logout(){
    this.authService.logout()
  }
}
