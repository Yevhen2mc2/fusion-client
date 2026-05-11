import {
  IonButton,
  IonCard,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSearchbar,
  IonSpinner,
  IonText,
  IonToolbar,
} from '@ionic/react';
import { AppHeader } from '../components/layout/app-header.tsx';
import { NoSearchResults } from '../components/search/no-search-results.tsx';
import { SEARCH_CATEGORIES, SORT_OPTIONS } from '../constants/search.ts';
import { useSearchFilters } from '../hooks/use-search-filters.ts';
import { formatCount } from '../utils/format.ts';

const Search = () => {
  const {
    query,
    setQuery,
    category,
    setCategory,
    sort,
    setSort,
    handleReset,
    results,
    isLoading,
  } = useSearchFilters();

  return (
    <IonPage>
      <AppHeader />
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonSearchbar
              className="ion-margin-top"
              value={query}
              onIonInput={(e) => setQuery(e.detail.value ?? '')}
              placeholder="Search..."
              debounce={300}
              animated
            />
          </IonToolbar>

          <IonToolbar>
            <div
              className="ion-padding-horizontal"
              style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '6px',
                paddingBlock: '6px',
                scrollbarWidth: 'none',
              }}
            >
              {SEARCH_CATEGORIES.map((c) => (
                <IonChip
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  color={category === c.value ? 'primary' : undefined}
                  outline={category !== c.value}
                  className="ion-no-margin"
                  style={{ flexShrink: 0, height: '32px' }}
                >
                  <IonIcon icon={c.icon} style={{ fontSize: '15px' }} />
                  <IonLabel style={{ fontSize: '13px' }}>{c.label}</IonLabel>
                </IonChip>
              ))}
              <IonButton
                fill="clear"
                size="small"
                onClick={handleReset}
                style={{
                  marginLeft: 'auto',
                  '--color': 'var(--ion-color-medium)',
                }}
              >
                Reset
              </IonButton>
            </div>
          </IonToolbar>

          <IonToolbar>
            <div
              className="ion-padding-horizontal"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              {SORT_OPTIONS.map((s) => (
                <IonChip
                  key={s.value}
                  onClick={() => setSort(s.value)}
                  color={sort === s.value ? 'secondary' : undefined}
                  outline={sort !== s.value}
                  className="ion-no-margin"
                  style={{ flexShrink: 0, height: '28px' }}
                >
                  <IonIcon icon={s.icon} style={{ fontSize: '13px' }} />
                  <IonLabel style={{ fontSize: '12px' }}>{s.label}</IonLabel>
                </IonChip>
              ))}
            </div>
          </IonToolbar>
        </IonHeader>

        {isLoading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '48px 0',
            }}
          >
            <IonSpinner name="dots" />
          </div>
        )}

        {!isLoading && query && results.length === 0 && (
          <NoSearchResults query={query} onReset={handleReset} />
        )}

        {!isLoading && results.length > 0 && (
          <div
            className="ion-padding"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}
          >
            {results.map((video) => (
              <IonCard key={video.id} className="ion-no-margin">
                <img
                  src={video.videos.tiny.thumbnail}
                  alt={video.name}
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    objectFit: 'cover',
                  }}
                />
                <div
                  style={{
                    padding: '8px 12px 12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <IonText
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      lineHeight: '1.3',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {video.name || video.tags.split(',')[0]}
                  </IonText>
                  <IonText color="medium" style={{ fontSize: '12px' }}>
                    {video.user} · {formatCount(video.views)} views
                  </IonText>
                </div>
              </IonCard>
            ))}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Search;
