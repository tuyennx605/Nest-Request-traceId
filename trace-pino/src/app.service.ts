import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly logger: Logger) {}
  getHello() {
    this.logger.log('Any logging [1]');
    
    setTimeout(() => {
      this.anotherFunction();
    }, (5000));

    return { message: 'Hello' };
  }

  anotherFunction(): void {
    this.logger.log('Calling another function [1]');
  }

}
