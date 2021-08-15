import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services';
import { UserPost, UserResult } from './models';
import { UserService } from './services';

@Injectable()
export class UserFacade {
  userData$!: Observable<UserResult>;
  userPost$!: Observable<UserPost[]>;
  users$!: Observable<UserResult[]>;
  id!: number;

  constructor(
    private loadingService: LoadingService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {
    // activated router id
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  //get users's data with loading
  getUsers() {
    this.loadingService.start();
    this.users$ = this.userService
      .getUsers()
      .pipe(finalize(() => this.loadingService.stop()));
  }

  // get users's detail info
  initUserDetails(id: number) {
    this.loadingService.start();
    this.userData$ = this.userService
      .getUser(id)
      .pipe(finalize(() => this.loadingService.stop()));
  }

  // get posts by user's id
  getPostByUser(id: number) {
    this.loadingService.start();
    this.userPost$ = this.userService
      .getUserWithPost(id)
      .pipe(finalize(() => this.loadingService.stop()));
  }
}
