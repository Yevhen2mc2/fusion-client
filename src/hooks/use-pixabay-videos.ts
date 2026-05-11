import { useQuery } from '@tanstack/react-query';
import { fetchVideos } from '../services/pixabay.ts';
import type {
  FetchVideosParams,
  FetchVideosResponse,
} from '../types/pixabay.ts';

export function usePixabayVideos(params: FetchVideosParams) {
  return useQuery<FetchVideosResponse>({
    queryKey: ['pixabay-videos', params],
    queryFn: () => fetchVideos(params),
    enabled: params.q.length > 0,
  });
}
