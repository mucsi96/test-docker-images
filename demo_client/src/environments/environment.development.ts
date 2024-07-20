import { UserInfo } from '@mucsi96/auth-tools';
import '../mocks/browser';

export const environment = {
  tokenAgent: 'http://localhost:3000/auth/authorize',
  mockUserInfo: {
    userName: 'Robert White',
    email: 'robert.white@mockemail.com',
    initials: 'RW',
    roles: ['Reader', 'Writer'],
  } satisfies UserInfo,
};
