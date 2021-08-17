import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CartActions } from '.';
import { CartService } from '../cart.service';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  //   @Effect() checkout$ =
  checkout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.checkout),
      switchMap((data) =>
        this.cartService.checkout(data).pipe(
          catchError((err) => of(CartActions.checkoutFailure(err))),
          map(() => CartActions.checkoutSuccess())
        )
      )
    )
  );
}
