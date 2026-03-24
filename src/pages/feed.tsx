import { useState } from 'react';
import {
  IonBadge,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  personOutline,
  playOutline,
  pricetagOutline,
  trendingUpOutline,
  videocamOutline,
} from 'ionicons/icons';
import { AppHeader } from '../components/layout/app-header.tsx';
import { formatCount } from '../utils/format.ts';

const TRENDING_HASHTAGS = [
  { tag: 'fyp', postCount: 2400000, growPercent: 14 },
  { tag: 'viral', postCount: 1800000, growPercent: 22 },
  { tag: 'dance', postCount: 980000, growPercent: 8 },
  { tag: 'comedy', postCount: 760000, growPercent: 31 },
  { tag: 'fitness', postCount: 540000, growPercent: 17 },
];

const TRENDING_VIDEOS = [
  {
    name: 'Morning routine that changed my life',
    author: '@wellnessguru',
    previewImage: 'https://picsum.photos/seed/v1/120/80',
  },
  {
    name: 'Trying viral food combos',
    author: '@foodievibes',
    previewImage: 'https://picsum.photos/seed/v2/120/80',
  },
  {
    name: 'Night city skateboarding',
    author: '@skatelife',
    previewImage: 'https://picsum.photos/seed/v3/120/80',
  },
  {
    name: 'Easy 3-minute abs workout',
    author: '@fitquick',
    previewImage: 'https://picsum.photos/seed/v4/120/80',
  },
  {
    name: 'Street magic reactions',
    author: '@magicmoments',
    previewImage: 'https://picsum.photos/seed/v5/120/80',
  },
];

const Feed = () => {
  const [segment, setSegment] = useState<'feed' | 'hashtags' | 'videos'>(
    'feed',
  );

  return (
    <IonPage>
      <AppHeader />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonToolbar>
          <IonSegment
            value={segment}
            onIonChange={(e) =>
              setSegment(e.detail.value as 'feed' | 'hashtags' | 'videos')
            }
          >
            <IonSegmentButton value="feed">
              <IonIcon icon={playOutline} />
              <IonLabel>Feed</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="hashtags">
              <IonIcon icon={pricetagOutline} />
              <IonLabel>Trending Hashtags</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="videos">
              <IonIcon icon={videocamOutline} />
              <IonLabel>Trending Videos</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>

        {segment === 'feed' && <div />}

        {segment === 'hashtags' && (
          <IonList>
            {TRENDING_HASHTAGS.map(({ tag, postCount, growPercent }) => (
              <IonItem key={tag}>
                <IonIcon icon={pricetagOutline} slot="start" />
                <IonLabel>
                  <h2>#{tag}</h2>
                  <p>{formatCount(postCount)} posts</p>
                </IonLabel>
                <IonBadge slot="end" color="success">
                  <IonIcon icon={trendingUpOutline} /> +{growPercent}%
                </IonBadge>
              </IonItem>
            ))}
          </IonList>
        )}

        {segment === 'videos' && (
          <IonList>
            {TRENDING_VIDEOS.map(({ name, author, previewImage }) => (
              <IonItem key={name}>
                <IonThumbnail slot="start">
                  <img src={previewImage} alt={name} />
                </IonThumbnail>
                <IonLabel>
                  <h2>{name}</h2>
                  <p
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '2px',
                    }}
                  >
                    <IonIcon icon={personOutline} /> {author}
                  </p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Feed;
