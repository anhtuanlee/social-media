import { getCookie } from 'cookies-next';

import { storageService } from '@/helper';

import * as httpRequest from '../utils/httpRequest';
import { global } from '@/types/global';

class AuthencationService {
  constructor() { }
  async signIn(data: global.TFormAuth) {
    const result = await httpRequest.post('/auth/register', {
      first_name: data.firstname,
      last_name: data.lastname,
      email: data.email,
      password: data.password,
      phone: data.phone,
      bithday: new Date(`${data.year}-${data.month}-${data.date}`),
      gender: data.gender,
    });
    return result;
  }

  async logIn(data: global.TFormAuth) {
    const result = await httpRequest.post('/auth/login', {
      phone: data.phone,
      mailphone: data.mailphone,
      password: data.password,
    });
    storageService.setItem('accessToken', result.accessToken);
    return result;
  }
  async getUserProfile() {
    const result = await httpRequest.get('/auth/profile');
    return result.data;
  }
  async refreshToken() {
    // call data profile every refresh, and if accessToken expred will call
    // refreshToken, after call profile again. If call refrehsToken Error,
    // because refreshToken expred, login again
    const result = await httpRequest.post('/auth/refreshToken');
    storageService.setItem('accessToken', result.data.accessToken);
    return result.data;
  }
  async logOut() {
    const refreshToken = getCookie('refreshToken');
    await httpRequest.post(
      'auth/logout',
      {},
      {
        headers: {
          refreshToken: `refreshToken=${refreshToken}`,
        },
      }
    );
  }
}
export const authenSevice = new AuthencationService();
