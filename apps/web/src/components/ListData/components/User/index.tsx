import Link from 'next/link';
import React from 'react';

import Button from '@/components/Button';
import ImageCustom from '@/components/ImageCustom';
import Text from '@/components/Text';
import { DATA_MODE_POST } from '@/constant/data-form';
import { ROUTE } from '@/constant/data-route';
import { helper } from '@/helper/core';
import RenderButton from '@/modules/Profile/components/RelationButton/RenderButton';
import { useStore } from '@/stores/stores';
import { cn } from '@/utils';

import styles from './styles.module.scss';
import { auth } from '@/types/auth';
import { post } from '@/types/post';

const UserItem: React.FC<{
  data?: auth.TUserFriend;
  type?: 'post' | 'user';
  postData?: {
    postTimer?: Date;
    mode: post.TMode;
  };
  classNames?: string;
}> = ({ data, type = 'user', classNames, postData }) => {
  const { info } = useStore();
  const Icon = DATA_MODE_POST.find((item) => item.name === postData?.mode)!.icon;

  return data ? (
    <div
      className={cn(
        'flex flex-row gap-4 rounded-lg shadow-md px-8 py-6 justify-between',
        classNames
      )}
    >
      <div className={cn('flex flex-row gap-4 ')}>
        <figure className={cn('w-16 h-16 rounded-full overflow-hidden relative')}>
          <ImageCustom
            type="avatar"
            src={data?.avatar}
            alt={data?.full_name}
            className={cn('absolute')}
          />
        </figure>
        <div className={cn('flex flex-col gap-4 justify-center ')}>
          <Link href={`${ROUTE.PROFILE}/${data.user_name}`}>
            <Text variant="body_sm__b" color="darkgray">
              {data.full_name}
            </Text>
          </Link>
          {type === 'user' ? (
            data?.common_friend?.length > 0 && (
              <Text variant="body_md__r" color="coldgray">
                {data?.common_friend?.length} bạn chung
              </Text>
            )
          ) : (
            <div className={cn('flex flex-row items-center gap-4', styles.timer)}>
              <Text variant="body_s__r" color="coldgray">
                {`${helper.convertDate(postData?.postTimer!)} trước`}
              </Text>
              • <Icon />
            </div>
          )}
        </div>
      </div>
      {type !== 'post' && (
        <RenderButton self={info?.user_name as string} reiceiver={data.user_name} icon />
      )}
    </div>
  ) : (
    <div></div>
  );
};

export default UserItem;
