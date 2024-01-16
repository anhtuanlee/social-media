'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { authenSevice } from '@/api/authService';
import { DATA_ROUTE, ROUTE } from '@/constant/data-route';
import { useStore } from '@/stores/stores';
import { cn } from '@/utils';

import ImageCustom from '../ImageCustom';
import SidebarItem from './SidebarItem';
import s from './styles.module.scss';

export default function Sidebar({ className }: { className: string }) {
  const { info } = useStore();
  const { push } = useRouter();
  const handleLogout = async () => {
    await authenSevice.logOut();
    push('/login');
  };

  return (
    <aside
      className={cn(
        'h-[calc(100vh-8rem)] bg-white text-black items-end overflow-hidden flex  flex-col',
        className,
        s.sidebar
      )}
    >
      <div className="gap-8 flex flex-col  justify-between w-2/3 h-full">
        <div className={cn('flex flex-col justify-start gap-10')}>
          <Link
            href={`${ROUTE.PROFILE}/${info?.user_name}`}
            className={cn('flex flex-row items-center justify-start px-8', s.user)}
          >
            <figure className={cn(s.user__avatar)}>
              <ImageCustom src={info?.avatar} alt="gai xinh" type="avatar" />
            </figure>
          </Link>
          <div className="w-auto flex flex-col gap-10 bg-primary top-28 bottom-0">
            {DATA_ROUTE.map((item, index) => {
              return <SidebarItem key={index} data={item} />;
            })}
          </div>
        </div>
        {/* <Button
          type="primary"
          onClick={handleLogout}
          classNames=" bg-lightgreen w-full   px-4 py-6"
        >
          LOGOUT
        </Button> */}
      </div>
    </aside>
  );
}
