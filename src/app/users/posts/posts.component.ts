import { Component, OnInit } from '@angular/core';
import { PostService, UserService } from '../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [PostService],
})
export class PostsComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserWithPost(1).subscribe((x) => console.log(x));
  }
}
