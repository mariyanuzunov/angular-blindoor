import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CataloguePageComponent } from './containers/catalogue-page/catalogue-page.component';
import { ItemPreviewComponent } from './components/item-preview/item-preview.component';
import { MaterialModule } from '../material.module';
import { ItemDetailsPageComponent } from './containers/item-details-page/item-details-page.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemReviewComponent } from './components/item-review/item-review.component';
import { AddReviewComponent } from './components/add-review/add-review.component';

@NgModule({
  declarations: [
    CataloguePageComponent,
    ItemPreviewComponent,
    ItemDetailsPageComponent,
    ItemDetailsComponent,
    ItemReviewComponent,
    AddReviewComponent,
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [ItemPreviewComponent],
})
export class CatalogueModule {}
