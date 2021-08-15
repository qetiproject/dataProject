import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/services';
import { UserPost } from '../models';
import { UserService } from '../services';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit {
  userPost$!: Observable<UserPost[]>;
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
