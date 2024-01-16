import * as httpRequest from '@Utils/httpRequest';
class FollowService {
  route: string;
  KEY_FOLLOW: string;
  KEY_UNFOllOW: string;
  self: string;
  reiceiver: string;
  constructor() {
    this.route = '/users';
    this.self = '';
    this.reiceiver = '';
    this.KEY_FOLLOW = `${this.route}/follow`;
    this.KEY_UNFOllOW = `${this.route}/unfollow`;
  }
  setUserAndReiceiver(self: string, reiceiver: string) {
    this.self = self;
    this.reiceiver = reiceiver;
  }
  async followUser(path: string) {
    try {
      const result = await httpRequest.post(path, {
        self: this.self,
        reiceiver: this.reiceiver,
      });
      return result;
    } catch (err) {
      console.error(err);
    }
  }
  async unfollowUser(path: string) {
    try {
      const result = await httpRequest.post(path, {
        self: this.self,
        reiceiver: this.reiceiver,
      });
      return result;
    } catch (err) {
      console.error(err);
    }
  }
}

export const followerService = new FollowService();
