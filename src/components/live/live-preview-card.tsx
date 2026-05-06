import { IonAvatar, IonIcon } from '@ionic/react';
import { eyeOutline } from 'ionicons/icons';
import { formatViewers } from '../../utils/format.ts';

export interface LiveStream {
  id: string;
  thumbnail: string;
  title: string;
  streamer: { name: string; username: string; avatar: string };
  viewerCount: number;
}

interface LivePreviewCardProps {
  stream: LiveStream;
  onClick?: () => void;
}

export const LivePreviewCard = ({ stream, onClick }: LivePreviewCardProps) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    style={{
      position: 'relative',
      aspectRatio: '9 / 16',
      borderRadius: 16,
      overflow: 'hidden',
      cursor: 'pointer',
      border: '1px solid rgba(255,255,255,0.1)',
    }}
  >
    {/* Thumbnail */}
    <img
      src={stream.thumbnail}
      alt={stream.title}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />

    {/* Gradient overlay */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%, rgba(0,0,0,0.4) 100%)',
      }}
    />

    {/* LIVE badge */}
    <div
      style={{
        position: 'absolute',
        top: 12,
        left: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: '#ef4444',
        borderRadius: 20,
        padding: '4px 10px',
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#fff',
          animation: 'live-pulse 1.5s ease-in-out infinite',
        }}
      />
      <span
        style={{
          color: '#fff',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        LIVE
      </span>
    </div>

    {/* Viewer count */}
    <div
      style={{
        position: 'absolute',
        top: 12,
        right: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        borderRadius: 20,
        padding: '4px 10px',
      }}
    >
      <IonIcon icon={eyeOutline} style={{ fontSize: 14, color: '#fff' }} />
      <span style={{ color: '#fff', fontSize: 13 }}>
        {formatViewers(stream.viewerCount)}
      </span>
    </div>

    {/* Bottom info */}
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 6,
        }}
      >
        <IonAvatar style={{ width: 36, height: 36, flexShrink: 0 }}>
          <img src={stream.streamer.avatar} alt={stream.streamer.name} />
        </IonAvatar>
        <div>
          <p
            style={{ margin: 0, color: '#fff', fontSize: 14, fontWeight: 600 }}
          >
            {stream.streamer.name}
          </p>
          <p
            style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 12 }}
          >
            {stream.streamer.username}
          </p>
        </div>
      </div>
      <p style={{ margin: 0, color: '#fff', fontSize: 13 }}>{stream.title}</p>
    </div>
  </div>
);
