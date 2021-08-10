import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewDoorPageComponent } from './containers/add-new-door-page/add-new-door-page.component';
import { AdminPanelComponent } from './containers/admin-panel/admin-panel.component';

const routes: Routes = [
  {
    path: 'admin-panel',
    children: [
      { path: '', pathMatch: 'full', component: AdminPanelComponent },
      { path: 'add-new-door', component: AddNewDoorPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
