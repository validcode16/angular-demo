import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
 uploadImage: any;
 images = ['../../assets/images/Family-Kida.jpg'];
 constructor(private http: HttpClient){

 }

 fileSelect(event: any){
    console.log(event.target.files[0]);
    this.uploadImage = event.target.files[0];
  }

  sendFile(){
    let formData = new FormData();
    formData.append('file', this.uploadImage);
    console.log(formData);
    this.http.post('http://localhost:5000/file-upload', formData).subscribe(
      (data: any)=>{
        console.log(data);
        let path = 'http://localhost:5000/'+data.path;
        this.images.push(path);
      }
    )
  }

}
