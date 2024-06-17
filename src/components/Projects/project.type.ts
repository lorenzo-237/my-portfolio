export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  children?: ProjectItem[];
  badges: BadgeItem[];
};

export type BadgeItem = {
  id: string;
  name: string;
  color: 'red' | 'yellow' | 'blue' | 'green';
};
