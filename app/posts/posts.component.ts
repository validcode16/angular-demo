import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[] = [];

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient){
    http.get(this.url).subscribe((response: any) =>{
      this.posts = response; 
    });
  }

  createPost(title: any){
    // let post = { title: title.value};
    // title.value = '';

    // this.http.post(this.url, JSON.stringify(post))
    // .subscribe((response: any)=>{
    //   post['id'] = response.json().id;
    //   this.posts.splice(0, 0, post);
    // })
  }

}



