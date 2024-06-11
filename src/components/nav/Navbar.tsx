import { cn } from '@/lib/utils';

import React, { cloneElement } from 'react';
import { buttonVariants } from '../ui/button';
import { NAV_LINKS } from './nav-links';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='fixed top-4 left-1/2 transform -translate-x-1/2'>
      <ul className='flex items-center gap-6 px-4 py-2 border-2 border-black rounded-full'>
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.url}
              className={cn(buttonVariants({ variant: 'ghost', size: 'smallIcon' }), 'hover:scale-110')}
            >
              {cloneElement(link.icon, {
                className: 'h-4 w-4',
              })}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
