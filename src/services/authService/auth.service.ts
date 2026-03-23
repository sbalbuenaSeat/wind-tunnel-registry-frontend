import { apiFetch } from '@services/utils/apiFetch';
import { type AuthSessionResponse } from './auth.service.types';

export const checkSession = (): Promise<AuthSessionResponse> =>
  apiFetch('/auth/session');

export const loginWithGoogle = () => {
  window.location.href = `${API_URL}/auth/google`;
};

export const logout = () =>
  apiFetch('/auth/logout', {
    method: 'GET',
  });
