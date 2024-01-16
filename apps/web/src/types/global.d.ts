import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { FormDataEntryValue, JSX } from 'react';

export declare namespace global {
  type TButton = {
    onClick?: (e: React.MouseEvent) => void;
    type: TButtonType;
    href?: string;
    classNames?: string;
    title?: string;
    Icons?: ({ className }: { className?: string }) => JSX.Element;
    children?: ReactNode;
    isLoading?: boolean;
    typeButton?: 'submit' | 'button';
    disabled?: boolean;
  };
  type TPropsDataButton = {
    href?: string;
    onClick?: () => void;
  };
  type TSidebarItem = {
    href: string;
    icon: () => JSX.Element;
    title: string;
  };
  type TForm = {
    type: 'login' | 'signin';
  };
  type TFormAuth = {
    [k: string]: FormDataEntryValue;
  };
  type TFormDataLogin = {
    typeInput?: string;
    name: string;
    placeholder?: string;
    type?: string;
    messageError?: string;
    options?: string[] | number[];
    onChange?: (e: unknown) => void;
    disabled?: boolean;
    value?: number | string;
    pattern?: string;
    require?: boolean;
  };
  type TFilterProfile = 'posts' | 'friends' | 'followers' | 'following' | 'album';
  type TStatusFriend = 'self' | 'friend' | 'stranger' | 'reject' | 'pending';
  type TButtonType =
    | 'rounded'
    | 'text'
    | 'primary'
    | 'secondary'
    | 'select'
    | 'border'
    | 'icon'
    | 'icon-border';
  type TStatusUser = {
    relation: TStatusFriend;
    follow: boolean;
  };
  type TDataSelect = {
    id: number;
    title: string;
    name: string;
    icon: () => JSX.Element;
  };
  type TDataBlob = {
    url: string;
    name: string;
  };
}
