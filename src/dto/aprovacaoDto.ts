import { ApiProperty } from "@nestjs/swagger";

export class AprovacaoDTO {
  @ApiProperty()
  status: string;
  
  @ApiProperty()
  data: Date;
}
