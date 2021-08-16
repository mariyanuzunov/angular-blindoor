import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IOrder } from '../shared/interfaces/order.interface';
@Injectable({
  providedIn: 'root',
})
export class OrderDataService extends EntityCollectionServiceBase<IOrder> {
  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient
  ) {
    super('Order', serviceElementsFactory);
  }

  //   TODO
  getUserOrders(): Observable<IOrder[]> {
    return this.http
      .get<IOrder[]>('http://localhost:3000/orders/my-orders')
      .pipe(catchError(() => EMPTY));
  }
}
