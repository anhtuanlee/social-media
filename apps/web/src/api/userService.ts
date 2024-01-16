import * as httpRequest from '../utils/httpRequest';

class UserSevice {
  route: string;
  user: string;
  KEY_USER: string;
  KEY_FRIEND: string;
  KEY_FOLLOWER: string;
  KEY_FOLLOWING: string;

  constructor() {
    this.route = '/users';
    this.user = '';
    this.KEY_USER = '';
    this.KEY_FRIEND = '';
    this.KEY_FOLLOWER = '';
    this.KEY_FOLLOWING = '';
  }
  getKeyUser(username: string) {
    this.user = username;
    this.KEY_USER = `${this?.route}/${username}`;
    return this.KEY_USER;
  }
  getKeyFriendUser() {
    this.KEY_FRIEND = `${this?.route}/friend/${this?.user}`;
    return this.KEY_FRIEND;
  }
  getKeyFollower() {
    this.KEY_FOLLOWER = `${this?.route}/followers/${this.user}`;
    return this.KEY_FOLLOWER;
  }
  getKeyFollowing() {
    this.KEY_FOLLOWING = `${this?.route}/following/${this.user}`;
    return this.KEY_FOLLOWING;
  }
  async getUserInfo(path: string) {
    const result = await httpRequest.get(path);
    return result.data;
  }
  async getListFriend(path: string) {
    const result = await httpRequest.get(path);
    return result.data;
  }
  async getListFollower(path: string) {
    const result = await httpRequest.get(path);
    return result.data;
  }
  async getListFollowing(path: string) {
    const result = await httpRequest.get(path);
    return result.data;
  }
}

export const userService = new UserSevice();
