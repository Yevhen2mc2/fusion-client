import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useAppStore as useAuth } from '../../stores/app-store.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonText,
  IonList,
} from '@ionic/react';

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string().min(1, 'Password is required'),
});

type Form = z.infer<typeof schema>;

const LoginForm = () => {
  const history = useHistory();
  const { login } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(schema),
    defaultValues: { email: 'demo@fusion.app', password: 'password123' },
  });

  const onSubmit = () => {
    login({
      firstName: 'Alex',
      lastName: 'Morgan',
      bio: 'Creative filmmaker & content creator',
      stats: { videos: 142, followers: 48200, following: 890, likes: 1200000 },
      analytics: {
        views30d: 2340000,
        engagementRate: 4.7,
        newFollowers: 3200,
        newFollowersGrowth: 12.3,
        avgWatchTimeSec: 45,
      },
    });
    history.push('/');
  };

  return (
    <form onSubmit={(e) => void handleSubmit(onSubmit)(e)}>
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <IonInput
                type="email"
                value={field.value}
                onIonInput={(e) => field.onChange(e.detail.value)}
                onIonBlur={field.onBlur}
              />
            )}
          />
        </IonItem>
        {errors.email && (
          <IonText color="danger">
            <p style={{ margin: '4px 16px' }}>{errors.email.message}</p>
          </IonText>
        )}

        <IonItem>
          <IonLabel position="stacked">Password</IonLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <IonInput
                type="password"
                value={field.value}
                onIonInput={(e) => field.onChange(e.detail.value)}
                onIonBlur={field.onBlur}
              />
            )}
          />
        </IonItem>
        {errors.password && (
          <IonText color="danger">
            <p style={{ margin: '4px 16px' }}>{errors.password.message}</p>
          </IonText>
        )}
      </IonList>

      <div style={{ padding: '16px' }}>
        <IonButton expand="block" type="submit">
          Sign In
        </IonButton>
      </div>
    </form>
  );
};

export default LoginForm;
