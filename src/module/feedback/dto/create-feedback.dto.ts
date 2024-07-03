import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateFeedbackDto {
  @IsString()
  readonly text: string;

  @IsInt()
  @Min(1)
  @Max(10)
  readonly rating: number;
}
