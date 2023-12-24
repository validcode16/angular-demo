import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  constructor(public service: SharedService) {

 }
//  showAlert(){
//     this.service.openAlert();
//  }

}
