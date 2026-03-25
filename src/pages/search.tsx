import {
  IonBadge,
  IonButton,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonThumbnail,
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
        </IonHeader>

        {query && results.length === 0 ? (
          <NoSearchResults query={query} onReset={handleReset} />
        ) : (
          <IonList>
            {results.map((r) => (
              <IonItem key={r.id}>
                {r.thumbnail && (
                  <IonThumbnail slot="start">
                    <img src={r.thumbnail} alt={r.title} />
                  </IonThumbnail>
                )}
                <IonLabel>
                  <h2>{r.title}</h2>
                  <p>{r.subtitle}</p>
                </IonLabel>
                <IonBadge slot="end" color="medium">
                  {formatCount(r.count)}
                </IonBadge>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Search;
