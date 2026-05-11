import { IonChip, IonIcon, IonLabel } from '@ionic/react';
import {
  cutOutline,
  documentTextOutline,
  radioOutline,
  videocamOutline,
} from 'ionicons/icons';
import type { ProjectFilter } from '../../types/projects.ts';

interface Props {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
  counts: Record<ProjectFilter, number>;
}

const FILTERS: { value: ProjectFilter; label: string; icon?: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'remix', label: 'Remix', icon: cutOutline },
  { value: 'story', label: 'Story', icon: documentTextOutline },
  { value: 'upload', label: 'Upload', icon: videocamOutline },
  { value: 'live', label: 'Live', icon: radioOutline },
];

const ProjectsFilter = ({ activeFilter, onFilterChange, counts }: Props) => (
  <div
    className="ion-padding-horizontal"
    style={{
      display: 'flex',
      gap: '6px',
      overflowX: 'auto',
      paddingBlock: '6px',
      scrollbarWidth: 'none',
    }}
  >
    {FILTERS.map(({ value, label, icon }) => (
      <IonChip
        key={value}
        onClick={() => onFilterChange(value)}
        color={activeFilter === value ? 'primary' : undefined}
        outline={activeFilter !== value}
        className="ion-no-margin"
        style={{ flexShrink: 0, height: '32px' }}
      >
        {icon && <IonIcon icon={icon} style={{ fontSize: '15px' }} />}
        <IonLabel style={{ fontSize: '13px' }}>{label}</IonLabel>
        <span
          style={{
            marginLeft: '4px',
            padding: '1px 6px',
            borderRadius: '999px',
            fontSize: '11px',
            background:
              activeFilter === value
                ? 'rgba(255,255,255,0.2)'
                : 'var(--ion-color-light)',
            color:
              activeFilter === value ? 'inherit' : 'var(--ion-color-medium)',
          }}
        >
          {counts[value]}
        </span>
      </IonChip>
    ))}
  </div>
);

export { ProjectsFilter };
