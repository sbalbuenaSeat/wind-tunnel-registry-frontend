import { apiFetch } from '@services/utils/apiFetch';

export const checkSession = () => apiFetch('/auth/me');

export const loginWithGoogle = () => {
  window.location.href = `${API_URL}/auth/google`;
};

export const logout = () =>
  apiFetch('/auth/logout', {
    method: 'GET',
  });
