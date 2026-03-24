import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/login.tsx';
import { AppTabs } from './components/layout/app-tabs.tsx';
import { AuthGuard } from './components/providers/auth-guard.tsx';
import { ThemeProvider } from './components/providers/theme-provider.tsx';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark mode palette — responds to .ion-palette-dark on <html> */
import '@ionic/react/css/palettes/dark.class.css';

/* App theme variables */
import './theme/variables.css';

setupIonicReact();

function App() {
  return (
    <IonApp>
      <ThemeProvider>
        <IonReactRouter>
          <AuthGuard>
            <IonRouterOutlet>
              <Route exact path="/login">
                <Login />
              </Route>
              <AppTabs />
            </IonRouterOutlet>
          </AuthGuard>
        </IonReactRouter>
      </ThemeProvider>
    </IonApp>
  );
}

export default App;
