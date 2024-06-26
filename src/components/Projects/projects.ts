import {
  badgeCsharp,
  badgeHfSQL,
  badgeLdap,
  badgeNextJs,
  badgeNodeJs,
  badgePostgreSQL,
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
    description:
      "Base de connaissance commune afin de centraliser le stockage de documents et améliorer la collaboration. Le but du projet était de rassembler divers ressources stockées dans différents outils dans une seule application. L'application comprend une structure de contenu claire pour faciliter la recherche et la navigation.",
    badges: [badgeNextJs],
    action: {
      type: 'demo',
      url: 'dev',
    },
  },
  {
    id: 'blaster-api',
    title: 'Blater - API Mantis BT',
    description:
      "J'ai conçu et développé une API pour améliorer la gestion des bogues dans Mantis BT, répondant aux besoins spécifiques de mon entreprise. Cette API personnalisée offre des fonctionnalités plus adaptées aux méthodes de travail des techs & développeurs. J'ai par exemple ajouté un système de changelog lié aux tickets mantis résolus.",
    children: [
      {
        id: 'blast-app',
        title: 'Blast - Logiciel gestion de tickets mantis',
        description:
          "Il s'agit du front end de l'API REST. Il permet de rechercher les tickets mantis plus facilement et aussi d'avoir une gestion des tickets en temps réel sous forme de tableau Kanban. L'authentification passe par un ldap et/ou une base de données SQL Lite.",
        badges: [badgeWindev, badgeCsharp, badgeWebSocket, badgeLdap],
        action: {
          type: 'pictures',
          url: 'dev',
        },
      },
    ],
    badges: [badgeWebSocket, badgeNodeJs, badgeTypescript, badgePrisma],
    action: {
      type: 'github',
      url: 'https://github.com/lorenzo-237/blaster-api.git',
    },
  },
  {
    id: 'protect',
    title: 'Protect',
    description:
      "Logiciel de gestion clients de l'entreprise. Il permet de rechercher et faire des actions sur les structures de nos clients. Notamment l'activation des licences, l'envoie de mail, le déclenchement de mise à jour etc. Il y a un système d'authentification avec des droits spécifiques.",
    badges: [badgeLdap, badgeWindev],
    action: {
      type: 'pictures',
      url: 'dev',
    },
  },
  {
    id: 'pds',
    title: 'Module Plan de soins',
    description:
      "J'ai conçu et développé un module de génération de plan de soins avec gestion des ordonnances pour aider des groupes privés à accélérer leur traitement des ordonnances de plusieurs mois à quelques jours/semaines. Le module permet de créer des plans de soins personnalisés pour les patients, de gérer les ordonnances et de les envoyers aux services tiers correspondants.",
    badges: [badgeWindev, badgeHfSQL],
  },
  {
    id: 'sync-hf-pg',
    title: 'Synchronisation base de données',
    description:
      "J'ai développé un outil de synchronisation entre deux bases de données, HFSQL et PG SQL, pour permettre une mise à jour automatique, à interval régulier, entre les deux systèmes. L'outil utilise des requêtes SQL pour extraire les données de chaque base de données, puis les compare pour identifier les différences et les mettre à jour en conséquence.",
    badges: [badgeWindev, badgePostgreSQL, badgeHfSQL],
  },
  {
    id: 'extra',
    title: 'Et plus encore',
    description:
      "En raison de contraintes de confidentialité, je ne peux pas divulguer ici les détails de nombreux projets sur lesquels j'ai travaillé. Cependant, je peux vous assurer que j'ai une expérience solide et diversifiée dans la conception et la réalisation de logiciel et d'application web.",
    badges: [],
  },
];
