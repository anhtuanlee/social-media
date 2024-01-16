import { comment } from '@/types/comment';
import * as httpRequest from '@Utils/httpRequest';
class CommentService {
  route: string;
  KEY_CREATE: string;
  KEY_DELETE: string;
  KEY_UPDATE: string;
  KEY_GET: string;
  constructor() {
    this.route = '/comments';
    this.KEY_CREATE = `${this.route}/create`;
    this.KEY_DELETE = `${this.route}/delete`;
    this.KEY_UPDATE = `${this.route}/update`;
    this.KEY_GET = `${this.route}?`;
  }

  async createComment(path: string, args: comment.TDataPost) {
    const result = await httpRequest.post(path, JSON.stringify(args));
    return result;
  }
}

export const commentService = new CommentService();
