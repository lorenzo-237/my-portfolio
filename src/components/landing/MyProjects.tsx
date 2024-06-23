import React, { Fragment } from 'react';
import { PROJECTS } from '../Projects/projects';
import ProjectCard from '../Projects/ProjectCard';
import { Layout, LayoutContent } from '../pages/layout';
import { Button } from '../ui/button';
import { Presentation } from 'lucide-react';
import { Typography } from '../ui/typography';
import Footer from '../Footer';

function MyProjects() {
  return (
    <div className='relative h-full'>
      <Layout className='h-full'>
        <LayoutContent className='mt-20 sm:mt-0 space-y-6'>
          <div className='w-full'>
            <Button variant='ghost' size='sm'>
              <Presentation className='size-4 mr-2' />
              Mes projets
            </Button>
            <Typography variant='h2' className='uppercase underline text-2xl md:text-4xl'>
              Projets
            </Typography>
          </div>
          <div className='w-full text-justify'>
            <ul className='space-y-6'>
              <li className='space-y-2'>
                <Typography variant='p'>
                  En tant que développeur expérimenté, j&apos;ai travaillé sur une variété de projets, principalement
                  dans le domaine médical (mais pas que), alliant des technologies telles que WinDev, Node.js et React.
                </Typography>
                <Typography variant='p'>
                  Je suis fier de mon travail et je suis toujours à la recherche de nouveaux défis pour améliorer mes
                  compétences en tant que développeur.
                </Typography>
              </li>
              <li className='space-y-2'>
                <Typography variant='muted'>
                  Chez adsion, je développe des applications web et des logiciels pour répondre aux besoins spécifiques
                  des professionnels de la santé, en utilisant des bases de données et des APIs pour garantir une
                  expérience utilisateur optimale. Je suis également amené à développer des outils en interne pour
                  répondre aux besoins de mon entreprise.
                </Typography>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl!grid-cols-3 gap-4'>
              {PROJECTS.map((project) => {
                return (
                  <Fragment key={project.id}>
                    <ProjectCard item={project} />
                    {project.children?.map((child) => (
                      <ProjectCard key={child.id} item={child} />
                    ))}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </LayoutContent>
      </Layout>
      <Footer />
    </div>
  );
}

export default MyProjects;
