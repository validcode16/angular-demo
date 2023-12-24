import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface country {
  country_id: any,
  probability: any
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
   age: any;
   people=[
    {name: "rahul", age: 24, lname: "mahajan"},
    {name: "ajay", age: 23, lname: "mahale"},
    {name: "SAHT", age: 26, lname: "sahu"},
   ]
   countries: country[] = [];
   drivers: any[] = [];

   myObservable = new Observable((subscriber)=>{
    setTimeout(()=>{
      subscriber.next(1);
    }, 2000);
    setTimeout(()=>{
      subscriber.next(10);
    }, 4000);
    setTimeout(()=>{
      subscriber.next(100);
    }, 6000);
    setTimeout(()=>{
      subscriber.next(1000);
    }, 8000);
      subscriber.next("This is a obeservation");
      subscriber.next(this.people);
   });

   constructor(private httpApiCalls: HttpClient){

   }

   ngOnInit(){
    //  this.myObservable.subscribe((data)=>{
    //      console.log(data);
    //  })
    //  this.httpApiCalls.get('https://api.nationalize.io/?name=michael').subscribe((data:any)=>{
    //   console.log(data);
    //  })

    this.httpApiCalls.get('http://ergast.com/api/f1/drivers.json').subscribe((data:any)=>{
      console.log(data);
      this.drivers = data.MRData.DriverTable.Drivers;
    })
   }

}
