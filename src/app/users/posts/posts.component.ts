import { Component, OnInit } from '@angular/core';
import { PostService } from '../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostService],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((x) => console.log(x));
  }
}
