export const setLocalStorageToken = (data: string): void => {
  localStorage.setItem("token", JSON.stringify(data));
};

export const getLocalStorageToken = (): string =>
  JSON.parse(localStorage.getItem("token") as string);

export const removeLocalStorageToken = (): void => {
  localStorage.removeItem("token");
};
