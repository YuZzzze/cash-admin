import { request } from '@umijs/max';
export const incomeSeivece = {
  async getCashList() {
    return request('/income/list');
  },
  async addCash(params: any) {
    return request('/income/add', {
      method: 'POST',
      data: params,
    });
  },
  async deleteCash(params: any) {
    return request('/income/list', {
      method: 'POST',
      data: params,
    });
  },
  async updateCash(params: any) {
    return request('/income/update', {
      method: 'POST',
      data: params,
    });
  },
  async getCash(params: any) {
    return request('/income/get', {
      method: 'GET',
      params: params,
    });
  },
};

export const expendSeivece = {
  async getCashList() {
    return await request('/expend/list');
  },
  async addCash(params: any) {
    return request('/expend/list', {
      method: 'POST',
      data: params,
    });
  },
  async deleteCash(params: any) {
    return request('/expend/delete', {
      method: 'POST',
      data: params,
    });
  },
  async updateCash(params: any) {
    return request('/expend/update', {
      method: 'POST',
      data: params,
    });
  },
  async getCash(params: any) {
    return request('/expend/get', {
      method: 'GET',
      params: params,
    });
  },
};
