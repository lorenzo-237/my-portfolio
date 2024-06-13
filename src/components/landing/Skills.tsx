import React from 'react';
import { Layout, LayoutContent } from '../pages/layout';
import { Button } from '../ui/button';
import { Typography } from '../ui/typography';
import { Languages, Lightbulb } from 'lucide-react';

function Skills() {
  return (
    <div className='relative h-screen'>
      <Layout className='h-full'>
        <LayoutContent className='mt-20 sm:mt-0 space-y-6'>
          <div className='w-full'>
            <Button variant='ghost' size='sm'>
              <Lightbulb className='size-4 mr-2' />
              Mes compétences
            </Button>
            <Typography variant='h2' className='uppercase underline text-2xl md:text-4xl'>
              Ma stack technique & mes compétences
            </Typography>
          </div>
          <div>
            <ul className='space-y-6'>
              <li>
                <Typography variant='p'>
                  Actuellement je suis en CDI dans une boîte où je code principalement en Windev. Je fais aussi du
                  NextJS, et du NodeJS from scratch pour des webservice par exemple.
                </Typography>
              </li>
              <li>
                <Typography variant='muted'>
                  J'ai de l'expérience dans pas mal de technos mais j'ai décidé de vous présenter ma stack préférée.
                </Typography>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>✅ = Maitrisé</li>
              <li>👌 = Bon niveau</li>
              <li>🎓 = Apprentissage</li>
            </ul>
          </div>
          <div className='w-full space-y-4'>
            <Typography variant='h3' className='flex items-center gap-2'>
              <Languages />
              Langages de programmation préférés
            </Typography>
            <ul className=''>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Javascript & Typescript</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Html & Css</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Windev</span>
              </li>
              <li className='space-x-4'>
                <span>👌</span>
                <span>C# (Librairie .NET & Unity)</span>
              </li>
              <li className='space-x-4'>
                <span>🎓</span>
                <span>Dart</span>
              </li>
            </ul>
          </div>
          <div className='w-full space-y-4'>
            <Typography variant='h3' className='flex items-center gap-2'>
              <Languages />
              Frameworks et Librairies
            </Typography>
            <ul className=''>
              <li className='space-x-4'>
                <span>✅</span>
                <span>React</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>NextJS</span>
                <span>❤️</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>TailwindCSS</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>NestJS</span>
                <span>❤️</span>
              </li>
              <li className='space-x-4'>
                <span>🎓</span>
                <span>Flutter</span>
              </li>
            </ul>
          </div>
          <div className='w-full space-y-4'>
            <Typography variant='h3' className='flex items-center gap-2'>
              <Languages />
              Technos & Outils
            </Typography>
            <ul className=''>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Prisma ORM</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Postgresql / Mysql / HFSQL</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Git</span>
              </li>
              <li className='space-x-4'>
                <span>🎓</span>
                <span>Firebase / AWS</span>
              </li>
            </ul>
          </div>
        </LayoutContent>
      </Layout>
    </div>
  );
}

export default Skills;
