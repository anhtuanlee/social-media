import React from 'react';

import { IconAdd } from '@/components/IconSvg';
import ImageCustom from '@/components/ImageCustom';
import Text from '@/components/Text';
import { story } from '@/types/story';

const ItemStory: React.FC<{ data: story.TItemStory; first?: boolean }> = ({ data, first }) => {
  return (
    <div className="min-w-[76px] aspect-[0.86]  rounded-xl overflow-hidden">
      {first ? (
        <div className="flex h-full w-full justify-center items-center relative">
          <ImageCustom
            src={data.image}
            alt={data.alt}
            type="default"
            className="absolute inset-0"
          />
          <div className="flex flex-col z-10 items-center justify-end gap-4 pb-4 h-full w-full backdrop-blur-sm">
            <Text variant="body_md__b" color="white" className="text-center">
              Add Story
            </Text>
            <IconAdd />
          </div>
        </div>
      ) : (
        <figure className="w-full h-full relative">
          <ImageCustom src={data.image} alt={data.alt} type="default" className="absolute" />
        </figure>
      )}
    </div>
  );
};

export default ItemStory;
