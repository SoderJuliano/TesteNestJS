import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Validator } from '../Utils/validator';

@Injectable()
export class Middleware implements NestMiddleware {
  private validator: Validator = new Validator();
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.get('Authorization');
    this.validator.print(`Validating token:  ${token}`);
    token === 'Bearer teste'
      ? next()
      : res.status(401).send('Token not matching!');
    return;
  }
}
