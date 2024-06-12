import Image from 'next/image';
import React from 'react';
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from '../pages/layout';
import { Typography } from '../ui/typography';
import Wave from '../svg/wave';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { buttonVariants } from '../ui/button';
import { Linkedin } from 'lucide-react';

// h-[calc(100vh_-_150px)]

function HeroSection() {
  return (
    <div className='relative h-screen'>
      <Layout className='h-[calc(100vh_-_150px)]'>
        <LayoutContent className='flex items-stretch'>
          <div className='w-1/2 flex justify-center items-center'>
            <div className='space-y-2'>
              <Typography variant='h3' className='uppercase'>
                Développeur Full Stack Qualifié
              </Typography>
              <Typography variant='h1' className='text-5xl'>
                Salutations, je suis Lorenzo MAGNI
              </Typography>
              <Typography variant='muted' className='text-justify'>
                Ici, vous pourrez découvrir mon parcours, mes projets et les compétences techniques que je maîtrise en
                tant que développeur. Bonne visite !
              </Typography>
            </div>
          </div>

          <div className='relative w-1/2 flex justify-center items-center'>
            <div className='z-10 size-72 rounded-full overflow-hidden shadow-xl'>
              <Image alt='me' src='/images/me.jpg' width={288} height={288} />
            </div>
            <Card className='absolute z-20 right-[20px] bottom-32 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10'>
              <CardHeader className='text-center pb-2'>
                <Typography>Bienvenue sur mon portfolio 😉</Typography>
              </CardHeader>
              <CardFooter>
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
              </CardFooter>
            </Card>
            <div className='shadow'></div>
          </div>
        </LayoutContent>
      </Layout>

      <Wave className='absolute left-0 right-0 bottom-0' />
    </div>
  );
}

export default HeroSection;
