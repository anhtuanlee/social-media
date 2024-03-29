import { Prisma } from '@prisma/client';
import { Request } from 'express';
declare module 'express-serve-static-core' {
    export interface CookieOptions {
        partitioned?: boolean;
    }
}
declare global {
    type TUser = {
        id: string;
        user_name: string;
        role: 'USER' | 'ADMIN' | 'MANAGER';
        iat?: number;
        exp?: number;
    } | null;
    type TVerifyAccessToken = Request & {
        user?: TUser;
    } & Request;
    type TVerifyRefreshToken = Request & {
        user?: TUser;
    };
    type TFriendData<T> = {
        common_friend: (Prisma.PickEnumerable<Prisma.FriendOfUserGroupByOutputType, 'friend_name'[]> & {})[];
    };
}
declare namespace statusCode {
    type TError = 400 | 401 | 403 | 404;
}
