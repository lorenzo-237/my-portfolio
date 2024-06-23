import { cn } from '@/lib/utils';
import React from 'react';
import WaveFooter from './svg/wave-footer';
import Socials from './Hero/Socials';

type FooterProps = {
  className?: string;
};

function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('bg-primary relative mt-10 h-20', className)}>
      <div className='h-full flex justify-center items-center '>
        <div className='bg- rounded-full px-4'>
          <Socials className='text-secondary' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
