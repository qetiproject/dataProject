import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/services';
import { Post } from '../models/post';
import { UserService } from '../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: [UserService],
})
export class PostsComponent implements OnInit {
  userPost$!: Observable<Post[]>;
  id: number;

  constructor(
    private userService: UserService,
    private loadingService: LoadingService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getPostByUser(this.id);
  }

  getPostByUser(id: number) {
    this.loadingService.start();
    this.userPost$ = this.userService
      .getUserWithPost(id)
      .pipe(finalize(() => this.loadingService.stop()));
  }

  goBack() {
    this.router.navigate([`users/${this.id}`]);
  }
}
