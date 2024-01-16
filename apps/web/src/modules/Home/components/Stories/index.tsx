'use client';

import React from 'react';

import { DATA_STORIES } from '@/constant/data-stories';
import { useStore } from '@/stores/stores';

import ItemStory from './ItemStory';

const Stories: React.FC = () => {
  const { info } = useStore();
  return (
    <div className="w-full px-8 pt-16 pb-10 overflow-hidden">
      <div className="flex flex-row gap-4 overflow-x-scroll">
        <ItemStory data={{ image: info?.avatar!, alt: info?.full_name! }} first />
        {DATA_STORIES.map((item) => {
          return <ItemStory data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Stories;
