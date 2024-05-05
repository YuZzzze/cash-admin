import { request } from '@umijs/max';
export const incomeSeivece = {
  async getCashList() {
    return request('/api/income');
  },
  async addCash(params: any) {
    return request('/income/add', {
      method: 'POST',
      data: params,
    });
  },
  async deleteCash(params: any) {
    return request(`/api/income`, {
      method: 'DELETE',
    });
  },
  async updateCash(params: any) {
    return request(`/api/income`, {
      method: 'PUT',
      data: params,
    });
  },
};

export const expendSeivece = {
  async getCashList() {
    return await request('/api/expend');
  },
  async addCash(data: any) {
    return request('/api/expend', {
      method: 'POST',
      data,
    });
  },
  async deleteCash(id: number) {
    return request(`/api/expend/${id}`, {
      method: 'DELETE',
    });
  },
  async updateCash(id: any, data: any) {
    return request(`/api/expend/${id}`, {
      method: 'PUT',
      data,
    });
  },
};
