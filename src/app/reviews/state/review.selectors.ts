import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IReviewState } from './review.reducer';

export const selectReviewState = createFeatureSelector<IReviewState>('review');

export const selectItemReviews = createSelector(
  selectReviewState,
  (state: IReviewState) => state.reviews
);
