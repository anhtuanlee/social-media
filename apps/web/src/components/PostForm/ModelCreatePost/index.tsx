import React, { Dispatch, SetStateAction, useState } from 'react';

import { useStore } from '@/stores/stores';
import { cn } from '@/utils';

import ModelButtonFeature from '../ModelButtonFeature';
import ModelSelectImg from '../ModelSelectImg';
import ModelUser from '../ModelUser';

type TText = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};

function ModelCreatePost({ text, setText }: TText) {
  const { isSelectImg, info } = useStore();
  return (
    <>
      <div className={cn('w-full overflow-scroll rounded-md h-full relative')}>
        <ModelUser data={info!} />
        <textarea
          placeholder={`${info?.last_name} ơi. Đang nghĩ gì thế ?`}
          className={cn('w-full py-6 px-8 focus:outline-none whites')}
          name="content"
          rows={6}
          onChange={(e) => setText(e.target.value)}
          wrap="soft"
          value={text}
        />
        {isSelectImg && <ModelSelectImg />}
      </div>
      <ModelButtonFeature isHavesText={text} />
    </>
  );
}

export default ModelCreatePost;
