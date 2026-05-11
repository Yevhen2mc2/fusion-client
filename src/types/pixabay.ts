export interface PixabayVideoSize {
  url: string;
  width: number;
  height: number;
  size: number;
  thumbnail: string;
}

export interface PixabayVideo {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  duration: number;
  videos: {
    large: PixabayVideoSize;
    medium: PixabayVideoSize;
    small: PixabayVideoSize;
    tiny: PixabayVideoSize;
  };
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
  name: string;
}

export interface FetchVideosParams {
  q: string;
  page?: number;
  per_page?: number;
}

export interface FetchVideosResponse {
  total: number;
  totalHits: number;
  hits: PixabayVideo[];
}
