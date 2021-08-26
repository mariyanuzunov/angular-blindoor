import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IReview } from 'src/app/shared/interfaces/review.interface';
import { ReviewActions } from '../../state';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
})
export class ReviewsListComponent {
  @Input() reviews!: IReview[] | [] | null;

  constructor(private store: Store) {}

  deleteReviewHandler(id: string) {
    this.store.dispatch(ReviewActions.deleteReview({ reviewId: id }));
  }
}
