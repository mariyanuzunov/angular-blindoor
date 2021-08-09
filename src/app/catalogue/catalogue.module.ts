import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CataloguePageComponent } from './containers/catalogue-page/catalogue-page.component';
import { ItemPreviewComponent } from './components/item-preview/item-preview.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [CataloguePageComponent, ItemPreviewComponent],
  imports: [CommonModule, CatalogueRoutingModule, MaterialModule],
})
export class CatalogueModule {}
