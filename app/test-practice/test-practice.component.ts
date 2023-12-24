import { Component } from '@angular/core';

@Component({
  selector: 'app-test-practice',
  templateUrl: './test-practice.component.html',
  styleUrls: ['./test-practice.component.css']
})
export class TestPracticeComponent {

    canSave = false;
    // canSave = true;

    courses: any;

    loadCourse(){
      this.courses = [
        {id: 1, name:" Hello World"},
        {id: 2, name: "Welcome..I " }
      ]
    }
}
