'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ROUTE } from '@/constant/data-route';

import Button from '../Button';
import { BellIcon, LogoIcon } from '../IconSvg';
import Text from '../Text';
import Search from './components/Search';

export default function Header() {
  const [numNotifycation, setNumNotifycation] = useState<number>(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNumNotifycation((count) => (count += 1));
    }, 500);
    return () => clearTimeout(timer);
  }, [numNotifycation]);
  return (
    <header className=" bg-white h-28  z-10 w-full fixed top-0 py-4 left-1/2 -translate-x-1/2">
      <nav className="flex flex-row justify-between max-w-3xl w-11/12 mx-auto items-center">
        <Link href={ROUTE.HOME} className="flex flex-row items-center gap-4">
          <LogoIcon />
          <Text variant="h4">Socialize</Text>
        </Link>
        <Search />
        <Button Icons={BellIcon} type="icon-border" classNames="relative">
          <span className="bg-primary flex items-center justify-center w-7 h-7 text-center text-white rounded-full absolute top-0 -right-2">
            {numNotifycation > 9 ? `9+` : numNotifycation}
          </span>
        </Button>
      </nav>
    </header>
  );
}
