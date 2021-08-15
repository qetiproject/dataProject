import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPost, UserResult } from '../models/user';
import { BASE_URL } from '../users.module';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  getUsers(): Observable<UserResult[]> {
    return this.http.get<UserResult[]>(`${this.baseUrl}/users`);
  }

  getUser(id: number): Observable<UserResult> {
    return this.http.get<UserResult>(`${this.baseUrl}/users/${id}`);
  }

  getUserWithPost(id: number): Observable<UserPost[]> {
    return this.http.get<UserPost[]>(`${this.baseUrl}/users/${id}/posts`);
  }
}
