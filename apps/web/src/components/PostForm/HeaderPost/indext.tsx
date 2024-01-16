import React from 'react';

import Button from '@/components/Button';
import { IconArrowBack, IconClose } from '@/components/IconSvg';
import Text from '@/components/Text';
import { useStore } from '@/stores/stores';

function HeaderPost(): JSX.Element {
  const { isOpenSelectCustomImg, setIsOpenSelectCustomImg, setIsOpenPostForm } = useStore();
  return (
    <header className="w-full flex justify-center py-8 border-b-[1px] border-solid border-colgray">
      <Text variant="body_lg__b" color="darkblue">
        {isOpenSelectCustomImg ? 'Ảnh/Video' : 'Tạo Bài Viết'}
      </Text>
      {isOpenSelectCustomImg ? (
        <span className="absolute left-4 top-4">
          <Button
            onClick={() => setIsOpenSelectCustomImg(false)}
            Icons={IconArrowBack}
            type="icon"
          />
        </span>
      ) : (
        <span className="absolute right-4 top-4">
          <Button onClick={() => setIsOpenPostForm(false)} Icons={IconClose} type="icon" />
        </span>
      )}
    </header>
  );
}

export default HeaderPost;
