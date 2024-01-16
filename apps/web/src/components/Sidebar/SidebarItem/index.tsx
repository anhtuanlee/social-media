'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import Button from '@/components/Button';
import Text from '@/components/Text';
import { cn } from '@/utils';

import s from './styles.module.scss';
import { global } from '@/types/global';

function SidebarItem({ data }: { data: global.TSidebarItem }) {
  const pathname = usePathname();

  return (
    <Link href={`/${data.href}`}>
      <Button
        type="text"
        Icons={data.icon}
        classNames={cn('hover:text-darkblack text-ashgray', pathname === data.href && s.isActive)}
      >
        <Text variant="body_lg__s">{data.title}</Text>
      </Button>
    </Link>
  );
}

export default SidebarItem;
