import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import {
  addCircleOutline,
  folderOpenOutline,
  homeOutline,
  personOutline,
  searchOutline,
  videocamOutline,
} from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Create from '../../pages/create.tsx';
import Feed from '../../pages/feed.tsx';
import Live from '../../pages/live.tsx';
import Profile from '../../pages/profile.tsx';
import Projects from '../../pages/projects.tsx';
import Search from '../../pages/search.tsx';

export function AppTabs() {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/live">
          <Live />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Redirect to="/feed" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="feed" href="/feed">
          <IonIcon icon={homeOutline} />
          <IonLabel>Feed</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/search">
          <IonIcon icon={searchOutline} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="create" href="/create">
          <IonIcon icon={addCircleOutline} />
          <IonLabel>Create</IonLabel>
        </IonTabButton>
        <IonTabButton tab="live" href="/live">
          <IonIcon icon={videocamOutline} />
          <IonLabel>Live</IonLabel>
        </IonTabButton>
        <IonTabButton tab="projects" href="/projects">
          <IonIcon icon={folderOpenOutline} />
          <IonLabel>Projects</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/profile">
          <IonIcon icon={personOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}
