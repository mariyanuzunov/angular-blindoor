import { Component, Input, OnInit } from '@angular/core';
import { IDoor } from 'src/app/shared/interfaces/door.interface';
import { IOrder } from 'src/app/shared/interfaces/order.interface';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {
  @Input() orders!: IOrder[] | null;
}
