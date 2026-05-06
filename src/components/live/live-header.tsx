import { IonButton, IonIcon } from '@ionic/react';
import { radioOutline } from 'ionicons/icons';

interface LiveHeaderProps {
  onGoLive?: () => void;
}

export const LiveHeader = ({ onGoLive }: LiveHeaderProps) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 16,
    }}
  >
    <div>
      <h2 style={{ margin: 0 }}>Live Streams</h2>
      <p style={{ margin: 0, opacity: 0.6, fontSize: 14 }}>
        Watch creators go live
      </p>
    </div>
    <IonButton
      style={{
        '--background': 'linear-gradient(to right, #ef4444, #ec4899)',
        '--border-radius': '20px',
      }}
      onClick={onGoLive}
    >
      <IonIcon slot="start" icon={radioOutline} />
      Go Live
    </IonButton>
  </div>
);
