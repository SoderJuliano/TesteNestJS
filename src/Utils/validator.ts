import { BadRequestException } from '@nestjs/common';

export class Validator {
  mongoose = require('mongoose');

  idIsValid(id: string) {
    if (!this.mongoose.Types.ObjectId.isValid(id)) {
      console.log(`O id ${id} não é um mongo objectId() válido`);
      throw new BadRequestException('Id inválido');
    }
    console.log(`Id validado com sucesso. id: ${id}`);
  }
}
