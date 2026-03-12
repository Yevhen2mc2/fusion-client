import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home.tsx';
import Login from './pages/login.tsx';
import { AuthProvider } from './components/providers/auth-provider.tsx';
import { AuthGuard } from './components/providers/auth-guard.tsx';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

setupIonicReact();

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <AuthProvider>
          <AuthGuard>
            <IonRouterOutlet>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </IonRouterOutlet>
          </AuthGuard>
        </AuthProvider>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
