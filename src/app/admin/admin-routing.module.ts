import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { AddNewDoorPageComponent } from './containers/add-new-door-page/add-new-door-page.component';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: 'admin-panel',
    canActivate: [AdminGuard],
    component: AdminPanelComponent,
    children: [
      { path: 'add-new-door', component: AddNewDoorPageComponent },
      { path: 'all-orders', component: AllOrdersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
