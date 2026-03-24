import { useState } from 'react';
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
import {
  MOCK_SEARCH_RESULTS,
  SEARCH_CATEGORIES,
  SORT_OPTIONS,
  type SearchCategory,
  type SortOption,
} from '../constants/search.ts';
import { formatCount } from '../utils/format.ts';

const Search = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SearchCategory>('all');
  const [sort, setSort] = useState<SortOption>('popular');

  const handleReset = () => {
    setQuery('');
    setCategory('all');
    setSort('popular');
  };

  const results = query
    ? MOCK_SEARCH_RESULTS.filter(
        (r) => category === 'all' || r.type === category,
      )
        .filter((r) => r.title.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => {
          if (sort === 'popular') return b.count - a.count;
          if (sort === 'recent') return b.createdAt - a.createdAt;
          const aExact = a.title.toLowerCase().startsWith(query.toLowerCase())
            ? 1
            : 0;
          const bExact = b.title.toLowerCase().startsWith(query.toLowerCase())
            ? 1
            : 0;
          return bExact - aExact || b.count - a.count;
        })
    : [];

  return (
    <IonPage>
      <AppHeader />
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonSearchbar
              className={'ion-margin-top'}
              value={query}
              onIonInput={(e) => setQuery(e.detail.value ?? '')}
              placeholder="Search..."
              debounce={300}
              animated
            />
          </IonToolbar>

          <IonToolbar>
            <div
              style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '6px',
                padding: '6px 12px',
                scrollbarWidth: 'none',
              }}
            >
              {SEARCH_CATEGORIES.map((c) => (
                <IonChip
                  key={c.value}
                  onClick={() => setCategory(c.value)}
                  color={category === c.value ? 'primary' : undefined}
                  outline={category !== c.value}
                  style={{ flexShrink: 0, margin: 0, height: '32px' }}
                >
                  <IonIcon icon={c.icon} style={{ fontSize: '15px' }} />
                  <IonLabel style={{ fontSize: '13px' }}>{c.label}</IonLabel>
                </IonChip>
              ))}
            </div>
          </IonToolbar>

          <IonToolbar>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
              }}
            >
              {SORT_OPTIONS.map((s) => (
                <IonChip
                  key={s.value}
                  onClick={() => setSort(s.value)}
                  color={sort === s.value ? 'secondary' : undefined}
                  outline={sort !== s.value}
                  style={{ flexShrink: 0, margin: 0, height: '28px' }}
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
