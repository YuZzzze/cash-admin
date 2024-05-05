import { request } from '@umijs/max';

export const fetchUserList = async () => {
  return request('/user/list', {
    method: 'GET',
  });
};

export const fetchUserInfo = async (params: any) => {
  return request('/user/get', {
    method: 'GET',
    params: params,
  });
};

export const deleteUser = async (params: any) => {
  return request('/user/delete', {
    method: 'POST',
    data: params,
  });
};

export const addUser = async (params: any) => {
  return request('/user/register', {
    method: 'POST',
    data: params,
  });
};

export const updateUser = async (params: any) => {
  return request('/user/update', {
    method: 'POST',
    data: params,
  });
};
