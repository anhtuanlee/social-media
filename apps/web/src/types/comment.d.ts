// @ts-ignore

import { auth } from './auth';

export declare namespace comment {
  type TDataComment = {
    content: string[];
    id: string;
    img: string;
    user_name: string;
    children: comment.TDataComment[];
    user: auth.TDataUser;
    parent_id: string;
    post_id: string;
    createAt: Date;
    updateAt: string;
    level: number;
  };
  type TDataPost = {
    content?: string[];
    image?: string;
    post_id: string;
    parent_id?: string;
  };
}
