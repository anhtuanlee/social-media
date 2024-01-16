'use client';

import InfiniteScroll from 'react-infinite-scroll-component';
import useSWRInfinite from 'swr/infinite';

import { postService } from '@/api/postService';
import ListData from '@/components/ListData';
import PostForm from '@/components/PostForm';

import Stories from './components/Stories';
export default function HomeModule(): JSX.Element {
  const {
    data: posts,
    size,
    setSize,
  } = useSWRInfinite(postService.getKeyNewFeed, postService.getPost);

  const newFeed = posts?.flat();
  const isReachEnd = posts && posts[posts.length - 1]?.length < 10; // after set size +1

  console.log(newFeed);

  return (
    <>
      <Stories />

      <div className="py-4 bg-lightgray rounded-xl px-6">
        <PostForm classNames="w-full" />
      </div>
      {/* {isLoadingMore && 'loading'} */}

      <InfiniteScroll
        hasMore={!isReachEnd}
        next={() => setSize(size + 1)}
        loader={<p>Loadinggggggggg</p>}
        dataLength={newFeed?.length ?? 0}
        endMessage={<p>Reach to the end</p>}
      >
        <ListData data={newFeed} type="posts" />
      </InfiniteScroll>
    </>
  );
}
