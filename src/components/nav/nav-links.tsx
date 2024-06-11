import { NavLinkItem } from './nav.type';
import { GraduationCap, Lightbulb, Mail, Presentation, User } from 'lucide-react';

export const NAV_LINKS: NavLinkItem[] = [
  {
    icon: <User />,
    name: 'about me',
    url: '/',
  },
  {
    icon: <Lightbulb />,
    name: 'my skills',
    url: '/',
  },
  {
    icon: <Presentation />,
    name: 'my projects',
    url: '/',
  },
  {
    icon: <GraduationCap />,
    name: 'my education',
    url: '/',
  },
  {
    icon: <Mail />,
    name: 'contact me',
    url: '/',
  },
];
