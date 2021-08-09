import { Component, OnInit } from '@angular/core';
import { DoorDataService } from 'src/app/catalogue/door-data.service';
import { CreateDoorDto } from 'src/app/catalogue/dto/create-door.dto';

@Component({
  selector: 'app-add-new-door-page',
  templateUrl: './add-new-door-page.component.html',
  styleUrls: ['./add-new-door-page.component.scss'],
})
export class AddNewDoorPageComponent implements OnInit {
  constructor(private doorDataService: DoorDataService) {}

  ngOnInit(): void {}

  addDoorHandler(data: CreateDoorDto) {
    data.price = Number(data.price);
    this.doorDataService.add(data);
  }
}
