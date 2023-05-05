import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LojistaDTO } from '../dto/lojistaDto';
import { MinhaLojaDTO } from 'src/dto/minhaLojaDto';
import { LojistaService } from './lojista.service';
import { RespostaPadrao } from 'src/Utils/respostaPadrao';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Lojista')
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

  @Delete('/delete/:id')
  delete(@Param('id') id: string): Promise<RespostaPadrao> {
    return this.service.delete(id);
  }

  @ApiOperation({ summary: 'Atualizar dados minha loja' })
  @Patch('/:lojistaId/minhaLoja')
  atualizarDadosMinhaLoja(
    @Param('lojistaId') lojistaId: string,
    @Body() request: MinhaLojaDTO,
  ): Promise<RespostaPadrao> {
    return this.service.updateMinhaLoja(lojistaId, request);
  }

  @Get('/all/email')
  getAllEmails(): Promise<RespostaPadrao> {
    return this.service.getAllEmail();
  }
}
