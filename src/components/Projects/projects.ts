import {
  badgeCsharp,
  badgeLdap,
  badgeNextJs,
  badgeNodeJs,
  badgePrisma,
  badgeTypescript,
  badgeWebSocket,
  badgeWindev,
} from './badges';
import { ProjectItem } from './project.type';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'mydoc',
    title: 'Mydoc',
    description: 'Base de connaissance commune',
    badges: [badgeNextJs],
  },
  {
    id: 'blaster-api',
    title: 'API Rest Mantis Bug Tracker',
    description:
      'Nouvel api pour manipuler la base de données de mantis BT. Il existait déjà une API mise en place par Mantis eux meme mais elle n est pas adapté au mode de fonctionnement de mon entreprise',
    children: [
      {
        id: 'blast-app',
        title: 'Blast - Logiciel gestion de tickets mantis ',
        description:
          "Il s'agit du front end de l'API REST. Il permet de rechercher les bug mantis correspondant aux critères principaux de la boite et aussi d'avoir une gestion des tickets en temps réel sous forme de tableau Kanban. L'authentification passe par un ldap et/ou une base de données SQL Lite.",
        badges: [badgeWindev, badgeCsharp, badgeWebSocket, badgeLdap],
      },
    ],
    badges: [badgeWebSocket, badgeNodeJs, badgeTypescript, badgePrisma],
  },
  {
    id: 'protect',
    title: 'Protect',
    description:
      "Logiciel de gestion clients de l'entreprise. Il permet de rechercher et faire des actions sur les structures de nos clients. Notamment l'activation des licences, l'envoie de mail, le déclenchement de mise à jour etc. Il y a un système d'authentification avec des droits spécifiques.",
    badges: [badgeLdap, badgeWindev],
  },
  {
    id: 'test',
    title: 'test',
    description: 'test',
    badges: [badgeLdap],
  },
];
