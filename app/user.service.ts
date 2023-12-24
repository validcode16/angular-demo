import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(jwtToken: any){
    localStorage.setItem('token', jwtToken);
  }

  isUserLoggedIn(){ 
    return localStorage.getItem('token');
  }

  logout(){
    return localStorage.removeItem('token');
  }
}
