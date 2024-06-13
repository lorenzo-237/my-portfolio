import { NavLinkItem } from './nav.type';
import { GraduationCap, Home, Lightbulb, Mail, Presentation, User } from 'lucide-react';

export const NAV_LINKS: NavLinkItem[] = [
  {
    icon: <Home />,
    name: 'home',
    url: '/',
  },
  {
    icon: <User />,
    name: 'about me',
    url: '/about',
  },
  {
    icon: <Lightbulb />,
    name: 'my skills',
    url: '/skills',
  },
  {
    icon: <Presentation />,
    name: 'my projects',
    url: '/projects',
  },
  {
    icon: <GraduationCap />,
    name: 'my education',
    url: '/education',
  },
  {
    icon: <Mail />,
    name: 'contact me',
    url: '/contact',
  },
];
