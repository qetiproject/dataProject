import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserPost } from '../models';
import { UserFacade } from '../user.facade';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
  providers: [UserFacade],
})
export class UserPostsComponent implements OnInit {
  id: number;

  get userPost$(): Observable<UserPost[]> {
    return this.userFacade.userPost$;
  }
  constructor(
    private userFacade: UserFacade,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getPostByUser(this.id);
  }

  // user'sposts
  getPostByUser(id: number) {
    this.userFacade.getPostByUser(id);
  }

  goBack() {
    this.router.navigate([`users/${this.id}`]);
  }
}
