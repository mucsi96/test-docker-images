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
      scopes: [
        `${environment.apiClientId}/read`,
        `${environment.apiClientId}/write`,
      ],
      tokenAgent: environment.authTokenAgent,
      mockUserInfo: environment.mockUserInfo,
    });
  }
}
