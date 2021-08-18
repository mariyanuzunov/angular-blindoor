import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { CartActions } from 'src/app/cart/state';
import { ICartState } from 'src/app/cart/state/cart.reducer';
import { IDoor } from 'src/app/shared/interfaces/door.interface';
import { DoorDataService } from '../../door-data.service';

@Component({
  selector: 'app-item-details-page',
  templateUrl: './item-details-page.component.html',
  styleUrls: ['./item-details-page.component.scss'],
})
export class ItemDetailsPageComponent implements OnInit {
  id!: string;
  item$!: Observable<IDoor>;

  constructor(
    private doorDataService: DoorDataService,
    private route: ActivatedRoute,
    private store: Store<ICartState>
  ) {}

  ngOnInit(): void {
    this.doorDataService.getAll();

    this.route.params.subscribe((params) => (this.id = params['id']));

    this.item$ = this.doorDataService.entities$.pipe(
      mergeMap((item) => item),
      filter((x) => x._id == this.id)
    );
  }

  addToCartHandler(item: IDoor) {
    console.log(item);
    this.store.dispatch(CartActions.addToCart({ item }));
  }

  editHandler(item: IDoor) {
    console.log(item);
  }

  removeHandler(id: string) {
    this.doorDataService.delete(id);
  }
}
