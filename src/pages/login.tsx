import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
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
        <div style={{ textAlign: 'center', padding: '32px 0 16px' }}>
          <IonText color="primary">
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>
              Fusion
            </h1>
          </IonText>
        </div>
        <LoginForm />
      </IonContent>
    </IonPage>
  );
};

export default Login;
