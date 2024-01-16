import React, { JSX, useState } from 'react';
import useSWR from 'swr';

import { userService } from '@/api';
import { followerService } from '@/api/followService';
import { friendService } from '@/api/friendService';
import Button from '@/components/Button';
import {
  IconAcceptFriend,
  IconAddFriend,
  IconDeleteFriend,
  IconEditProfile,
  IconFollow,
  IconFriend,
  IconRejectFriend,
  IconRejectFriendMain,
  IconShare,
  IconUnfollow,
} from '@/components/IconSvg';
import { auth } from '@/types/auth';
import { global } from '@/types/global';
import { cn } from '@/utils';

type TRenderButton = {
  reiceiver: string;
  self: string;
  icon?: boolean;
  type?: global.TButtonType;
  classNames?: string;
  isShow?: boolean;
};

const RenderButton: React.FC<TRenderButton> = ({
  reiceiver,
  self,
  icon = false,
  classNames,
  isShow,
}) => {
  const keyUser = userService.getKeyUser(reiceiver);

  const [isOpenList, setIsOpenList] = useState<boolean>(false);
  const { data, mutate, isValidating } = useSWR<auth.TDataUser>(keyUser, userService.getUserInfo, {
    revalidateOnReconnect: false,
    revalidateOnMount: true,
    revalidateOnFocus: true,
    revalidateIfStale: false,
  });

  const handleSendRequest = async (): Promise<void> => {
    friendService.setSelfAndUser(self, reiceiver); // set self and reiceiver

    await friendService.addFriendRequest(friendService.ADD);
    mutate(data);
  };
  const handleRejectRequest = async (): Promise<void> => {
    friendService.setSelfAndUser(self, reiceiver); // set self and reiceiver

    await friendService.rejectFriendRequest(friendService.REJECT);
    mutate(data);
  };
  const handleAcceptRequest = async (): Promise<void> => {
    friendService.setSelfAndUser(self, reiceiver); // set self and reiceiver

    await friendService.acceptFriendRequest(friendService.ACCEPT);
    mutate(data);
  };
  const handleRemoveFriend = async (): Promise<void> => {
    friendService.setSelfAndUser(self, reiceiver); // set self and reiceiver

    await friendService.deleteFriend(friendService.DELELE);
    mutate(data);
  };
  const handleFollowUser = async (): Promise<void> => {
    followerService.setUserAndReiceiver(self, reiceiver);
    await followerService.followUser(followerService.KEY_FOLLOW);
    mutate(data);
  };
  const handleUnFollowUser = async (): Promise<void> => {
    followerService.setUserAndReiceiver(self, reiceiver);
    await followerService.followUser(followerService.KEY_UNFOllOW);
    mutate(data);
  };
  const handleLog = async (): Promise<void> => {
    console.log('test');
  };
  const renderButton = (
    title: string,
    onClick: () => Promise<void> | void,
    key: number,
    Icon: () => JSX.Element,
    type?: global.TButtonType
  ): JSX.Element => (
    <Button
      isLoading={isValidating}
      key={key}
      type={icon ? 'icon' : type ? type : 'border'}
      classNames={type === 'primary' ? '!bg-[#150AA1]' : ''}
      onClick={onClick}
      Icons={Icon}
    >
      {title}
    </Button>
  );
  const handelOpenList = (): void => {
    setIsOpenList(true);
  };
  const renderButtons = (
    titles: string[],
    handlers: (() => Promise<void>)[],
    Icon: (() => JSX.Element)[],
    type?: global.TButtonType[],
    relation?: string
  ): JSX.Element => {
    return relation === 'self' ? (
      <div className={cn('flex flex-row gap-8', classNames)}>
        {titles.map((title, index) =>
          renderButton(title, handlers[index], index, Icon[index], type && type[index])
        )}
      </div>
    ) : relation === 'friend' ? (
      <div className="relative">
        {renderButton('Bạn bè', handelOpenList, 0, IconFriend, 'primary')}
        <div
          onMouseLeave={() => setIsOpenList(false)}
          className={cn(
            'flex gap-8  absolute top-10 left-0 z-20 p-4 bg-white rounded-lg shadow-2xl',
            isOpenList ? 'flex' : 'hidden',
            icon ? 'flex-row top-0' : ' flex-col '
          )}
        >
          {titles.map((title, index) =>
            renderButton(title, handlers[index], index, Icon[index], type && type[index])
          )}
        </div>
      </div>
    ) : isShow ? (
      <div className={cn('flex flex-row gap-8', classNames)}>
        {titles.map((title, index) =>
          renderButton(title, handlers[index], index, undefined!, 'secondary')
        )}
      </div>
    ) : (
      <div className="relative">
        {renderButton('Phản hồi', handelOpenList, 0, IconAddFriend, 'primary')}
        <div
          onMouseLeave={() => setIsOpenList(false)}
          className={cn(
            'flex gap-8  absolute top-10 left-0 z-20 p-4 bg-white rounded-lg shadow-2xl',
            isOpenList ? 'flex' : 'hidden',
            icon ? 'flex-row top-0' : ' flex-col '
          )}
        >
          {titles.map((title, index) =>
            renderButton(title, handlers[index], index, Icon[index], type && type[index])
          )}
        </div>
      </div>
    );
  };

  const handleAction = (status?: global.TStatusUser): JSX.Element | null => {
    const relation = status?.relation;

    switch (relation) {
      case 'pending':
        return renderButton(
          'Hủy kết bạn',
          handleRejectRequest,
          0,
          IconRejectFriendMain,
          'secondary'
        );
      case 'friend':
        return renderButtons(
          ['Xóa Bạn', status?.follow ? 'Unfollow' : 'Follow'],
          [handleRemoveFriend, status?.follow ? handleUnFollowUser : handleFollowUser],
          [IconDeleteFriend, status?.follow ? IconUnfollow : IconFollow],
          ['text', 'text'],
          relation
        );
      case 'reject':
        return renderButtons(
          ['Chấp nhận lời mời', 'Xóa lời mời'],
          [handleAcceptRequest, handleRejectRequest],
          [IconAcceptFriend, IconRejectFriend],
          ['text', 'text']
        );
      case 'stranger':
        return renderButton('Thêm bạn bè', handleSendRequest, 0, IconAddFriend, 'primary');
      case 'self':
        return renderButtons(
          ['Edit Profile', 'Share'],
          [handleLog, handleLog],
          [IconEditProfile, IconShare],
          undefined,
          relation
        );
      default:
        return null;
    }
  };

  return handleAction(data?.status);
};

export default RenderButton;
