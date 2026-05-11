import { useIonActionSheet } from '@ionic/react';
import {
  createOutline,
  documentTextOutline,
  downloadOutline,
} from 'ionicons/icons';
import type { Project } from '../../../types/projects.ts';
import { ProjectCardCover } from './project-card-cover.tsx';
import { ProjectCardInfo } from './project-card-info.tsx';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const [present] = useIonActionSheet();

  const openMenu = () => {
    void present({
      buttons: [
        { text: 'Download', icon: downloadOutline },
        { text: 'Rename', icon: createOutline },
        { text: 'Duplicate', icon: documentTextOutline },
        { text: 'Delete', role: 'destructive' },
        { text: 'Cancel', role: 'cancel' },
      ],
    });
  };

  return (
    <div
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(255,255,255,0.03)',
        transition: 'border-color 0.2s',
      }}
    >
      <ProjectCardCover
        cover={project.cover}
        title={project.title}
        type={project.type}
        status={project.status}
        clips={project.clips}
      />
      <ProjectCardInfo
        title={project.title}
        createdAt={project.createdAt}
        onMenuOpen={openMenu}
      />
    </div>
  );
};
