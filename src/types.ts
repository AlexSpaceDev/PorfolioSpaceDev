export enum Category {
  WEB = 'WEB',
  APPS = 'APPS',
  GAMING = 'GAMING',
  VR_AR = 'VR_AR',
}

export type ArchiveFilter = 'TODOS' | Category;

export interface Project {
  id: string;
  title: string;
  category: Category;
  image: string;
  tags: string[];
  description: string;
  status: 'Desplegado' | 'En Vivo' | 'Completado' | 'Prototipo';
  tech: string;
  url: string;
}

export const SIGNAL_MAP: Record<ArchiveFilter, string> = {
  TODOS: '00',
  WEB: '01',
  GAMING: '02',
  APPS: '03',
  VR_AR: '04',
};
