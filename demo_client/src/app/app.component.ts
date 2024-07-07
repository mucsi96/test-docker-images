import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { loading } from './utils/loading';
import { init } from '@mucsi96/auth-tools';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {
    init({
      namespace: 'demo',
      navigateToSignin: () => {},
      postAuthorizationRedirectUri: '/',
      scopes: ['openid', 'profile', 'email'],
      tokenAgent: 'https://auth.auth-tools.home'
    });
  }

  $loading = this.authService.isSignedIn().pipe(loading());
}
