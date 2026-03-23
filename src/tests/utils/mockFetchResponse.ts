import { server } from '@tests/mocks/server.ts';
import { HttpResponse, http } from 'msw';

type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export const mockFetchResponse = <T extends object>(
  url: string,
  response: T,
  status = 200,
  method: HttpMethod = 'get',
) => {
  const handler = http[method](url, () =>
    HttpResponse.json(response, { status }),
  );
  server.use(handler);
};
