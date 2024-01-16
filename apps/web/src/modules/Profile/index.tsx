'use client';

import React from 'react';
import useSWR from 'swr';

import { userService } from '@/api';
import PostForm from '@/components/PostForm';
import Text from '@/components/Text';
import { useStore } from '@/stores/stores';
import { auth } from '@/types/auth';
import { global } from '@/types/global';
import { cn } from '@/utils';

import HeaderProfile from './components/HeaderProfile';
import RenderButton from './components/RelationButton/RenderButton';
import SectionProfileTag from './components/SectionProfileTag';
import Error from '@/app/[locale]/(dashboard)/profile/error';

function ProfileModule({ user }: { user: string }): JSX.Element {
  const { info } = useStore();

  /* Get keyuser */
  const keyUser = userService.getKeyUser(user as string);
  const { data, error } = useSWR<auth.TDataUser>(keyUser, userService.getUserInfo, {
    refreshWhenHidden: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });
  if (error) return <Error error={error} />;

  const isSelf = info?.user_name === user;
  const dataRender = isSelf ? info : data;
  const relationWithUser = data?.status as global.TStatusUser;

  return (
    <>
      <HeaderProfile
        data={dataRender!}
        relation={relationWithUser}
        reiceiver={user as string}
        self={info!}
      />
      {/* Handle Render action Accept Friend Self */}
      {relationWithUser?.relation === 'reject' && (
        <div className="my-24 bg-lightgray px-4 py-6 rounded-2xl  flex flex-row items-center justify-between  mx-8">
          <Text variant="body_md__s" color="darkblue">
            {data!.last_name} đã gửi cho bạn lời mời kết bạn
          </Text>
          <RenderButton
            self={info?.user_name as string}
            reiceiver={user as string}
            classNames="flex flex-row"
            isShow={true}
          />
        </div>
      )}

      <PostForm classNames={cn('mt-32 mb-12')} />
      <SectionProfileTag isSelf={isSelf} />
    </>
  );
}

export default ProfileModule;
