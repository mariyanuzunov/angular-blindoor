import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const RESOURCE_URL = environment.API_URL + 'orders';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  checkout(data: any) {
    return this.http.post(RESOURCE_URL, data);
  }
}
