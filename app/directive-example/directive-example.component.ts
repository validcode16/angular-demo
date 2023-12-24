import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent {
  is_show_movie = true;
  user = {
    first_name: "Chaitya",
    last_name: "ABC",
    course: "ABC",
    course_month: "Dec ABC"
  }
  users = [
    {
      first_name: "Chaitya",
      last_name: "ABC",
      course: "ABC",
      course_month: "Dec ABC"
    },
    {
      first_name: "Amit",
      last_name: "DEF",
      course: "DEF",
      course_month: "Jan DEF"
    },
    {
      first_name: "Amol",
      last_name: "GHI",
      course: "GHI",
      course_month: "Feb GHI"
    },
    {
      first_name: "Amol",
      last_name: "JKL",
      course: "JKL",
      course_month: "Mar JKL"
    }
  ];

  numbers = [1,2,3,4,5,6,7,8,9];

  toggle(){
    this.is_show_movie = !this.is_show_movie;
  }
}
