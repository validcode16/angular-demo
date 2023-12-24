import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  numberOfApplication = 100;
  student: any = {
    first_name: "Amol",
    last_name: "Palekar",
    course: "Angular",
    batch: 37
  }

  getData(data:any) {
    console.log(data);
  }
}
