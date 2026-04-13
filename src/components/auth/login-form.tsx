import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useAppStore as useAuth } from '../../stores/app-store.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { IonInput, IonButton, IonCard, IonCardContent } from '@ionic/react';

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
      <IonCard>
        <IonCardContent className="ion-padding">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <IonInput
                fill="outline"
                label="Email"
                labelPlacement="floating"
                type="email"
                value={field.value}
                onIonInput={(e) => field.onChange(e.detail.value)}
                onIonBlur={field.onBlur}
                errorText={errors.email?.message}
                className={errors.email ? 'ion-invalid ion-touched' : ''}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <IonInput
                fill="outline"
                label="Password"
                labelPlacement="floating"
                type="password"
                value={field.value}
                onIonInput={(e) => field.onChange(e.detail.value)}
                onIonBlur={field.onBlur}
                errorText={errors.password?.message}
                className={`ion-margin-top${errors.password ? ' ion-invalid ion-touched' : ''}`}
              />
            )}
          />
        </IonCardContent>
      </IonCard>

      <div className="ion-padding">
        <IonButton expand="block" type="submit">
          Sign In
        </IonButton>
      </div>
    </form>
  );
};

export default LoginForm;
