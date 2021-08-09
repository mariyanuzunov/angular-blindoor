import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuDoorFormComponent } from './cu-door-form.component';

describe('CuDoorFormComponent', () => {
  let component: CuDoorFormComponent;
  let fixture: ComponentFixture<CuDoorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuDoorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuDoorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
