import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.getUser();
  }

  private initUserDetails() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.loadingService.start();
    this.userData$ = this.userService
      .getUser(id)
      .pipe(finalize(() => this.loadingService.stop()));
  }

  getUser() {
    this.initUserDetails();
  }

  goToPosts() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.router.navigate([`users/${id}/post`]);
  }
}
