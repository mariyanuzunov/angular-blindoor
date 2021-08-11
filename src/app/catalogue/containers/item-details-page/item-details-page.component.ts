import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.doorDataService.getAll();

    this.route.params.subscribe((params) => (this.id = params['id']));

    this.item$ = this.doorDataService.entities$.pipe(
      mergeMap((item) => item),
      filter((x) => x._id == this.id)
    );
  }
}
