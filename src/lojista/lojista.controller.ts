import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { LojistaDTO } from '../dto/LojistaDTO';
import { MinhaLojaDTO } from 'src/dto/MinhaLojaDTO';
import { LojistaService } from './lojista.service';
import { RespostaPadrao } from 'src/Utils/respostaPadrao';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('/lojistas')
export class LojistaController {
  constructor(private readonly service: LojistaService) {}

  @Get()
  getAllLojistas(): Promise<LojistaDTO[]> {
    return this.service.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<RespostaPadrao> {
    return this.service.getById(id);
  }

  @Post('/create')
  save(@Body() lojista: LojistaDTO): Promise<LojistaDTO> {
    return this.service.create(lojista);
  }

  @Patch('/:lojistaId/minhaLoja')
  atualizarDadosMinhaLoja(
    @Param('lojistaId') lojistaId: string,
    @Body() request: MinhaLojaDTO,
  ): Promise<RespostaPadrao> {
    return this.service.updateMinhaLoja(lojistaId, request);
  }
}
