import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarsService} from './cars';
import { AppComponent } from './app.component';
import { CoreModule} from './core-module/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginModule } from './login/login.module';
import { LayoutService } from './shared-module/services/layout.service';
import { AuthCanLoadGuard } from './guards/auth-can-load.guard';
import { FormCanDeactivateGuard } from './guards/form-can-deactivate';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CarsService,
    AuthService,
    AuthGuard,
    LayoutService,
    AuthCanLoadGuard,
    FormCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
