import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { AppHeader } from '../components/layout/app-header.tsx';

const Search = () => (
  <IonPage>
    <AppHeader />
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Search</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonContent>
  </IonPage>
);

export default Search;
