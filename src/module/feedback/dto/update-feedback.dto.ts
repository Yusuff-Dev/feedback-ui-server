import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class UpdateFeedbackDto {
  @IsString()
  @IsOptional()
  readonly text?: string;

  @IsInt()
  @Min(1)
  @Max(10)
  @IsOptional()
  readonly rating?: number;
}
