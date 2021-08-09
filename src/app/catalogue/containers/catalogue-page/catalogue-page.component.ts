import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IDoor } from 'src/app/shared/interfaces/door.interface';
import { DoorDataService } from '../../door-data.service';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.scss'],
})
export class CataloguePageComponent implements OnInit {
  doors$!: Observable<IDoor[]>;

  constructor(private doorDataService: DoorDataService) {}

  ngOnInit(): void {
    this.doors$ = this.doorDataService.getAll();
  }
}
