import { UserInfo } from '@mucsi96/auth-tools';

declare global {
    interface Window {
        __env: {
            tokenAgent: string;
        };
    }
}

export const environment: { mockUserInfo?: UserInfo, tokenAgent: string } = {
        tokenAgent: window.__env.tokenAgent,
};
