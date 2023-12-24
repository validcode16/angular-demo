import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any;
  url : string = "http://localhost:5000/api/user/login";
  message: string = "";
    
  // htmClient it is just valiable name, it also dependancy injection
  constructor(private htpLogin: HttpClient,
    private pageRedirect: Router, 
    private usrServices: UserService){
  }

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  
  get email(){
    return this.loginForm.get('email');
  }

  get password(){
  return this.loginForm.get('password');
  }
  
  // saveData(loginForm:any){
  //   console.log(loginForm);
  // }


  login(loginForm:any){
     this.htpLogin.post(this.url, loginForm).subscribe((data: any)=>{
        this.message = data.message;
        // if(data.message == "User logged in successfully"){
        //   this.pageRedirect.navigate(['/product']);
        // }
        //  use tiken for login user
        if(data.jwtToken){
          // localStorage.setItem('token', data.jwtToken); don't need to right here once call on login ts file
          this.usrServices.login(data.jwtToken);
          // console.log(localStorage.getItem('token'));
          this.pageRedirect.navigate(['/restricted-product']);
        }
     })
  }
}
