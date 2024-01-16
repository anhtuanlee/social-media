import React from 'react';

import { cn } from '@/utils';

import PostItem from './components/Post';
import UserItem from './components/User';
import { global } from '@/types/global';
import { auth } from '@/types/auth';
import { post } from '@/types/post';

type TListData<T> = {
  type: global.TFilterProfile;
  data: unknown;
};

const ListData = <T extends auth.TDataUser[] | post.TPost[]>({ data, type }: TListData<T>) => {
  const ItemData = (type: global.TFilterProfile) => {
    switch (type) {
      case 'followers':
        return UserItem;
      case 'following':
        return UserItem;
      case 'friends':
        return UserItem;
      case 'album':
        console.log('Havent Data');
        break;
      case 'posts':
        return PostItem;
      default:
        return UserItem;
    }
  };

  const Item = ItemData(type);
  return (
    <div className={cn('flex flex-col gap-8 p-10')}>
      {Array.isArray(data) && Item ? data.map((item) => <Item key={item?.id} data={item} />) : null}
    </div>
  );
};

export default ListData;
