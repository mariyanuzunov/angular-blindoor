import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CataloguePageComponent } from './containers/catalogue-page/catalogue-page.component';
import { ItemPreviewComponent } from './components/item-preview/item-preview.component';
import { MaterialModule } from '../material.module';
import { ItemDetailsPageComponent } from './containers/item-details-page/item-details-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
  declarations: [CataloguePageComponent, ItemPreviewComponent, ItemDetailsPageComponent, ItemDetailsComponent],
  imports: [CommonModule, CatalogueRoutingModule, MaterialModule],
})
export class CatalogueModule {}
