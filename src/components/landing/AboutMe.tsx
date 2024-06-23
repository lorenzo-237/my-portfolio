import React from 'react';
import { Layout, LayoutContent } from '../pages/layout';
import { Button } from '../ui/button';
import { Heart, Languages, User } from 'lucide-react';
import { Typography } from '../ui/typography';
import Link from 'next/link';
import Footer from '../Footer';

function AboutMe() {
  return (
    <div className='relative h-full sm:h-screen'>
      <Layout className='h-full'>
        <LayoutContent className='mt-20 sm:mt-0 space-y-6'>
          <div className='w-full'>
            <Button variant='ghost' size='sm'>
              <User className='size-4 mr-2' />A propos de moi
            </Button>
            <Typography variant='h2' className='uppercase underline text-2xl md:text-4xl'>
              Développeur full stack
            </Typography>
          </div>
          <div className='w-full text-justify'>
            <ul className='space-y-6'>
              <li>
                <Typography variant='p'>
                  Enthousiaste et passionné par le développement d&apos;applications, je suis un apprenant perpétuel,
                  toujours à la recherche de nouveaux défis pour enrichir mes{' '}
                  <Link href='/skills' className='text-primary underline-offset-4 hover:underline'>
                    compétences
                  </Link>
                  .
                </Typography>
              </li>
              <li>
                <Typography variant='p'>
                  Ma curiosité m&apos;amène souvent à explorer des projets open source dans les technologies et langages
                  qui m&apos;intéressent, tels que <b>Typescript & React</b>.
                </Typography>
              </li>

              <li>
                <Typography variant='p'>
                  Je suis quelqu&apos;un de très sérieux et professionnel, surtout quand il s&apos;agit de mon travail,
                  mais j&apos;apprécie aussi la détente et l&apos;humour, car je pense qu&apos;il est important de
                  savoir allier les deux pour créer une atmosphère de travail agréable et productive.
                </Typography>
              </li>
            </ul>
          </div>

          <div className='w-full'>
            <Typography variant='muted'>
              PS: Je maîtrise le front-end et le back-end, même si je l&apos;avoue, j&apos;ai une préférence pour le
              back-end 😆
            </Typography>
          </div>

          <div className='w-full space-y-4'>
            <Typography variant='h3' className='flex items-center gap-2'>
              <Languages /> Langues
            </Typography>
            <ul className=''>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Français</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Anglais</span>
              </li>
              <li className='space-x-4'>
                <span>👌</span>
                <span>Espagnol</span>
              </li>
            </ul>
          </div>
          <div className='w-full space-y-4'>
            <Typography variant='h3' className='flex items-center gap-2'>
              <Heart /> Loisirs
            </Typography>
            <ul className='grid grid-cols-2 md:grid-cols-1'>
              <li className='space-x-4'>
                <span>💻</span>
                <span>Coding</span>
              </li>
              <li className='space-x-4'>
                <span>🏋🏻‍♂️</span>
                <span>Sport</span>
              </li>
              <li className='space-x-4'>
                <span>🎮</span>
                <span>Jeux vidéos</span>
              </li>
              <li className='space-x-4'>
                <span>🎲</span>
                <span>Jeux de société</span>
              </li>
              <li className='space-x-4'>
                <span>📺</span>
                <span>Animes</span>
              </li>
            </ul>
          </div>
        </LayoutContent>
      </Layout>
      <Footer className='' />
    </div>
  );
}

export default AboutMe;
