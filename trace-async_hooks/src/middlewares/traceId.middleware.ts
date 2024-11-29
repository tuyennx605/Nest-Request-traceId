import { Injectable, NestMiddleware } from '@nestjs/common';
import { asyncLocalStorage } from 'src/common/async-hooks';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TraceIdMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const traceId = uuidv4();
    req.traceId = traceId;

    asyncLocalStorage.run({ traceId }, () => {
      next();
    });
  }
}
