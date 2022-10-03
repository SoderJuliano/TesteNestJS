import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { LojistaDto } from '../dto/lojistaDTO';
import { MinhaLojaDto } from 'src/dto/minhaLojaDTO';
import { LojistaService } from './lojista.service';
import { RespostaPadrao } from 'src/Utils/respostaPadrao';

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

  @Patch('/:lojistaId/minhaLoja')
  atualizarDadosMinhaLoja(
    @Param('lojistaId') lojistaId: string,
    @Body() request: MinhaLojaDto,
  ): Promise<RespostaPadrao> {
    return this.service.updateMinhaLoja(lojistaId, request);
  }
}
