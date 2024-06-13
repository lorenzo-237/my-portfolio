import { GitHubLogoIcon } from '@radix-ui/react-icons';
import React from 'react';
import { buttonVariants } from '../ui/button';
import { Linkedin } from 'lucide-react';

function Socials() {
  return (
    <div>
      <a
        rel='noreferrer noopener'
        href='https://github.com/lorenzo-237'
        target='_blank'
        className={buttonVariants({
          variant: 'ghost',
          size: 'sm',
        })}
      >
        <span className='sr-only'>Github icon</span>
        <GitHubLogoIcon className='w-5 h-5' />
      </a>

      <a
        rel='noreferrer noopener'
        href='https://www.linkedin.com/'
        target='_blank'
        className={buttonVariants({
          variant: 'ghost',
          size: 'sm',
        })}
      >
        <span className='sr-only'>Linkedin icon</span>
        <Linkedin size='20' />
      </a>
    </div>
  );
}

export default Socials;
