import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePageDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  content?: string;

  @IsOptional()
  parentId?: string;
}
