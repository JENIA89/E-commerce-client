import { api } from 'api';

export const login = (dto: any) => api.post('/auth/register', dto);
