import axios from 'axios';

export const apiClient = axios.create({
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      // Placeholder for real auth refresh / logout
    }
    return Promise.reject(
      error instanceof Error ? error : new Error(String(error)),
    );
  },
);
