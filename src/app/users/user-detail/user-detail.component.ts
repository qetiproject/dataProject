import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/services';
import { UserResult } from '../models/user';
import { UserService } from '../services';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserService],
})
export class UserDetailComponent implements OnInit {
  userData$!: Observable<UserResult>;
  id!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private loadingService: LoadingService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getUser();
  }

  private initUserDetails() {
    this.loadingService.start();
    this.userData$ = this.userService
      .getUser(this.id)
      .pipe(finalize(() => this.loadingService.stop()));
  }

  getUser() {
    this.initUserDetails();
  }

  goToPosts() {
    this.router.navigate([`users/${this.id}/post`]);
  }

  goBack() {
    this.router.navigate([`users`]);
  }
}
