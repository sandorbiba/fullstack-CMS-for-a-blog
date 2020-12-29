import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateBlogDto {
  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsString()
  readonly subtitle: string;

  @ApiProperty()
  @IsString()
  readonly content: string;

  @ApiProperty()
  @IsDate()
  readonly date: Date;

  @ApiProperty()
  @IsNotEmpty()
  readonly user: string;
}
