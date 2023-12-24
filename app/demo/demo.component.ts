import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']

})
export class DemoComponent {
   courses = [];
   pcourses = [1,2,3];
   ncouses = [
    {id: 1, name: "Abc" },
    {id: 2, name: "DEF" },
    {id: 3, name: "GHTR" },
   ];

   onAdd(){
     this.ncouses.push({id: 4, name: 'courses'});
   }

   onRemove(course: any){
    let index = this.ncouses.indexOf(course);
    this.ncouses.splice(index, 1);
   }

   onChange(course: any){
      course.name = "updated";
   }

   


}
