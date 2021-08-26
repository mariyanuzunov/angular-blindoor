import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/auth/state';
import { OrderActions, OrderSelectors } from 'src/app/orders/state';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit {
  user$!: Observable<IUser | null | undefined>;
  orders$!: Observable<IOrder[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(AuthSelectors.selectAuthUser);
    this.store.dispatch(OrderActions.fetchUserOrders());
    this.orders$ = this.store.select(OrderSelectors.selectUserOrders);
  }
}
