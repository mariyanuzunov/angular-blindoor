import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [OrdersComponent, UserProfilePageComponent],
  imports: [CommonModule, MaterialModule, UserRoutingModule],
})
export class UserModule {}
