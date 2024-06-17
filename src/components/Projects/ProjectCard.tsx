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
      <CardContent>
        <p>{item.description}</p>
        <ul className='flex gap-2'>
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
