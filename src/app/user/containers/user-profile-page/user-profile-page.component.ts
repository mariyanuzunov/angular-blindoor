import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/auth/state';
import { IAuthState } from 'src/app/auth/state/auth.reducer';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { OrderDataService } from '../../order-data.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent implements OnInit {
  user$!: Observable<IUser | null | undefined>;
  orders$!: Observable<IOrder[] | null>;
  constructor(
    private store: Store<IAuthState>,
    private orderDataService: OrderDataService
  ) {}

  ngOnInit(): void {
    this.user$ = this.store.select(AuthSelectors.selectAuthUser);
    // this.orders$ = this.orderDataService.getAll();
    this.orders$ = this.orderDataService.getUserOrders();
  }
}
