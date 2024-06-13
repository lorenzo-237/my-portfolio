import { GitHubLogoIcon } from '@radix-ui/react-icons';
import React from 'react';
import { buttonVariants } from '../ui/button';
import { Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

function Socials() {
  return (
    <div className='relative z-20'>
      <Link
        href='https://github.com/lorenzo-237'
        target='_blank'
        className={cn(
          buttonVariants({
            variant: 'ghost',
            size: 'sm',
          }),
          'z-20'
        )}
      >
        <span className='sr-only'>Github icon</span>
        <GitHubLogoIcon className='w-5 h-5' />
      </Link>

      <Link
        href='https://www.linkedin.com/'
        target='_blank'
        className={cn(
          buttonVariants({
            variant: 'ghost',
            size: 'sm',
          }),
          'z-20'
        )}
      >
        <span className='sr-only'>Linkedin icon</span>
        <Linkedin size='20' />
      </Link>
    </div>
  );
}

export default Socials;
