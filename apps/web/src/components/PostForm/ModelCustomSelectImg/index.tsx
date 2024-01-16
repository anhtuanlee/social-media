import React from 'react';

import Button from '@/components/Button';
import { IconAddGallery, IconClose } from '@/components/IconSvg';
import ImageCustom from '@/components/ImageCustom';
import { useStore } from '@/stores/stores';

function ModelSelectImgCustom() {
  const { listImgPost, removeListImgPost, setIsOpenSelectCustomImg, addListImgPost } = useStore();

  const handleDeleteImages = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    e.preventDefault();
    removeListImgPost(name);
    if (listImgPost.listUrl?.length === 1) {
      setIsOpenSelectCustomImg(false);
    }
  };

  return (
    <>
      <div className="h-[calc(100%-60px)] overflow-scroll ">
        <div className="flex flex-col">
          {listImgPost.listUrl?.map((item) => {
            return (
              <div key={item.name} className={`aspect-2/75 w-full py-2 px-4`}>
                <figure
                  className="relative flex items-center justify-center w-auto h-full overflow-hidden rounded-2xl"
                  key={item.name}
                >
                  <Button
                    Icons={IconClose}
                    onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
                      handleDeleteImages(e, item.name)
                    }
                    type="icon"
                    classNames="absolute right-5 top-5 shadow-md z-20"
                  />

                  <div
                    className="absolute inset-0 -z-10 blur-md"
                    style={{ backgroundImage: `url('${item.url}')` }}
                  ></div>
                  <ImageCustom
                    className="absolute z-10 !w-auto mx-auto"
                    type="default"
                    src={item.url}
                    fit="contain"
                    key={item.name}
                    alt={`img`}
                  />
                </figure>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row gap-4 absolute bottom-0 left-0 right-0 p-4 justify-end w-full border-t-[1px] border-solid border-ashgray">
        <Button
          Icons={IconAddGallery}
          type="secondary"
          classNames="!text-darkblack"
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
        <Button onClick={() => setIsOpenSelectCustomImg(false)} type="primary" typeButton="button">
          Xong
        </Button>
      </div>
    </>
  );
}

export default ModelSelectImgCustom;
