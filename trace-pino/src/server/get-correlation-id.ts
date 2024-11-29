import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const getCorrelationId = (request: Request) => {
  return uuidv4();
  return request.header('x-correlation-id');
};
