import {
  BellSidebarIcon,
  BookmarkSidebarIcon,
  HomeSidebarIcon,
  MessageSidebarIcon,
  MoreSidebarIcon,
  ProfileSidebarIcon,
} from '@/components/IconSvg';
export const ROUTE = {
  PROFILE: '/profile',
  HOME: '/',
};

export const DATA_ROUTE = [
  {
    href: ROUTE.HOME,
    title: 'Home',
    icon: HomeSidebarIcon,
  },
  {
    href: '/Notifycation',
    title: 'Notifycation',
    icon: BellSidebarIcon,
  },
  {
    href: '/Notifycation',
    title: 'Message',
    icon: MessageSidebarIcon,
  },
  {
    href: '/Notifycation',
    title: 'Bookmark',
    icon: BookmarkSidebarIcon,
  },
  {
    href: ROUTE.PROFILE,
    title: 'Profile',
    icon: ProfileSidebarIcon,
  },
  {
    href: '/Notifycation',
    title: 'More',
    icon: MoreSidebarIcon,
  },
];
