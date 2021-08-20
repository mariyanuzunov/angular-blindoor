import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoorDataService } from '../catalogue/door-data.service';
import { IDoor } from '../shared/interfaces/door.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  doors$!: Observable<IDoor[]>;
  constructor(
    private doorDataService: DoorDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.doors$ = this.doorDataService.getAll();
  }

  detailsHandler(id: string) {
    this.router.navigate([`/catalogue/${id}`]);
  }
}
