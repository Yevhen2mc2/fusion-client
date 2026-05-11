import { useState } from 'react';
import { usePixabayVideos } from './use-pixabay-videos.ts';
import type { SearchCategory, SortOption } from '../constants/search.ts';

export const useSearchFilters = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SearchCategory>('all');
  const [sort, setSort] = useState<SortOption>('popular');

  const { data, isLoading, isError, error } = usePixabayVideos({ q: query });

  const handleReset = () => {
    setQuery('');
    setCategory('all');
    setSort('popular');
  };

  return {
    query,
    setQuery,
    category,
    setCategory,
    sort,
    setSort,
    handleReset,
    results: data?.hits ?? [],
    isLoading: isLoading && query.length > 0,
    isError,
    error,
  };
};
