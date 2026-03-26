import { useState } from 'react';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonToast,
} from '@ionic/react';
import { IonIcon } from '@ionic/react';
import {
  eyeOutline,
  trendingUpOutline,
  peopleOutline,
  timeOutline,
} from 'ionicons/icons';
import { AppHeader } from '../components/layout/app-header.tsx';
import { ProfileForm } from '../components/profile/profile-form.tsx';
import { useAppStore } from '../stores/app-store.ts';
import { formatCount, formatWatchTime } from '../utils/format.ts';

const Profile = () => {
  const { user, updateUser } = useAppStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [present] = useIonToast();

  const onSubmit = (data: {
    firstName: string;
    lastName: string;
    bio: string;
  }) => {
    updateUser(data);
    setModalOpen(false);
  };

  const handleShare = async () => {
    const url = `https://fusion.app/@${user?.firstName?.toLowerCase()}${user?.lastName?.toLowerCase()}`;
    const shareData = { title: 'Check out my Fusion profile', url };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
      await present({ message: 'Profile link copied!', duration: 2000 });
    }
  };

  if (!user) return null;

  return (
    <IonPage>
      <AppHeader />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '24px 16px',
          }}
        >
          {/* Avatar */}
          <IonAvatar style={{ width: 96, height: 96 }}>
            <img
              src={
                user.avatar ??
                'https://ionicframework.com/docs/img/demos/avatar.svg'
              }
              alt="avatar"
            />
          </IonAvatar>

          {/* Name */}
          <IonText style={{ marginTop: 12 }}>
            <h2 style={{ margin: 0, fontWeight: 600 }}>
              @{user.firstName.toLowerCase()}
              {user.lastName.toLowerCase()}
            </h2>
          </IonText>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
            {(
              [
                ['videos', user.stats.videos],
                ['followers', user.stats.followers],
                ['following', user.stats.following],
                ['likes', user.stats.likes],
              ] as const
            ).map(([label, value]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 700, fontSize: 18 }}>
                  {formatCount(value)}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    opacity: 0.7,
                    textTransform: 'capitalize',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              marginTop: 16,
              width: '100%',
              maxWidth: 320,
            }}
          >
            <IonButton
              expand="block"
              style={{ flex: 1 }}
              onClick={() => setModalOpen(true)}
            >
              Edit Profile
            </IonButton>
            <IonButton
              expand="block"
              fill="outline"
              style={{ flex: 1 }}
              onClick={() => void handleShare()}
            >
              Share
            </IonButton>
          </div>

          {/* Bio */}
          {user.bio && (
            <IonText
              style={{ marginTop: 16, textAlign: 'center', maxWidth: 320 }}
            >
              <p style={{ margin: 0 }}>{user.bio}</p>
            </IonText>
          )}

          {/* Analytics Overview */}
          {user.analytics && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginTop: 24,
                width: '100%',
                maxWidth: 320,
              }}
            >
              {(
                [
                  {
                    icon: eyeOutline,
                    label: 'Views (30d)',
                    value: formatCount(user.analytics.views30d),
                  },
                  {
                    icon: trendingUpOutline,
                    label: 'Engagement',
                    value: `${user.analytics.engagementRate}%`,
                  },
                  {
                    icon: peopleOutline,
                    label: 'New Followers',
                    value: `${formatCount(user.analytics.newFollowers)} (+${user.analytics.newFollowersGrowth}%)`,
                  },
                  {
                    icon: timeOutline,
                    label: 'Avg Watch Time',
                    value: formatWatchTime(user.analytics.avgWatchTimeSec),
                  },
                ] as const
              ).map((card) => (
                <div
                  key={card.label}
                  style={{
                    background: 'var(--ion-color-light)',
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <IonIcon
                    icon={card.icon}
                    style={{
                      fontSize: 22,
                      color: 'var(--ion-color-primary)',
                      marginBottom: 6,
                    }}
                  />
                  <div style={{ fontWeight: 700, fontSize: 16 }}>
                    {card.value}
                  </div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{card.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Edit Profile Modal */}
        <IonModal isOpen={modalOpen} onDidDismiss={() => setModalOpen(false)}>
          <ProfileForm
            user={user}
            onSubmit={onSubmit}
            onCancel={() => setModalOpen(false)}
          />
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
