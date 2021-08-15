import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services';
import { UserService } from '../services';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { UserResult, UserView } from '../models/user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserService],
})
export class UserListComponent implements OnInit {
  users$!: Observable<UserResult[]>;

  constructor(
    private userService: UserService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.fetchUser();
    this.getUsers();
  }

  fetchUser() {
    this.loadingService.start();
    this.users$ = this.userService
      .getUsers()
      .pipe(finalize(() => this.loadingService.stop()));
  }

  getUsers(): Observable<any> {
    return this.userService.getUsers().pipe(
      map((c) => {
        console.log(c);
      }),
      catchError(() => {
        return of(null);
      })
    );
  }
}
