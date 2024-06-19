import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { ProjectItem } from './project.type';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

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
              <Badge variant='default'>{badge.name}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className='justify-center'>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
