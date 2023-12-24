import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: any[] = [];
  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.http.get('http://localhost:5000/api/getProducts').subscribe((products: any)=>{
      if(products.data){
        this.products = products.data
      }
    })
  }
}
