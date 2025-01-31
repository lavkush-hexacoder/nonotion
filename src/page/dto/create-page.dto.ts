import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePageDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  userId: string;

  @IsOptional()
  content?: string;
}
