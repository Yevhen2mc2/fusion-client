import {
  cutOutline,
  documentTextOutline,
  radioOutline,
  videocamOutline,
} from 'ionicons/icons';
import type { ProjectFilter, ProjectStatus } from '../../../types/projects.ts';

export const TYPE_ICONS: Record<Exclude<ProjectFilter, 'all'>, string> = {
  remix: cutOutline,
  story: documentTextOutline,
  upload: videocamOutline,
  live: radioOutline,
};

export const STATUS_COLORS: Record<ProjectStatus, string> = {
  ready: '#22c55e',
  processing: '#f59e0b',
  draft: 'rgba(255,255,255,0.4)',
};
