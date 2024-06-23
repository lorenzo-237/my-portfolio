import { cn } from '@/lib/utils';
import React from 'react';

type WaveProps = {
  className?: string;
};

function WaveFooter(props: WaveProps) {
  return (
    <svg className={cn('fill-primary', props.className)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        fillOpacity='1'
        d='M0,64L60,53.3C120,43,240,21,360,37.3C480,53,600,107,720,122.7C840,139,960,117,1080,106.7C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
      ></path>
    </svg>
  );
}

export default WaveFooter;
