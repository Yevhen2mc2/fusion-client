import { IonIcon } from '@ionic/react';
import { createOutline, ellipsisVerticalOutline } from 'ionicons/icons';

interface Props {
  title: string;
  createdAt: string;
  onMenuOpen: () => void;
}

export const ProjectCardInfo = ({ title, createdAt, onMenuOpen }: Props) => {
  return (
    <div className="ion-padding-horizontal" style={{ paddingBlock: '12px' }}>
      <h3
        style={{
          margin: '0 0 4px',
          color: 'var(--ion-text-color)',
          fontSize: '14px',
          fontWeight: 600,
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: '0 0 10px',
          color: 'var(--ion-color-medium)',
          fontSize: '12px',
        }}
      >
        {createdAt}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <button
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            padding: '8px 10px',
            background:
              'linear-gradient(to right, var(--ion-color-primary), var(--ion-color-primary-tint))',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: '13px',
            cursor: 'pointer',
          }}
        >
          <IonIcon icon={createOutline} style={{ fontSize: '15px' }} />
          Edit
        </button>

        <button
          onClick={onMenuOpen}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
          }}
        >
          <IonIcon
            icon={ellipsisVerticalOutline}
            style={{ fontSize: '16px', color: '#fff' }}
          />
        </button>
      </div>
    </div>
  );
};
