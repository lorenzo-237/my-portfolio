import { cn } from '@/lib/utils';

import React, { cloneElement } from 'react';
import { buttonVariants } from '../ui/button';
import { NAV_LINKS } from './nav-links';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='fixed left-32 top-[20px] transform z-50'>
      <ul className='flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary bg-background hover:border-background hover:bg-primary hover:text-background transition ease-in-out delay-150'>
        {NAV_LINKS.map((link) => (
          <li key={link.name}>
            <Link
              href={link.url}
              className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'rounded-full p-2')}
            >
              {cloneElement(link.icon, {
                className: 'h-8 w-8',
              })}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
