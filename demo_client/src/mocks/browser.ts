import { setupWorker } from 'msw/browser';
import { delay, http, HttpResponse } from 'msw';

export const mocks = [
  http.get('/api/message', async () => {
    await delay(600);
    return HttpResponse.json({ message: 'Test message' });
  }),
];

const worker = setupWorker(...mocks);
worker.start({ onUnhandledRequest: 'bypass' });
