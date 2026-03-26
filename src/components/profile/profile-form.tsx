import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import type { User } from '../../stores/app-store.ts';

const editSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  bio: z.string().max(150, 'Bio must be 150 characters or less'),
});

type EditForm = z.infer<typeof editSchema>;

interface ProfileFormProps {
  user: User;
  onSubmit: (data: EditForm) => void;
  onCancel: () => void;
}

export const ProfileForm = ({ user, onSubmit, onCancel }: ProfileFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditForm>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      bio: user.bio,
    },
  });

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Edit Profile</IonTitle>
          <IonButton slot="start" fill="clear" onClick={onCancel}>
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
                <p style={{ margin: '4px 16px' }}>{errors.firstName.message}</p>
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
                <p style={{ margin: '4px 16px' }}>{errors.lastName.message}</p>
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
    </>
  );
};
