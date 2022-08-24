import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LojistaDto } from '../dto/lojistaDTO';
import { LojistaService } from './lojista.service';

@Controller('/lojistas')
export class LojistaController {
  constructor(private readonly service: LojistaService) {}

  @Get()
  getAllLojistas(): Promise<LojistaDto[]> {
    return this.service.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<LojistaDto> {
    return this.service.getById(Number(id));
  }

  @Post('/create')
  save(@Body() lojista: LojistaDto): Promise<LojistaDto> {
    return this.service.create(lojista);
  }
}
