import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { hasRole } from '@mucsi96/auth-tools';
import { RouterTokens } from './app.routes';

@Component({
  standalone: true,
  selector: 'app-signin',
  template: '',
})
export class SigninComponent {
  constructor(router: Router) {
    if (hasRole('Reader')) {
      router.navigate([RouterTokens.HOME]);
    }
  }
}
