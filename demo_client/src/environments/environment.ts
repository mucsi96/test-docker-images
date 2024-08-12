import { UserInfo } from '@mucsi96/auth-tools';

declare global {
  interface Window {
    __env: {
      authTokenAgent: string;
      apiClientId: string;
    };
  }
}

export const environment: {
  mockUserInfo?: UserInfo;
  authTokenAgent: string;
  apiClientId: string;
} = {
  authTokenAgent: window.__env.authTokenAgent,
  apiClientId: window.__env.apiClientId,
};

export async function bootstrapEnvironment() {}
