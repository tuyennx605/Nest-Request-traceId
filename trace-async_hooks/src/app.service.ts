import { Injectable } from '@nestjs/common';
import { MyLogger } from './common/logs/logger';

@Injectable()
export class AppService {
  logger: MyLogger
  constructor(){
    this.logger = new MyLogger();
  }
  getHello(req): string {
    this.logger.log( "9999999999");

    setTimeout(function() {
      new MyLogger().log( "1111111111111");
    }, 3000);

    return 'Hello World!';
  }
}
