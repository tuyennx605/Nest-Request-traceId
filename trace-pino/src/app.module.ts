import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import {getCorrelationId} from './server/get-correlation-id'
import { Request } from 'express';
// https://www.linkedin.com/pulse/nestjs-request-log-middleware-trace-id-cleuber-biango-w1rlf/
@Module({
  imports: [
    LoggerModule.forRootAsync({
      useFactory: async () => {
        return {
          pinoHttp: {
            autoLogging: false, 
            base: null,
            quietReqLogger: true,
            genReqId: (request: Request) => getCorrelationId(request), //set traceID
            level: 'debug', 
          },
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})

export class AppModule {}
