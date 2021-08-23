import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IReview } from 'src/app/shared/interfaces/review.interface';

@Component({
  selector: 'app-item-review',
  templateUrl: './item-review.component.html',
  styleUrls: ['./item-review.component.scss'],
})
export class ItemReviewComponent {
  @Input() reviews!: IReview[] | null | undefined;
  @Output() deleteReview = new EventEmitter();
}
