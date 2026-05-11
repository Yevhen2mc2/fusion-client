import { IonIcon, IonImg } from '@ionic/react';
import type { ProjectFilter, ProjectStatus } from '../../../types/projects.ts';
import { STATUS_COLORS, TYPE_ICONS } from './constants.ts';

interface Props {
  cover: string;
  title: string;
  type: Exclude<ProjectFilter, 'all'>;
  status: ProjectStatus;
  clips?: number;
}

export const ProjectCardCover = ({
  cover,
  title,
  type,
  status,
  clips,
}: Props) => {
  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: '9/16',
        background: '#111',
      }}
    >
      <IonImg
        src={cover}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      {/* Type badge — top left */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '4px 8px',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          borderRadius: 8,
        }}
      >
        <IonIcon
          icon={TYPE_ICONS[type]}
          style={{ fontSize: '13px', color: 'var(--ion-color-primary)' }}
        />
        <span
          style={{
            color: '#fff',
            fontSize: '11px',
            textTransform: 'capitalize',
          }}
        >
          {type}
        </span>
      </div>

      {/* Status badge — top right */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          padding: '4px 8px',
          background: STATUS_COLORS[status],
          borderRadius: 8,
        }}
      >
        <span
          style={{
            color: '#fff',
            fontSize: '11px',
            textTransform: 'capitalize',
          }}
        >
          {status}
        </span>
      </div>

      {/* Clips badge — bottom right */}
      {clips !== undefined && (
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            padding: '4px 8px',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            borderRadius: 8,
          }}
        >
          <span style={{ color: '#fff', fontSize: '11px' }}>{clips} clips</span>
        </div>
      )}
    </div>
  );
};
