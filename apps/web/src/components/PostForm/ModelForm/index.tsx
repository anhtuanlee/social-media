'use client';

import React, { useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { postService } from '@/api/postService';
import { helper } from '@/helper/core';
import { useStore } from '@/stores/stores';
import { cn } from '@/utils';

import HeaderPost from '../HeaderPost/indext';
import ModelCreatePost from '../ModelCreatePost';
import ModelSelectImgCustom from '../ModelCustomSelectImg';

const ModelPost: React.FC = () => {
  const { mutate } = useSWRInfinite(postService.getKeyNewFeed, postService.getPost);

  const [text, setText] = useState<string>('');
  const {
    postMode,
    isOpenSelectCustomImg,
    listImgPost,
    setIsOpenPostForm,
    removeAllImgPost,
    isOpenPostForm,
    setIsSelectImg,
  } = useStore();

  const handleSubmitForm = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    const headers = form.getHeaders?.() ?? { 'Content-Type': 'multipart/form-data' };
    const { content } = Object.fromEntries(new FormData(form).entries());

    if (content || listImgPost?.listUrl) {
      const newContent = helper.convertContentToArray(content);
      await postService.createPost(
        postService.KEY_CREATE,
        {
          content: newContent,
          files_posts: listImgPost.listFiles,
          mode: postMode,
        },
        {
          headers: {
            ...headers,
          },
        }
      );
      setIsOpenPostForm(false);
      setIsSelectImg(false);
      removeAllImgPost();
      setText('');
      mutate();
    }
  };

  return (
    <div
      className={cn(
        'fixed  z-30 inset-0 bg-[#f3f3f4c1] flex items-center justify-center',
        isOpenPostForm ? 'block' : 'hidden'
      )}
    >
      <div
        className={cn(
          'bg-white absolute w-[50vw] min-h-[40vh] max-h-[70vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-xl'
        )}
      >
        <HeaderPost />
        <form
          encType="multipart/form-data"
          className={`overflow-hidden  ${
            isOpenSelectCustomImg ? 'h-[50vh]' : 'mb-[100px] h-[calc(60vh-200px)]'
          }`}
          onSubmit={(e) => handleSubmitForm(e)}
        >
          {isOpenSelectCustomImg ? (
            <ModelSelectImgCustom />
          ) : (
            <ModelCreatePost text={text} setText={setText} />
          )}
        </form>
      </div>
    </div>
  );
};

export default ModelPost;
