import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

    

  }
      // local storage armazenamento do navegador 
    isAuthenticated(){
    localStorage.setItem('token','kdjwkjfkje456')
      // gerar logica para construir um token ou pegar um token 
      return true;
  };

  logout():void{
    localStorage.clear()
  };
}
