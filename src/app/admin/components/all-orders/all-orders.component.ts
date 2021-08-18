import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { OrderDataService } from 'src/app/user/order-data.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss'],
})
export class AllOrdersComponent implements OnInit {
  orders$!: Observable<IOrder[] | null>;

  constructor(private orderDataService: OrderDataService) {}

  ngOnInit(): void {
    this.orders$ = this.orderDataService.getAll();
  }
}
