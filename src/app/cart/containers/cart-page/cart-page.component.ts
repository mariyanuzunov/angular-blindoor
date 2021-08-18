import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from 'src/app/auth/state';
import { IDoor } from 'src/app/shared/interfaces/door.interface';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { CartActions, CartSelectors } from '../../state';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  items!: IDoor[] | [];
  totalCost$!: Observable<number>;
  user$!: Observable<IUser | null | undefined>;
  checkoutForm!: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store
      .select(CartSelectors.selectCartItems)
      .subscribe((v) => (this.items = v));
    this.totalCost$ = this.store.select(CartSelectors.selectCartTotalCost);
    this.user$ = this.store.select(AuthSelectors.selectAuthUser);

    this.checkoutForm = this.fb.group({
      shippingAddress: ['', [Validators.required]],
    });
  }

  removeItemHandler(id: string) {
    this.store.dispatch(CartActions.removeItemFromCart({ id }));
  }

  checkoutHandler() {
    const shippingAddress = this.checkoutForm.value.shippingAddress;
    const products = this.items.map((p) => p._id);
    this.store.dispatch(CartActions.checkout({ shippingAddress, products }));
  }
}
