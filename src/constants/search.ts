import {
  appsOutline,
  musicalNotesOutline,
  peopleOutline,
  playOutline,
  pricetagOutline,
  starOutline,
  timeOutline,
  trendingUpOutline,
} from 'ionicons/icons';

export type SearchCategory =
  | 'all'
  | 'videos'
  | 'creators'
  | 'hashtags'
  | 'audio';
export type SortOption = 'popular' | 'recent' | 'relevant';

export const SEARCH_CATEGORIES = [
  { value: 'all' as SearchCategory, label: 'All', icon: appsOutline },
  { value: 'videos' as SearchCategory, label: 'Videos', icon: playOutline },
  {
    value: 'creators' as SearchCategory,
    label: 'Creators',
    icon: peopleOutline,
  },
  {
    value: 'hashtags' as SearchCategory,
    label: 'Hashtags',
    icon: pricetagOutline,
  },
  {
    value: 'audio' as SearchCategory,
    label: 'Audio',
    icon: musicalNotesOutline,
  },
];

export const SORT_OPTIONS = [
  { value: 'popular' as SortOption, label: 'Popular', icon: trendingUpOutline },
  { value: 'recent' as SortOption, label: 'Recent', icon: timeOutline },
  { value: 'relevant' as SortOption, label: 'Relevant', icon: starOutline },
];

export interface SearchResult {
  id: string;
  type: Exclude<SearchCategory, 'all'>;
  title: string;
  subtitle: string;
  thumbnail?: string;
  count: number;
  createdAt: number;
}

export const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    id: '1',
    type: 'videos',
    title: 'Morning routine that changed my life',
    subtitle: '@wellnessguru · 2.4M views',
    thumbnail: 'https://picsum.photos/seed/s1/80/80',
    count: 2400000,
    createdAt: 1740000000,
  },
  {
    id: '2',
    type: 'videos',
    title: 'Trying every viral food combo',
    subtitle: '@foodievibes · 1.1M views',
    thumbnail: 'https://picsum.photos/seed/s2/80/80',
    count: 1100000,
    createdAt: 1741000000,
  },
  {
    id: '3',
    type: 'videos',
    title: 'Night city skateboarding',
    subtitle: '@skatelife · 880K views',
    thumbnail: 'https://picsum.photos/seed/s3/80/80',
    count: 880000,
    createdAt: 1742000000,
  },
  {
    id: '4',
    type: 'creators',
    title: '@wellnessguru',
    subtitle: 'Health & lifestyle · 3.2M followers',
    thumbnail: 'https://picsum.photos/seed/c1/80/80',
    count: 3200000,
    createdAt: 1738000000,
  },
  {
    id: '5',
    type: 'creators',
    title: '@foodievibes',
    subtitle: 'Food reviews · 1.5M followers',
    thumbnail: 'https://picsum.photos/seed/c2/80/80',
    count: 1500000,
    createdAt: 1739000000,
  },
  {
    id: '6',
    type: 'creators',
    title: '@fitquick',
    subtitle: 'Fitness · 940K followers',
    thumbnail: 'https://picsum.photos/seed/c3/80/80',
    count: 940000,
    createdAt: 1742500000,
  },
  {
    id: '7',
    type: 'hashtags',
    title: '#fyp',
    subtitle: '2.4M posts',
    count: 2400000,
    createdAt: 1730000000,
  },
  {
    id: '8',
    type: 'hashtags',
    title: '#viral',
    subtitle: '1.8M posts',
    count: 1800000,
    createdAt: 1731000000,
  },
  {
    id: '9',
    type: 'hashtags',
    title: '#fitness',
    subtitle: '540K posts',
    count: 540000,
    createdAt: 1742800000,
  },
  {
    id: '10',
    type: 'audio',
    title: 'Blinding Lights (Sped Up)',
    subtitle: 'The Weeknd · 620K videos',
    count: 620000,
    createdAt: 1740500000,
  },
  {
    id: '11',
    type: 'audio',
    title: 'Original Sound - Dance Mix',
    subtitle: '@djvibes · 390K videos',
    count: 390000,
    createdAt: 1742200000,
  },
  {
    id: '12',
    type: 'audio',
    title: 'Lofi Chill Beats',
    subtitle: 'ChillHop · 210K videos',
    count: 210000,
    createdAt: 1743000000,
  },
];
