export const setLocalStorageLoggedUser = (data: any): void => {
  localStorage.setItem('logged_user', JSON.stringify(data));
};

export const getLocalStorageLoggedUser = () => JSON.parse(localStorage.getItem('logged_user') || '{}');

export const removeLocalStorageLoggedUser = (): void => {
  localStorage.removeItem('logged_user');
};
