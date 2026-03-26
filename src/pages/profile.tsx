import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonText,
  IonTextarea,
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
import { useAppStore } from '../stores/app-store.ts';
import { formatCount, formatWatchTime } from '../utils/format.ts';

const editSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  bio: z.string().max(150, 'Bio must be 150 characters or less'),
});

type EditForm = z.infer<typeof editSchema>;

const Profile = () => {
  const { user, updateUser } = useAppStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [present] = useIonToast();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditForm>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      bio: user?.bio ?? '',
    },
  });

  const onSubmit = (data: EditForm) => {
    updateUser(data);
    setModalOpen(false);
  };

  const openModal = () => {
    reset({
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      bio: user?.bio ?? '',
    });
    setModalOpen(true);
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
            <IonButton expand="block" style={{ flex: 1 }} onClick={openModal}>
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
          <IonHeader>
            <IonToolbar>
              <IonTitle>Edit Profile</IonTitle>
              <IonButton
                slot="start"
                fill="clear"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <form onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
              <IonList>
                <IonItem>
                  <IonLabel position="stacked">First Name</IonLabel>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <IonInput
                        value={field.value}
                        onIonInput={(e) => field.onChange(e.detail.value)}
                        onIonBlur={field.onBlur}
                      />
                    )}
                  />
                </IonItem>
                {errors.firstName && (
                  <IonText color="danger">
                    <p style={{ margin: '4px 16px' }}>
                      {errors.firstName.message}
                    </p>
                  </IonText>
                )}

                <IonItem>
                  <IonLabel position="stacked">Last Name</IonLabel>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <IonInput
                        value={field.value}
                        onIonInput={(e) => field.onChange(e.detail.value)}
                        onIonBlur={field.onBlur}
                      />
                    )}
                  />
                </IonItem>
                {errors.lastName && (
                  <IonText color="danger">
                    <p style={{ margin: '4px 16px' }}>
                      {errors.lastName.message}
                    </p>
                  </IonText>
                )}

                <IonItem>
                  <IonLabel position="stacked">Bio</IonLabel>
                  <Controller
                    name="bio"
                    control={control}
                    render={({ field }) => (
                      <IonTextarea
                        value={field.value}
                        maxlength={150}
                        rows={3}
                        onIonInput={(e) => field.onChange(e.detail.value)}
                        onIonBlur={field.onBlur}
                      />
                    )}
                  />
                </IonItem>
                {errors.bio && (
                  <IonText color="danger">
                    <p style={{ margin: '4px 16px' }}>{errors.bio.message}</p>
                  </IonText>
                )}
              </IonList>

              <div style={{ padding: '16px' }}>
                <IonButton expand="block" type="submit">
                  Save
                </IonButton>
              </div>
            </form>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
