import { UserInfo } from '@mucsi96/auth-tools';

declare global {
  interface Window {
    __env: {
      authTokenAgent: string;
      authScopes: string[];
    };
  }
}

export const environment: {
  mockUserInfo?: UserInfo;
  authTokenAgent: string;
  authScopes: string[];
} = {
  authTokenAgent: window.__env.authTokenAgent,
  authScopes: window.__env.authScopes,
};
