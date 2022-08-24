import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.get('Authorization');
    console.log(`Request...Token is ${token}`);
    token === 'Bearer teste'
      ? next()
      : res.status(401).send('Token not matching!');
    return;
  }
}
