import { setupWorker } from 'msw/browser';
import { delay, http, HttpResponse } from 'msw';

const mocks = [
  http.get('/api/message', async () => {
    await delay(600);
    return HttpResponse.json({ message: 'Test message' });
  }),
];

export async function setupMocks() {
  const worker = setupWorker(...mocks);
  await worker.start({ onUnhandledRequest: 'bypass' });
}
