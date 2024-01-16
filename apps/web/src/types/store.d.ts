import { auth } from './auth';
import { global } from './global';
import { post } from './post';

export declare namespace store {
  type TAuthLogin = {
    isLogin: boolean;
    setIsLogin: (is: boolean) => void;
    info: auth.TDataUser | undefined;
    setInfo: (data: auth.TDataUser) => void;
  };
  type TToken = {
    accessToken: string;
    setAccecssToken: (token: string) => void;
  };
  type TMode = {
    postMode: 'PUBLIC' | 'FRIEND' | 'PRIVATE';
    setPostMode: (mode: post.TMode) => void;
  };
  type TReply = {
    idReply: string;
    setIsReply: (id: string) => void;
  };
  type TSelectImg = {
    isSelectImg: boolean;
    setIsSelectImg: (b: boolean) => void;
  };

  type TIsSelectCustomImg = {
    isOpenSelectCustomImg: boolean;
    setIsOpenSelectCustomImg: (bo: boolean) => void;
  };

  type TIsOpenPostForm = {
    isOpenPostForm: boolean;
    setIsOpenPostForm: (b: boolean) => void;
  };
  type TListImgPost = {
    listImgPost: {
      listFiles?: FileList;
      listUrl?: global.TDataBlob[];
    };
    addListImgPost: (item: FileList) => void;
    removeListImgPost: (name: string) => void;
    removeAllImgPost: () => void;
  };

  type TPost = TReply & TSelectImg & TMode & TIsSelectCustomImg & TIsOpenPostForm & TListImgPost;

  type TAuth = TToken & TAuthLogin;
}
