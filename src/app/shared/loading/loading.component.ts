import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading$!: Observable<boolean>;

  constructor() {} // private loadingService: LoadingService

  ngOnInit() {
    // this.loading$ = this.loadingService.loading$;
  }
}