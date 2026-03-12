import {
  IonButton,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  contrastOutline,
  logOutOutline,
  moonOutline,
  sunnyOutline,
} from 'ionicons/icons';
import { type Theme, useAppStore } from '../../stores/app-store.ts';

const iconMap: Record<Theme, string> = {
  dark: moonOutline,
  light: sunnyOutline,
  system: contrastOutline,
};

export function AppHeader() {
  const { theme, cycleTheme, logout } = useAppStore();

  return (
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>Fusion</IonTitle>
        <IonButton slot="end" fill="clear" onClick={cycleTheme}>
          <IonIcon icon={iconMap[theme]} />
        </IonButton>
        <IonButton slot="end" fill="clear" onClick={logout}>
          <IonIcon icon={logOutOutline} />
        </IonButton>
      </IonToolbar>
    </IonHeader>
  );
}
