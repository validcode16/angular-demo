import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.css']
})
export class AboutCompanyComponent {
  is_availabloe: boolean= false;
  obj = {
    name: 'Chaitanya',
    roll_no: 123
  }

  constructor(private shared: SharedService){
      this.show();
      this.obj.roll_no;
  }

  show(){
    console.log("Hi");
    this.shared.showAboutDetails();
  }
  openAlert(){
    this.shared.openAlert();
  }
}
