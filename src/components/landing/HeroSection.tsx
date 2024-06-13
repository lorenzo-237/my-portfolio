import Image from 'next/image';
import React from 'react';
import { Layout, LayoutContent } from '../pages/layout';
import { Typography } from '../ui/typography';
import Wave from '../svg/wave';
import { buttonVariants } from '../ui/button';
import { Presentation } from 'lucide-react';
import Link from 'next/link';
import Socials from '../Hero/Socials';

// h-[calc(100vh_-_150px)]

function HeroSection() {
  return (
    <div className='relative h-screen'>
      <Layout className='h-[calc(100vh_-_100px)] sm:h-[calc(100vh_-_150px)]'>
        <LayoutContent className='lg:flex-row'>
          <div className='lg:w-1/2'>
            <div className='space-y-2'>
              <Typography variant='h3' className='uppercase text-md sm:text-lg md:text-xl'>
                Développeur Full Stack Qualifié
              </Typography>
              <Typography variant='h1' className='text-2xl sm:text-4xl md:text-5xl'>
                Salutations, je suis Lorenzo MAGNI
              </Typography>
              <Typography variant='muted' className='text-justify'>
                Ici, vous pourrez découvrir mon parcours, mes projets et les compétences techniques que je maîtrise en
                tant que développeur. Bonne visite !
              </Typography>
              <Link href='/projects' className={buttonVariants({ size: 'sm' })}>
                <Presentation className='size-4 mr-2' /> Mes projets
              </Link>
              <Socials />
            </div>
          </div>

          <div className='relative lg:w-1/2 flex flex-col justify-center items-center gap-4'>
            <div className='z-20 mt-8 lg:mt-0 size-60 xl:size-72 rounded-full overflow-hidden shadow-xl'>
              <Image alt='me' src='/images/me.png' width={288} height={288} />
            </div>
            <Typography variant='h3' className='text-center text-lg uppercase'>
              Bienvenue sur mon portfolio 😉
            </Typography>
            <div className='shadow'></div>
          </div>
        </LayoutContent>
      </Layout>

      <Wave className='absolute left-0 right-0 bottom-0' />
    </div>
  );
}

export default HeroSection;
