import React, { useRef, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { commentService } from '@/api/commentService';
import { postService } from '@/api/postService';
import Button from '@/components/Button';
import { IconSend } from '@/components/IconSvg';
import ImageCustom from '@/components/ImageCustom';
import { helper } from '@/helper/core';
import { auth } from '@/types/auth';
import { post } from '@/types/post';

type TCommentForm = {
  data: auth.TDataUser;
  mode: post.TMode;
  post_id: string;
  parent_id?: string;
};

function FormComment({ data, mode, post_id, parent_id }: TCommentForm): JSX.Element {
  const [valueComment, setValueComment] = useState<string>('');
  const { mutate } = useSWRInfinite(postService.getKeyNewFeed, postService.getPost);

  const buttonSubmit = useRef<HTMLButtonElement>(null);

  const handleCreateComment = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const form = e.currentTarget;
    const { content } = Object.fromEntries(new FormData(form).entries());

    if (content !== '') {
      const newContent = helper.convertContentToArray(content);

      await commentService.createComment(commentService.KEY_CREATE, {
        post_id: post_id,
        parent_id: parent_id,
        content: newContent,
      });
      mutate();
      setValueComment('');
    }
  };
  const handlePressKeyEnter = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleCreateComment(e);
    }
  };

  return (
    <div className="flex flex-row items-center w-full gap-4 py-4">
      <figure className="relative w-12 h-12 overflow-hidden rounded-full">
        <ImageCustom src={data?.avatar} alt={data?.full_name} type="avatar" />
      </figure>
      <form onKeyPress={handlePressKeyEnter} className="flex-1" onSubmit={handleCreateComment}>
        <div className="flex items-center px-4 py-2 rounded-2xl bg-lightgray ">
          <textarea
            id="chat"
            value={valueComment}
            onChange={(e) => setValueComment(e.target.value)}
            name="content"
            rows={1}
            className="focus:outline-none bg-transparent block  py-2.5 w-full text-lg text-darkgray rounded-lg "
            placeholder={`Viết bình luận ${mode === 'PUBLIC' ? 'công khai' : '...'}`}
          />
          <Button
            ref={buttonSubmit}
            disabled={!valueComment}
            type="select"
            Icons={IconSend}
            typeButton="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default FormComment;
