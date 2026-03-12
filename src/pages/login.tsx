import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import LoginForm from '../components/auth/login-form.tsx';
import { AppHeader } from '../components/layout/app-header.tsx';

const Login = () => {
  return (
    <IonPage>
      <AppHeader />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sign In</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LoginForm />
      </IonContent>
    </IonPage>
  );
};

export default Login;
