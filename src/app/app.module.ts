import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JwtInterceptorProvider } from './core/interceptors/jwt.interceptor';
import { CatalogueModule } from './catalogue/catalogue.module';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { EntityStoreModule } from './entity-store.module';
import { PluralHttpUrlGeneratorProvider } from './plural-http-url-generator';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthModule,
    CoreModule,
    SharedModule,
    CatalogueModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    EntityDataModule.forRoot(entityConfig),
    EntityStoreModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [JwtInterceptorProvider, PluralHttpUrlGeneratorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
