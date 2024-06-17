import React from 'react';
import { Layout, LayoutContent } from '../pages/layout';
import { Button } from '../ui/button';
import { Typography } from '../ui/typography';
import { GraduationCap, Languages, Lightbulb, Box, Component } from 'lucide-react';

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
                  J&apos;ai de l&apos;expérience dans pas mal de technos mais j&apos;ai décidé de vous présenter ma
                  stack préférée.
                </Typography>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            <ul className='grid grid-cols-2 sm:grid-cols-3'>
              <li>✅ = Maitrisé</li>
              <li>👌 = Bon niveau</li>
              <li className='space-x-2 flex items-center'>
                <GraduationCap className='size-5' />
                <span> = Apprentissage</span>
              </li>
            </ul>
          </div>
          <div className='w-full space-y-4'>
            <Typography variant='h3' className='flex items-center gap-2'>
              <Languages />
              Langages de programmation préférés
            </Typography>
            <ul className='grid grid-cols-1 sm:grid-cols-2'>
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
              <li className='space-x-4 flex items-center'>
                <GraduationCap className='size-5' />
                <span>Dart</span>
              </li>
            </ul>
          </div>
          <div className='w-full space-y-4'>
            <Typography variant='h3' className='flex items-center gap-2'>
              <Component />
              Frameworks et Librairies
            </Typography>
            <ul className='grid grid-cols-1 sm:grid-cols-2'>
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
              <li className='space-x-4 flex items-center'>
                <GraduationCap className='size-5' />
                <span>Flutter</span>
              </li>
              <li className='space-x-4 flex items-center'>
                <GraduationCap className='size-5' />
                <span>FramerMotion</span>
              </li>
            </ul>
          </div>
          <div className='w-full space-y-4'>
            <Typography variant='h3' className='flex items-center gap-2'>
              <Box />
              Technos & Outils
            </Typography>
            <ul className='grid grid-cols-1 sm:grid-cols-2'>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Prisma ORM</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Postgresql / Mysql / HFSQL / Redis</span>
              </li>
              <li className='space-x-4'>
                <span>✅</span>
                <span>Git</span>
              </li>
              <li className='space-x-4'>
                <span>👌</span>
                <span>Docker</span>
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
