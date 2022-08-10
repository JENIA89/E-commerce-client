import { api } from 'api';

export const register = (dto: any) => api.post('/auth/register', dto);
export const login = (dto: any) => api.post('/auth/login', dto);
export const profile = () => api.get('/auth/profile');
