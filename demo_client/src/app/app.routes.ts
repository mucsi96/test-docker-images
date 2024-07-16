import { Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { assertRole } from '@mucsi96/auth-tools';
import { SigninComponent } from './signin.component';

export enum RouterTokens {
  HOME = '',
  SIGNIN = 'signin',
}

export const routes: Routes = [
  {
    path: RouterTokens.HOME,
    canActivate: [() => assertRole('Reader')],
    component: MessageComponent,
  },
  {
    path: RouterTokens.SIGNIN,
    component: SigninComponent,
  },
];
