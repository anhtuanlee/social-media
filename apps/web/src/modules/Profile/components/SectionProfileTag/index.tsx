'use client';

import React, { useEffect } from 'react';
import useSWR from 'swr';

import ListData from '@/components/ListData';
import Text from '@/components/Text';
import { DATA_FILTER_ACTION_SELF, DATA_FILTER_ACTION_USER } from '@/constant/data-post-form';
import { handleFilterDataProfile } from '@/feature';
import { useSetParams } from '@/hooks/useSetParams';
import { global } from '@/types/global';
import { cn } from '@/utils';

type TSectionProfileTag = {
  isSelf: boolean;
};

const SectionProfileTag: React.FC<TSectionProfileTag> = ({ isSelf }) => {
  const dataFilter = isSelf ? DATA_FILTER_ACTION_SELF : DATA_FILTER_ACTION_USER;
  const { handleGetParams, handleQueryParams } = useSetParams();

  const params = (handleGetParams('query') as global.TFilterProfile) ?? 'friends';

  const { action, key } = handleFilterDataProfile(params);
  const { data } = useSWR(key, action);

  const handleActionFilterData = (params: string) => {
    handleQueryParams('query', params);
  };
  useEffect((): void => {
    if (!params) {
      handleQueryParams('query', 'friends');
    }
  }, [params]);
  return (
    <div className={cn('w-full')}>
      <nav className="flex flex-row  overflow-x-scroll justify-between px-8  border-b-[1px] border-solid border-lightgray">
        {dataFilter.map((item) => {
          return (
            <Text
              className={cn(
                params === item.path ? ' border-darkblack border-b-2 border-solid' : 'boder-none',
                'py-6 h-full cursor-pointer'
              )}
              onClick={(): void => handleActionFilterData(item.path)}
              variant="body_md__s"
              color="darkblack"
              key={item.id}
            >
              {item.title}
            </Text>
          );
        })}
      </nav>
      <ListData type={params} data={data} />
    </div>
  );
};

export default SectionProfileTag;
