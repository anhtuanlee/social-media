import React from 'react';

import Button from '@/components/Button';
import GalleryModel from '@/components/GalleryModel';
import { IconAddGallery, IconClose, IconEdit } from '@/components/IconSvg';
import Text from '@/components/Text';
import { helper } from '@/helper/core';
import { useStore } from '@/stores/stores';

function ModelSelectImg() {
  const {
    setIsSelectImg,
    removeAllImgPost,
    setIsOpenSelectCustomImg,
    addListImgPost,
    listImgPost,
  } = useStore();

  return (
    <div className="relative  rounded-lg border-[1px] border-solid border-ashgray p-4 m-4 ">
      <Button
        Icons={IconClose}
        onClick={() => (setIsSelectImg(false), removeAllImgPost())}
        type="icon"
        classNames="absolute right-8 top-8 z-[1]"
      />
      {!listImgPost.listUrl ? (
        <div className="w-full relative h-80 bg-[#f7f8fa] rounded-lg">
          <input
            onChange={(e) => addListImgPost(e?.target?.files as FileList)}
            hidden
            id="files_posts"
            formEncType="multipart/form-data"
            multiple
            accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
            type="file"
            name="files_posts"
          />
          <label
            htmlFor="files_posts"
            className="absolute flex flex-col items-center justify-center w-full h-full gap-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer left-1/2 top-1/2"
          >
            <span className="absolute flex flex-col items-center justify-center pointer-events-none">
              <Button Icons={IconAddGallery} type="icon" typeButton="button" />

              <Text color="darkblack" variant="body_md__s">
                Chọn ảnh
              </Text>
            </span>
          </label>
        </div>
      ) : (
        <div className="relative">
          <div className="absolute left-4 top-8 flex flex-row gap-4">
            <Button
              onClick={() => setIsOpenSelectCustomImg(true)}
              type="secondary"
              classNames="!text-darkblack"
              typeButton="button"
              Icons={IconEdit}
            >
              Chỉnh sửa
            </Button>
            <Button
              Icons={IconAddGallery}
              classNames="!text-darkblack"
              type="secondary"
              typeButton="button"
            >
              <label className="inset-0 cursor-pointer" htmlFor="form_post">
                Thêm hình ảnh
              </label>
              <input
                onChange={(e) => addListImgPost(e.target.files!)}
                type="file"
                hidden
                id="form_post"
                multiple
                name={'form_post'}
              />
            </Button>
          </div>
          <GalleryModel className="w-full h-full" data={listImgPost?.listUrl!} />
        </div>
      )}
    </div>
  );
}

export default ModelSelectImg;
