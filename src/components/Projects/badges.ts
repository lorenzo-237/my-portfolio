import { BadgeItem } from './project.type';

export const badgeNextJs: BadgeItem = {
  id: 'nextjs',
  color: 'green',
  name: 'Next.js',
};

export const badgeWebSocket: BadgeItem = {
  id: 'websocket',
  color: 'blue',
  name: 'WebSocket',
};

export const badgeLdap: BadgeItem = {
  id: 'ldap',
  color: 'yellow',
  name: 'LDAP',
};

export const badgeNodeJs: BadgeItem = {
  id: 'nodejs',
  color: 'green',
  name: 'Node.js',
};

export const badgePrisma: BadgeItem = {
  id: 'prisma',
  color: 'green',
  name: 'Prisma',
};

export const badgeTypescript: BadgeItem = {
  id: 'typescript',
  color: 'blue',
  name: 'TypeScript',
};

export const badgeWindev: BadgeItem = {
  id: 'windev',
  color: 'yellow',
  name: 'WinDev',
};

export const badgePostgreSQL: BadgeItem = {
  id: 'postgresql',
  color: 'blue',
  name: 'PostgreSQL',
};

export const badgeHfSQL: BadgeItem = {
  id: 'hfsql',
  color: 'red',
  name: 'HFSQL',
};

export const badgeCsharp: BadgeItem = {
  id: 'csharp',
  color: 'purple',
  name: 'C#',
};

// Nouvelles badges
export const badgeReact: BadgeItem = {
  id: 'react',
  color: 'cyan',
  name: 'React',
};

// Fonction pour obtenir la classe Tailwind
export function getTailwindClass(color: BadgeItem['color']): string {
  const colorMap: { [key in BadgeItem['color']]: string } = {
    red: 'bg-red-500 text-white',
    yellow: 'bg-yellow-500 text-black',
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    purple: 'bg-purple-500 text-white',
    orange: 'bg-orange-500 text-white',
    pink: 'bg-pink-500 text-white',
    cyan: 'bg-cyan-500 text-black',
    lime: 'bg-lime-500 text-black',
  };

  return colorMap[color];
}
