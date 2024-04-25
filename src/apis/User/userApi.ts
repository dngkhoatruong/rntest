import axiosClient from '../axiosClient';

const userApi = {
  getUserDetail(userId: string) {
    return axiosClient.get('/profile', {
      params: {
        id: userId,
      },
    });
  },
};

export default userApi;
