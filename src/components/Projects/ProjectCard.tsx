import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { ActionItem, ProjectItem } from './project.type';
import { Badge } from '../ui/badge';
import { Button, buttonVariants } from '../ui/button';
import { getTailwindClass } from './badges';
import Link from 'next/link';
import { GitHubLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import { Rocket } from 'lucide-react';

function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <p className='text-justify text-sm'>{item.description}</p>
        <ul className='flex flex-col lg:flex-row gap-2 justify-center items-center'>
          {item.badges.map((badge) => (
            <li key={`${item.id}-${badge.id}`}>
              <Badge variant='none' className={getTailwindClass(badge.color)}>
                {badge.name}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      {item.action && (
        <CardFooter className='justify-center'>
          <ActionButton action={item.action} />
        </CardFooter>
      )}
    </Card>
  );
}

function ActionButton({ action }: { action: ActionItem }) {
  switch (action.type) {
    case 'github':
      return (
        <Link href={action.url} className={buttonVariants({ size: 'sm' })}>
          <GitHubLogoIcon className='mr-2 size-4' />
          Voir le repo
        </Link>
      );

    case 'demo':
      return (
        <Link href={action.url} className={buttonVariants({ size: 'sm' })}>
          <Rocket className='mr-2 size-4' />
          Voir la démo
        </Link>
      );

    case 'url':
      return (
        <Link href={action.url} className={buttonVariants({ size: 'sm' })}>
          <VercelLogoIcon className='mr-2 size-4' />
          Voir la démo
        </Link>
      );
    default:
      return null;
  }
}

export default ProjectCard;
