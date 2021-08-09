import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewDoorPageComponent } from './containers/add-new-door-page/add-new-door-page.component';

const routes: Routes = [
  { path: 'admin/add-new-door', component: AddNewDoorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
