import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {
    userForm: any;

    ngOnInit(){
      this.userForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]),
        lastName: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+$/)]),
        usrAge: new FormControl('', [Validators.required, Validators.min(0), Validators.max(120), Validators.pattern(/[0-9]/)])
      })
    }

    saveData(userForm:any){
      console.log(userForm);
    }

    get firstName(){
       return this.userForm.get('firstName');
    }

    get lastName(){
      return this.userForm.get('lastName');
    }

    get usrAge(){
    return this.userForm.get('usrAge');
    }

}
