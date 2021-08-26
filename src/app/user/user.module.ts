import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';
import { MaterialModule } from '../material.module';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  declarations: [UserProfilePageComponent],
  imports: [CommonModule, MaterialModule, UserRoutingModule, OrdersModule],
})
export class UserModule {}
