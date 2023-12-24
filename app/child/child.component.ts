import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input('applications') applicationCount: any;
    @Input('data') studentData:any;
    @Output('property') property = new EventEmitter();

    propertyDetails = {
      p_name: "Tech Park",
      area: 7000,
      price: "20cr",
      location: 'Baner'
    }

    ngOnInit(){
      // this.property.emit(this.propertyDetails);
    }
    sendData(){
      this.property.emit(this.propertyDetails);
    }
}


// event emitter coming from angulr 4. eem is work special way to emit data, sending deta anywhere.