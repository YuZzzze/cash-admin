const TOKEN = 'token';

export const getToken = (key = TOKEN) => {
  try {
    return JSON.parse(localStorage.getItem(key) as string);
  } catch (e) {
    console.log(e);
  }
  return null;
};

export function setToken(token: string, key = TOKEN) {
  if (token) {
    localStorage.setItem(key, JSON.stringify(token));
  } else {
    localStorage.removeItem(key);
  }
}
