import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { hasRole, init } from '@mucsi96/auth-tools';
import { RouterTokens } from './app.routes';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hasRole = hasRole;

  constructor(router: Router) {
    init({
      namespace: 'demo',
      navigateToSignin: () => router.navigate([RouterTokens.SIGNIN]),
      postAuthorizationRedirectUri: '/',
      scopes: ['openid', 'profile', 'email'],
      tokenAgent: 'http://localhost:3000/auth/authorize',
      mockUserInfo: environment.mockUserInfo,
    });
  }
}
