import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { AppHeader } from '../components/layout/app-header.tsx';
import { LiveHeader } from '../components/live/live-header.tsx';
import {
  LivePreviewCard,
  type LiveStream,
} from '../components/live/live-preview-card.tsx';
import avatar1 from '../assets/avatars/avatar1.jpg';
import avatar2 from '../assets/avatars/avatar2.jpg';
import avatar3 from '../assets/avatars/avatar3.jpg';
import coverNetflix from '../assets/covers/netflix.jpg';
import coverCoding from '../assets/covers/coding.jpg';
import coverTable from '../assets/covers/table.jpg';

const MOCK_STREAMS: LiveStream[] = [
  {
    id: '1',
    thumbnail: coverNetflix,
    title: 'Creating content with AI tools 🚀',
    streamer: {
      name: 'Sarah Chen',
      username: '@sarahcreates',
      avatar: avatar1,
    },
    viewerCount: 1234,
  },
  {
    id: '2',
    thumbnail: coverCoding,
    title: 'Live editing session - Story Mode demo',
    streamer: {
      name: 'Marcus Johnson',
      username: '@marcustech',
      avatar: avatar2,
    },
    viewerCount: 856,
  },
  {
    id: '3',
    thumbnail: coverTable,
    title: 'Q&A: How I grew to 100k followers',
    streamer: {
      name: 'Alex Rivera',
      username: '@alexedits',
      avatar: avatar3,
    },
    viewerCount: 2341,
  },
  {
    id: '4',
    thumbnail:
      'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=400&h=700&fit=crop',
    title: 'Tutorial: Remix Mode step by step',
    streamer: {
      name: 'Emma Davis',
      username: '@emmacreates',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
    viewerCount: 567,
  },
];

const Live = () => (
  <IonPage>
    <AppHeader />
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Live</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div className="ion-padding" style={{ maxWidth: 700, margin: '0 auto' }}>
        <LiveHeader />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
          }}
        >
          {MOCK_STREAMS.map((stream) => (
            <LivePreviewCard key={stream.id} stream={stream} />
          ))}
        </div>
      </div>
    </IonContent>
  </IonPage>
);

export default Live;
