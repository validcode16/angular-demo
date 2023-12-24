import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // is_logged_in = false;
  title: string = "First Title in Second Component"
  name = "DEF";
  disable_btn = false;
  change_text_color = true;
  calculate_result = 10+20;
  // is_show = false;
  constructor(
    private route: Router,
    public userService: UserService
    ){
    
  }
  // toggle(){
  //   this.is_show = !this.is_show;
  // }
  add() {
    var num : number = 100;
    num = 200;
  }
  changeTitle(){
    this.title = "Change Title";
  }

  changeColor(){
    this.change_text_color = !this.change_text_color;
  }

  //  eevent binding 
  valueChanged(event: any){
    console.log(event.target.value);
  }

  checkCondition() {
    let a = 10;
    a == 10 ? console.log("value is 10") : console.log("value is not 10");
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/home']);
    
  }
}
