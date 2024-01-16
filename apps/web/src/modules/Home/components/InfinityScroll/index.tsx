import React, { JSX } from 'react';

import ListData from '@/components/ListData';
import { post } from '@/types/post';

function InfinityScroll({ data }: { data: post.TDataPost[] }): JSX.Element {
  return <ListData type="posts" data={data} />;
}

export default InfinityScroll;
