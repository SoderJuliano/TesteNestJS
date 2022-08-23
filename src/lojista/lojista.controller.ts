import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LojistaDto } from '../dto/lojista.dto';
import { LojistaService } from './lojista.service';

@Controller()
export class LojistaController {
  constructor(private readonly service: LojistaService) {}

  @Get('/lojistas')
  getAllLojistas(): Promise<LojistaDto[]> {
    return this.service.findAll();
  }

  @Get('/lojistas/:id')
  getById(@Param('id') id: string): Promise<LojistaDto> {
    return this.service.getById(Number(id));
  }

  @Post('/lojistas/create')
  save(@Body() lojista: LojistaDto): Promise<LojistaDto> {
    return this.service.create(lojista);
  }
}
