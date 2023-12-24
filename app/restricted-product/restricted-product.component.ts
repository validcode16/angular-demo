import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-restricted-product',
  templateUrl: './restricted-product.component.html',
  styleUrls: ['./restricted-product.component.css']
})
export class RestrictedProductComponent {
  products: any[] = [];
  constructor(private http: HttpClient){

  }
  ngOnInit(){
    this.http.get('http://localhost:5000/api/getRestrictedProducts').subscribe((data: any)=>{
      if(data.data){
        this.products = data.data
      }
    })
  }

}
