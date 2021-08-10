import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddNewDoorPageComponent } from './containers/add-new-door-page/add-new-door-page.component';
import { CuDoorFormComponent } from './components/cu-door-form/cu-door-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';

@NgModule({
  declarations: [AddNewDoorPageComponent, CuDoorFormComponent, AdminPanelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdminModule {}
