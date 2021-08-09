import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDoorPageComponent } from './add-new-door-page.component';

describe('AddNewDoorPageComponent', () => {
  let component: AddNewDoorPageComponent;
  let fixture: ComponentFixture<AddNewDoorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDoorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewDoorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
