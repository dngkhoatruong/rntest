import axiosClient from '../axiosClient';

const authApi = {
  login(username: string, password: string) {
    return axiosClient.post('/login', {
      username,
      password,
    });
  },
};

export default authApi;
