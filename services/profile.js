import { api } from './api';

export default {
  getProfile() {
    return api.request({
      url: '/profile?dtacId=57509565d18aea5088bd8d2fb86a785ef866d589feb05119fd4d3b71fd2dbdd5',
      method: 'GET',
    });
  },
};
