export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  children?: ProjectItem[];
  badges: BadgeItem[];
  action?: ActionItem;
};

export type BadgeItem = {
  id: string;
  name: string;
  color: 'red' | 'yellow' | 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'cyan' | 'lime';
};

export type ActionItem = {
  type: 'url' | 'demo' | 'github';
  url: string;
};
