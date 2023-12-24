import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  showAboutDetails(){
     console.log("showAboutDetails() Method called")
  }

  openAlert() {
    alert("You clicked alert");
  }

}
