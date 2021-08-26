import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderActions, OrderSelectors } from 'src/app/orders/state';
import { IOrderState } from 'src/app/orders/state/order.reducer';
import { IOrder } from 'src/app/shared/interfaces/order.interface';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent implements OnInit {
  orders$!: Observable<IOrder[] | null>;

  constructor(private store: Store<IOrderState>) {}

  ngOnInit(): void {
    this.store.dispatch(OrderActions.fetchAllOrders());
    this.orders$ = this.store.select(OrderSelectors.selectAllOrders);
  }
}
