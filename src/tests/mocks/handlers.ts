import { CHECK_SESSION_MOCK } from '@tests/mocks/checkSession/checkSessionMock.ts';
import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get(`${API_URL}/auth/session`, () => {
    return HttpResponse.json(CHECK_SESSION_MOCK, { status: 200 });
  }),
];
