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
