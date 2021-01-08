import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { LayoutService } from '../shared-module/services/layout.service';

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  login = '';
  password = '';
  constructor(private authService : AuthService,
              private router : Router,
              private layoutService : LayoutService) { }

  onSubmit() {
    this.authService.login(this.login, this.password)
      .then(this.onSubmitSuccess.bind(this), this.onSubmitFailure);
  }

  private onSubmitSuccess() {
    this.router.navigate(['/cars']).then(() => this.layoutService.showSidebar());
  }

  private onSubmitFailure() {
    console.log('Login and/or passowrd is incorrect');
  }
}
