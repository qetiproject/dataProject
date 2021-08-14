import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResult } from '../models/user';

@Injectable()
export class UserService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient // @Inject(BASE_URL) private baseUrl: string,
  ) {}

  getUsers(): Observable<UserResult[]> {
    return this.http.get<UserResult[]>(`${this.baseUrl}/users`);
  }

  getUser(): Observable<UserResult> {
    return this.http.get<UserResult>(`${this.baseUrl}/users/1`);
  }
}