import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './containers/cart-page/cart-page.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './state/cart.reducer';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './state/cart.effects';

@NgModule({
  declarations: [CartPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature({
      name: 'cart',
      reducer: cartReducer,
    }),
    EffectsModule.forFeature([CartEffects]),
  ],
})
export class CartModule {}
