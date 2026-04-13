import {
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import {
  cloudUploadOutline,
  cutOutline,
  documentTextOutline,
  sparklesOutline,
} from 'ionicons/icons';
import { AppHeader } from '../components/layout/app-header.tsx';

const modes = [
  {
    icon: cutOutline,
    gradient: 'linear-gradient(135deg, #a855f7, #ec4899)',
    title: 'Remix Mode',
    subtitle: 'Auto Viral Remix Tool',
    description: 'Turn 1 long video into multiple viral clips automatically',
    tags: [
      'AI highlight detection',
      'Auto subtitles & B-roll',
      '3-10 clips per video',
    ],
  },
  {
    icon: documentTextOutline,
    gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    title: 'Story Mode',
    subtitle: 'Text → Reel Generator',
    description: 'Write a story and AI generates a complete video reel',
    tags: ['Script generation', 'AI voiceover', 'Auto B-roll matching'],
  },
  {
    icon: cloudUploadOutline,
    gradient: 'linear-gradient(135deg, #f97316, #eab308)',
    title: 'Upload Mode',
    subtitle: 'Traditional Video Upload',
    description: 'Upload a short video and enhance it with AI tools',
    tags: ['Auto-crop to 9:16', 'Smart subtitles', 'Quick optimize'],
  },
];

const Create = () => (
  <IonPage>
    <AppHeader />
    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Create</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div className="ion-padding" style={{ maxWidth: 600, margin: '0 auto' }}>
        {/* Hero */}
        <div className="ion-text-center ion-padding-bottom">
          <div
            className="ion-justify-content-center"
            style={{ display: 'flex', marginBottom: 12 }}
          >
            <IonChip color="secondary" style={{ pointerEvents: 'none' }}>
              <IonIcon icon={sparklesOutline} />
              <IonLabel>AI-Powered Creation</IonLabel>
            </IonChip>
          </div>
          <h2>Create Your Content</h2>
          <p style={{ opacity: 0.6 }}>
            Choose how you want to create your next viral video
          </p>
        </div>

        {/* Mode cards */}
        {modes.map((mode) => (
          <IonCard key={mode.title} button className="ion-margin-bottom">
            <IonCardContent>
              <div
                style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
              >
                {/* Gradient icon */}
                <div
                  style={{
                    background: mode.gradient,
                    borderRadius: 12,
                    padding: 12,
                    flexShrink: 0,
                    display: 'flex',
                  }}
                >
                  <IonIcon
                    icon={mode.icon}
                    style={{ fontSize: 24, color: '#fff' }}
                  />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <h3>{mode.title}</h3>
                  <p
                    style={{ color: 'var(--ion-color-primary)', fontSize: 13 }}
                  >
                    {mode.subtitle}
                  </p>
                  <p style={{ opacity: 0.9, fontSize: 13 }}>
                    {mode.description}
                  </p>

                  {/* Feature tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {mode.tags.map((tag) => (
                      <IonChip
                        key={tag}
                        outline
                        className="ion-no-margin"
                        style={{ pointerEvents: 'none' }}
                      >
                        <IonLabel style={{ fontSize: 11 }}>{tag}</IonLabel>
                      </IonChip>
                    ))}
                  </div>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Pro Tips */}
        <IonCard>
          <IonCardContent>
            <p style={{ fontWeight: 700 }}>💡 Pro Tips</p>
            <p style={{ opacity: 0.8 }}>
              • Remix Mode works best with 10+ minute videos
            </p>
            <p style={{ opacity: 0.8 }}>
              • Story Mode perfect for repurposing blog posts
            </p>
            <p style={{ opacity: 0.8 }}>
              • All modes lead to the same powerful AI Video Builder
            </p>
          </IonCardContent>
        </IonCard>
      </div>
    </IonContent>
  </IonPage>
);

export default Create;
