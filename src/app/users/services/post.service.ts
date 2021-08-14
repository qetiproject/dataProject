import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../users.module';

@Injectable()
export class PostService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    // @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient
  ) {}

  getPosts(): Observable<any> {
    console.log(this.baseUrl);
    return this.http.get<any>(`${this.baseUrl}/posts`);
  }
}
