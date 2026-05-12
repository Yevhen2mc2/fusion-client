import { IonSpinner } from '@ionic/react';
import { usePixabayVideos } from '../../hooks/use-pixabay-videos.ts';
import type { PixabayVideo } from '../../types/pixabay.ts';

export function VideoPlayer() {
  const { data, isLoading, isError } = usePixabayVideos({
    q: 'nature',
    per_page: 20,
  });

  const hits = data?.hits ?? [];
  const video: PixabayVideo | null =
    hits.length > 0 ? hits[hits[0].id % hits.length] : null;

  if (isLoading) {
    return (
      <div className="ion-text-center ion-padding">
        <IonSpinner />
      </div>
    );
  }

  if (isError || !video) {
    return null;
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      src={video.videos.medium.url}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  );
}
