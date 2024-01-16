import React from 'react';

import Button from '@/components/Button';
import { IconComment, IconLike, IconSharePost } from '@/components/IconSvg';
import Text from '@/components/Text';

function GroupButton() {
  return (
    <div className="flex flex-row justify-between border-b-2 border-t-[1px] py-1  border-lightgray border-solid">
      <Button type="text" Icons={IconLike}>
        <Text variant="body_s__s">Thích</Text>
      </Button>
      <Button type="text" Icons={IconComment}>
        <Text variant="body_s__s">Bình luận</Text>
      </Button>
      <Button type="text" Icons={IconSharePost}>
        <Text variant="body_s__s">Chia Sẻ</Text>
      </Button>
    </div>
  );
}

export default GroupButton;
