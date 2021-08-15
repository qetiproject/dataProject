import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import {
  UserDetailComponent,
  UserListComponent,
  UserListItemComponent,
  UserPostsComponent,
} from '.';
import { environment } from 'src/environments/environment';
import { UserService } from './services';

export const BASE_URL = new InjectionToken<string>('base api token');

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserDetailComponent,
    UserPostsComponent,
  ],
  providers: [
    UserService,
    {
      provide: BASE_URL,
      useValue: environment.baseUrl,
    },
  ],
})
export class UsersModule {}
