import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from './auth/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(AuthActions.checkAuthStatus());
  }
}
