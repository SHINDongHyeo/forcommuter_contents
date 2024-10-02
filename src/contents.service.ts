import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentsService {
  getHello(): string {
    return 'Hello World!';
  }
}
