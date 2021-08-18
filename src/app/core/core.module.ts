import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [FooterComponent, HeaderComponent],
  providers: [JwtInterceptor, UserGuard, AdminGuard],
})
export class CoreModule {}
