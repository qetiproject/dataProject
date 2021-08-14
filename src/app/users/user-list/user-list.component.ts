import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services';
import { UserService } from '../services';
import { finalize, tap } from 'rxjs/operators';
import { UserResult, UserView } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService],
})
export class UserListComponent implements OnInit {
  users: UserResult[] = [];

  constructor(
    private userService: UserService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.loadingService.start();
    this.userService
      .getUsers()
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe((x) => (this.users = x));
  }
}
