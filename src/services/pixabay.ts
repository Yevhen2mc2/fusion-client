import { apiClient } from './axios.ts';
import type {
  FetchVideosParams,
  FetchVideosResponse,
} from '../types/pixabay.ts';

export async function fetchVideos(
  params: FetchVideosParams,
): Promise<FetchVideosResponse> {
  const { data } = await apiClient.get<FetchVideosResponse>(
    'https://pixabay.com/api/videos/',
    {
      params: {
        ...params,
        key: import.meta.env.VITE_PIXABAY_API_KEY,
      },
    },
  );
  return data;
}
