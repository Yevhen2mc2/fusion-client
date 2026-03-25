import { useState } from 'react';
import {
  MOCK_SEARCH_RESULTS,
  type SearchCategory,
  type SortOption,
} from '../constants/search.ts';

export const useSearchFilters = () => {
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

  return {
    query,
    setQuery,
    category,
    setCategory,
    sort,
    setSort,
    handleReset,
    results,
  };
};
