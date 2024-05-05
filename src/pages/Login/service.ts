import { objectToFormData } from '@/utils/objectToFormData';
import { request } from '@umijs/max';

export const login = (params: any) => {
  const formData = objectToFormData(params);
  return request('/user/login', {
    method: 'post',
    data: formData,
    headers: { noToken: true },
  });
};
