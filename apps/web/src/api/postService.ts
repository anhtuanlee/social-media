import axios from 'axios';
import { BareFetcher, PublicConfiguration } from 'swr/_internal';

import * as httpRequest from '../utils/httpRequest';
import { post } from '@/types/post';

class PostService {
  route: string;
  user: string;
  KEY_GET: string;
  KEY_CREATE: string;
  KEY_DELETE: string;
  KEY_UPDATE: string;

  constructor() {
    this.route = '/posts';
    this.user = '';
    this.KEY_GET = `${this.route}?`;
    this.KEY_CREATE = `${this.route}/create`;
    this.KEY_DELETE = `${this.route}/delete`;
    this.KEY_UPDATE = `${this.route}/update`;
  }
  getKeyNewFeed(pageIndex: number, previousPageData: post.TDataPost[]) {
    if (previousPageData && !previousPageData.length) return null; // reached the end4
    return `posts?page=${pageIndex}&limit=10`; // SWR key
  }
  async getPost(path: string): Promise<post.TDataPost[]> {
    const result = await httpRequest.get(path);
    return result.data;
  }
  async createPost(path: string, args: post.TDataPost, config: any) {
    const result = await httpRequest.post(path, args, config);
    return result;
  }

  async deletePost(path: string) {
    await httpRequest.remove(path);
  }
}

export const postService = new PostService();
