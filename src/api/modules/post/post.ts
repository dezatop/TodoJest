import { WEB_API_ROUTES } from 'api/api-routes';
import http from 'api/http';

export const post = {
  getPost() {
    return http.get(WEB_API_ROUTES.posts.posts);
  },
};
