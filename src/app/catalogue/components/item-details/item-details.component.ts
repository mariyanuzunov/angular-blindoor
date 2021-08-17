import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDoor } from 'src/app/shared/interfaces/door.interface';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent {
  @Input() item!: IDoor | null;
  @Output() addToCart = new EventEmitter();
}
