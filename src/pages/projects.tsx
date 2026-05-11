import { useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { AppHeader } from '../components/layout/app-header.tsx';
import { ProjectsPageHeader } from '../components/projects/projects-page-header.tsx';
import { ProjectsFilter } from '../components/projects/projects-filter.tsx';
import { ProjectCard } from '../components/projects/project-card/index.tsx';
import type { Project, ProjectFilter } from '../types/projects.ts';

import codingCover from '../assets/covers/coding.jpg';
import manCover from '../assets/covers/man.jpg';
import netflixCover from '../assets/covers/netflix.jpg';
import tableCover from '../assets/covers/table.jpg';
import wallCover from '../assets/covers/wall.jpg';

const COUNTS = { all: 5, remix: 1, story: 2, upload: 1, live: 1 };

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Podcast Episode #24 Clips',
    type: 'remix',
    status: 'ready',
    cover: codingCover,
    clips: 8,
    createdAt: '2 days ago',
  },
  {
    id: '2',
    title: 'Morning Routine Story',
    type: 'story',
    status: 'ready',
    cover: manCover,
    clips: 5,
    createdAt: '3 days ago',
  },
  {
    id: '3',
    title: 'Netflix Night Recap',
    type: 'story',
    status: 'processing',
    cover: netflixCover,
    clips: 3,
    createdAt: '1 week ago',
  },
  {
    id: '4',
    title: 'Coffee Shop Session',
    type: 'upload',
    status: 'draft',
    cover: tableCover,
    createdAt: '5 days ago',
  },
  {
    id: '5',
    title: 'Street Art Live Tour',
    type: 'live',
    status: 'ready',
    cover: wallCover,
    createdAt: 'Yesterday',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filtered =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeFilter);

  return (
    <IonPage>
      <AppHeader />
      <IonContent fullscreen>
        <div
          className="ion-padding"
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          <ProjectsPageHeader />
          <ProjectsFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={COUNTS}
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginTop: '12px',
            }}
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Projects;
