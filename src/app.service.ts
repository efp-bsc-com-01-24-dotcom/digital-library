import { Injectable } from '@nestjs/common';
import { get } from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'jesus loves you ♥ ';
  }

  getName(): string {
    return 'ephraim name';
  }
   
}
