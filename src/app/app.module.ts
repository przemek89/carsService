import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CarsModule, CarsListComponent, CarsRoutingModule, CarsService} from './cars';
import { AppComponent } from './app.component';
import { CoreModule} from './core-module/core.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { LayoutService } from './shared-module/services/layout.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarsModule,
    LoginModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    CarsRoutingModule,
    LoginRoutingModule
  ],
  providers: [CarsService, AuthService, AuthGuard, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
