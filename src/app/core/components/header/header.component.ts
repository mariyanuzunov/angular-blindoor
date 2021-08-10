import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from 'src/app/auth/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  logoutHandler() {
    this.store.dispatch(AuthActions.logout());
  }
}
