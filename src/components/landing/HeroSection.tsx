import Image from 'next/image';
import React from 'react';

// h-[calc(100vh_-_150px)]

function HeroSection() {
  return (
    <div className='h-screen grid grid-cols-3'>
      <div className='col-span-2'>Hello, my name is Lorenzo</div>
      <div className=''>
        <Image alt='me' src='/images/me.jpg' width={300} height={300} className='rounded-full' />
      </div>
    </div>
  );
}

export default HeroSection;
