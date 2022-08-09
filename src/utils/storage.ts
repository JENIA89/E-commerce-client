export const setLocalStorageToken = (data: any): void => {
  localStorage.setItem('token', JSON.stringify(data));
};

export const getLocalStorageToken = (): any =>
  JSON.parse(localStorage.getItem('token') || '');

export const removeLocalStorageToken = (): void => {
  localStorage.removeItem('token');
};
