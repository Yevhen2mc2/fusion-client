export type ProjectFilter = 'all' | 'remix' | 'story' | 'upload' | 'live';

export type ProjectStatus = 'ready' | 'processing' | 'draft';

export interface Project {
  id: string;
  title: string;
  type: Exclude<ProjectFilter, 'all'>;
  status: ProjectStatus;
  cover: string;
  clips?: number;
  createdAt: string;
}
