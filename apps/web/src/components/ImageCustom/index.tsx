import avatar_default from '@Images/avatar_default.jpg';
import img_default from '@Images/image-default.png';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

import { cn } from '@/utils';

type TImageCustom = {
  className?: string;
  src?: string | StaticImageData;
  alt?: string;
  isFill?: boolean;
  type: 'avatar' | 'default';
  fit?: 'contain' | 'cover';
};

const ImageCustom: React.FC<TImageCustom> = ({
  className,
  src,
  alt,
  type,
  isFill = true,
  fit = 'cover',
}) => {
  const imgError = {
    avatar: avatar_default,
    default: img_default,
  };
  const altError = {
    avatar: 'user',
    default: 'img error',
  };
  return src ? (
    <Image
      placeholder="blur"
      fill={isFill}
      src={src ?? imgError[type]}
      objectFit={fit}
      blurDataURL={
        'https://thicc-af.mywaifulist.moe/waifus/ganyu-genshin-impact/I12RIY4CzYIZtavjhONgqZ9ZxGMKfdQRo0x0BQQ0.jpg'
      }
      loading="lazy"
      alt={alt ?? altError[type]}
      className={cn('absolute', className)}
    />
  ) : (
    <Skeleton circle={type === 'avatar'} className="!h-full w-full absolute" duration={0.3} />
  );
};

export default ImageCustom;
