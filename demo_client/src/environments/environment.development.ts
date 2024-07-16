import { UserInfo } from '@mucsi96/auth-tools';
import '../mocks/browser';

export const environment = {
  mockUserInfo: {
    userName: 'Robert White',
    email: 'robert.white@mockemail.com',
    initials: 'RW',
    roles: ['Reader', 'Writer'],
  } satisfies UserInfo,
};
