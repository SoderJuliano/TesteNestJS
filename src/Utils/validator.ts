import { BadRequestException } from '@nestjs/common';
import { Log } from './print-enuns';

export class Validator {
  mongoose = require('mongoose');
  moment = require('moment');

  idIsValid(id: string) {
    const dataTime = this.moment().format('yyyy-MM-DD:hh:mm:ss');
    if (!this.mongoose.Types.ObjectId.isValid(id)) {
      console.log(
        `[${Log.WARN}][${dataTime}]: O id ${id} não é um mongo objectId válido`,
      );
      throw new BadRequestException('Id inválido');
    }
    console.log(
      `[${Log.INFO}][${dataTime}]: ObjectId é um id válidado. id: ${id}`,
    );
  }

  print(text: string) {
    console.log(
      `[${Log.INFO}][${this.moment().format('yyyy-MM-DD:hh:mm:ss')}]: ${text}`,
    );
  }
  printType(text: string, type: Log) {
    console.log(
      `[${type}][${this.moment().format('yyyy-MM-DD:hh:mm:ss')}]: ${text}`,
    );
  }
}
