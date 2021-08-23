import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { reviewReducer } from './state/review.reducer';
import { ReviewEffects } from './state/review.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature({
      name: 'review',
      reducer: reviewReducer,
    }),
    EffectsModule.forFeature([ReviewEffects]),
  ],
})
export class ReviewsModule {}
