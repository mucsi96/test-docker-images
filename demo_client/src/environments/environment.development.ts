import { UserInfo } from '@mucsi96/auth-tools';
import '../mocks/browser';

export const environment = {
  authTokenAgent: 'http://localhost:3000/auth/authorize',
  apiClientId: '001test',
  mockUserInfo: {
    userName: 'Robert White',
    email: 'robert.white@mockemail.com',
    initials: 'RW',
    roles: ['Reader', 'Writer'],
  } satisfies UserInfo,
};

export async function bootstrapEnvironment() {
  const { setupMocks } = await import('../mocks/browser');
  await setupMocks();
}
