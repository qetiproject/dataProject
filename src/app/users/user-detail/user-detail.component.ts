import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserResult } from '../models';
import { UserService } from '../services';
import { UserFacade } from '../user.facade';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserService, UserFacade],
})
export class UserDetailComponent implements OnInit {
  id!: number;

  get userData$(): Observable<UserResult> {
    return this.userFacade.userData$;
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private userFacade: UserFacade,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getUser();
  }

  //user's detail info
  getUser() {
    this.userFacade.initUserDetails(this.id);
  }

  goToPosts() {
    this.router.navigate([`users/${this.id}/post`]);
  }

  goBack() {
    this.router.navigate([`users`]);
  }
}
