import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { UserModule } from '../user/user.module';

import { AddItemComponent } from './components/add-item/add-item.component';
import { AddItemPageComponent } from './containers/add-item-page/add-item-page.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { EditItemPageComponent } from './containers/edit-item-page/edit-item-page.component';

@NgModule({
  declarations: [AdminPanelComponent, AllOrdersComponent, AddItemComponent, AddItemPageComponent, EditItemComponent, EditItemPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    UserModule,
  ],
})
export class AdminModule {}
