import React from 'react';
import { Layout, LayoutContent } from '../pages/layout';
import { Button } from '../ui/button';
import { GraduationCap } from 'lucide-react';
import { Typography } from '../ui/typography';
import Footer from '../Footer';

function MyEducation() {
  return (
    <div className='relative h-full sm:h-screen'>
      <Layout className='h-full'>
        <LayoutContent className='mt-20 sm:mt-0 space-y-6'>
          <div className='w-full'>
            <Button variant='ghost' size='sm'>
              <GraduationCap className='size-4 mr-2' />
              Mon parcours
            </Button>
            <Typography variant='h2' className='uppercase underline text-2xl md:text-4xl'>
              étude et travail
            </Typography>
          </div>
          <div className='w-full text-justify'>
            <ul className='space-y-6'>
              <li className='space-y-2'>
                <Typography variant='p'>
                  J&apos;ai acquis les bases grâce à un DUT informatique, puis j&apos;ai consolidé mes compétences en
                  alternance, car je préfère la pratique à la théorie. Depuis, je continue d&apos;apprendre de nouvelles
                  technologies en autodidacte, telles que des frameworks et des bibliothèques.
                </Typography>
                <Typography variant='muted'>
                  Cette approche me permet de rester à jour dans mon domaine et de répondre aux besoins changeants des
                  projets sur lesquels je travaille.
                </Typography>
              </li>
            </ul>
          </div>
          <div className='w-full grid grid-cols-2 gap-6'>
            <div className='border-r-4 sm:border-r-8 '>
              <ul>
                <li className='h-32 flex items-center justify-center'>depuis le 01 Juin 2024</li>
                <li className='h-32 flex items-center justify-center'>01/09/2019 - Aujourd&apos;hui</li>
                <li className='h-32 flex items-center justify-center'>2018-2019</li>
                <li className='h-32 flex items-center justify-center'>
                  <Typography>2016-2018</Typography>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='h-32 flex items-center justify-start'>
                  <div>
                    <Typography variant='h3' className='text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl'>
                      Développeur Full Stack
                    </Typography>
                    <Typography variant='muted'>En freelance</Typography>
                  </div>
                </li>
                <li className='h-32 flex items-center justify-start'>
                  <div>
                    <Typography variant='h3' className='text-primary text-lg sm:text-xl md:text-2xl lg:text-3xl'>
                      Analyste Développeur / Programmeur
                    </Typography>
                    <Typography variant='muted'>ADSION Info Santé</Typography>
                    <Typography variant='muted'>Windev, C#, Typescript & NextJS</Typography>
                  </div>
                </li>
                <li className='h-32 flex items-center justify-start'>
                  <div>
                    <Typography>Licence pro. ACPI (en alternance)</Typography>
                    <Typography variant='muted'>IUT de Montpellier</Typography>
                    <Typography variant='muted'>Windev, Java</Typography>
                  </div>
                </li>
                <li className='h-32 flex items-center justify-start'>
                  <div>
                    <Typography>DUT Informatique</Typography>
                    <Typography variant='muted'>IUT de Montpellier</Typography>
                    <Typography variant='muted'>HTML, CSS, PHP</Typography>
                    <Typography variant='muted'>Javascript, Java, Python, C</Typography>
                    <Typography variant='muted'>SQL</Typography>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </LayoutContent>
      </Layout>
      <Footer />
    </div>
  );
}

export default MyEducation;
