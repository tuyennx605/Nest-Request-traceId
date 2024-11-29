import { AsyncLocalStorage } from 'async_hooks';

export const asyncLocalStorage = new AsyncLocalStorage();

export function withTraceId(traceId: string, callback: () => void) {
  asyncLocalStorage.run({ traceId }, callback);
}

export function getTraceId(): string {
  const store: any = asyncLocalStorage.getStore();
  return store?.traceId || 'no-trace-id';
}
