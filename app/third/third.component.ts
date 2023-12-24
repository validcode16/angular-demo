import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  firstName= "Amol";
  displayName : string = "";
  buttonClick(){
    console.log('You have button click');
  }
  showName(){
    console.log(this.firstName);
  }
  keyPressed(event: any){
    console.log(event.keyCode)
    if(event.key == 'Enter' || event.keyCode == 13){
      event.stopPropagation();
      console.log("you have press entered button");
    }
    if(event.keyCode == 32){
      event.stopPropagation();
    }
    this.displayName = event.target.value;
    // console.log(event.target.value);
  }

}
