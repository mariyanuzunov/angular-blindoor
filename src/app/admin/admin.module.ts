import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddNewDoorPageComponent } from './containers/add-new-door-page/add-new-door-page.component';
import { CuDoorFormComponent } from './components/cu-door-form/cu-door-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [
    AddNewDoorPageComponent,
    CuDoorFormComponent,
    AdminPanelComponent,
    AllOrdersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    UserModule,
  ],
})
export class AdminModule {}
