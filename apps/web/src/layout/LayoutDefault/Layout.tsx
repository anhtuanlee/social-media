'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import { authenSevice } from '@/api';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Suggestion from '@/components/Suggestion';
import Wrapper from '@/components/Wrapper';
import { useStore } from '@/stores/stores';
import { cn } from '@/utils';

import { storageService } from '../../helper/index';

export default function Layout({ children }: { children: ReactNode }) {
  const { push } = useRouter();
  const { setInfo } = useStore();
  const accessToken = storageService.getItem('accessToken');
  useEffect(() => {
    const controller = new AbortController();
    const fetch = async () => {
      try {
        const result = await authenSevice.getUserProfile();
        setInfo(result);
      } catch (err) {
        // await Promise.resolve(() => setTimeout(() => push('/login'), 500));
        setTimeout(() => push('/login'), 500);
      }
    };
    fetch();
    return () => {
      controller.abort();
    };
  }, [accessToken]);

  return (
    <div>
      <Header />
      <div className={cn('w-full  mt-32  grid h-[90vh] grid-cols-13')}>
        <Sidebar className="fixed top-32 bottom-0 w-[21.8%] rounded-lg border-r-[1px] border-solid border-colgray" />
        <Wrapper className={'bg-white  col-end-10 col-start-4 rounded-2xl'}>{children}</Wrapper>
        <Suggestion className="col-span-4 bg-slate-600 rounded-lg border-l-[1px] border-solid border-colgray" />
      </div>
    </div>
  );
}
