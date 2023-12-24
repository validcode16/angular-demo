import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm: any;
  url : string = "http://localhost:5000/api/user/addUser";
  HttpClient: any;
  showMessage = "";
  
 // htmClient it is just valiable name
  constructor(private htpClient: HttpClient){
  }

  ngOnInit(){
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required]),
      userPass: new FormControl('', [Validators.required])
    })
  }
  
  get firstName(){
     return this.userForm.get('firstName');
  }

  get lastName(){
    return this.userForm.get('lastName');
  }

  get userEmail(){
    return this.userForm.get('userEmail');
  }

  get userPass(){
  return this.userForm.get('userPass');
  }

  saveData(userForm:any){    
    console.log(userForm)
    this.htpClient.post(this.url, userForm).subscribe((response: any)=>{
      console.log(response);
      if(response.message){
        this.showMessage = response.message;
      }
    })
  }
}
