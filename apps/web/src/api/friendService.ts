import * as httpRequest from '@Utils/httpRequest';
class FriendService {
  route: string;
  ADD: string;
  REJECT: string;
  ACCEPT: string;
  DELELE: string;
  self: string;
  reiceiver: string;

  constructor() {
    this.route = '/users/friend';
    this.ADD = `${this.route}/add`;
    this.REJECT = `${this.route}/reject`;
    this.ACCEPT = `${this.route}/accept`;
    this.DELELE = `${this.route}/delete`;
    this.self = '';
    this.reiceiver = '';
  }
  setSelfAndUser(self: string, reiceiver: string) {
    this.self = self;
    this.reiceiver = reiceiver;
  }

  async addFriendRequest(path: string) {
    const result = await httpRequest.post(path, {
      self: this.self,
      reiceiver: this.reiceiver,
    });
    return result;
  }

  async acceptFriendRequest(path: string) {
    const result = await httpRequest.post(path, {
      self: this.self,
      reiceiver: this.reiceiver,
    });
    return result;
  }
  async rejectFriendRequest(path: string) {
    const result = await httpRequest.post(path, {
      self: this.self,
      reiceiver: this.reiceiver,
    });
    return result;
  }
  async deleteFriend(path: string) {
    const result = await httpRequest.post(path, {
      self: this.self,
      reiceiver: this.reiceiver,
    });
    return result;
  }
}
export const friendService = new FriendService();
