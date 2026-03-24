import { IonButton, IonIcon, IonText } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

interface NoSearchResultsProps {
  query: string;
  onReset: () => void;
}

export function NoSearchResults({ query, onReset }: NoSearchResultsProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '48px 24px',
        gap: '12px',
        textAlign: 'center',
      }}
    >
      <IonIcon
        icon={searchOutline}
        style={{ fontSize: '64px', color: 'var(--ion-color-medium)' }}
      />
      <IonText>
        <h2 style={{ margin: 0 }}>No results for &ldquo;{query}&rdquo;</h2>
      </IonText>
      <IonText color="medium">
        <p style={{ margin: 0 }}>
          Try a different keyword or reset the filters
        </p>
      </IonText>
      <IonButton fill="outline" onClick={onReset}>
        Reset
      </IonButton>
    </div>
  );
}
