import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserView } from '../../models/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input()
  item!: UserView;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToDetails() {
    this.router.navigate([`users/${this.item.id}`]);
  }
}
