import { cn } from '@/lib/utils';
import React from 'react';

type WaveProps = {
  className?: string;
};

function Wave(props: WaveProps) {
  return (
    <svg className={cn('fill-primary', props.className)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        //  fill='#0099ff'
        fillOpacity='1'
        d='M0,64L48,90.7C96,117,192,171,288,197.3C384,224,480,224,576,197.3C672,171,768,117,864,117.3C960,117,1056,171,1152,202.7C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  );
}

export default Wave;
