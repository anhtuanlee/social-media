import React from 'react';

import Button from '@/components/Button';
import Text from '@/components/Text';
import { DATA_ICON_FOMR_POST } from '@/constant/data-post-form';
import { useStore } from '@/stores/stores';
import { cn } from '@/utils';

function ModelButtonFeature({ isHavesText }: { isHavesText: string }): JSX.Element {
  const { setIsSelectImg, listImgPost } = useStore();

  const isDisabled =
    isHavesText.trim() === '' &&
    ((listImgPost?.listUrl && Object?.keys(listImgPost.listUrl!).length === 0) || !listImgPost);

  return (
    <div className="absolute bg-white z-[2] border-t-[1px] py-12 px-8 border-solid border-colgray  w-full   bottom-0 flex flex-row justify-between items-center ">
      <div className={cn('flex flex-row gap-12  ')}>
        {DATA_ICON_FOMR_POST.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              type="select"
              Icons={Icon}
              typeButton="button"
              classNames="w-10 h-10"
              onClick={() => setIsSelectImg(true)}
            />
          );
        })}
      </div>

      <Button type="primary" typeButton="submit" disabled={isDisabled}>
        <Text variant="body_sm__s" color={isDisabled ? 'ashgray' : 'white'}>
          Post
        </Text>
      </Button>
    </div>
  );
}

export default ModelButtonFeature;
