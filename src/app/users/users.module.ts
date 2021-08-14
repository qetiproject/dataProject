import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { PostsComponent } from './posts/posts.component';
import { UserListItemComponent } from './user-list/user-list-item/user-list-item.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';

export const BASE_URL = new InjectionToken<string>('base api token');

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserDetailComponent,
    PostsComponent,
  ],
  providers: [
    // UserService,
    {
      provide: BASE_URL,
      useValue: environment.baseUrl,
    },
  ],
})
export class UsersModule {}
