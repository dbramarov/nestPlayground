import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from 'class-validator';


export class User {
    @ApiProperty({type: String})
    @IsNotEmpty()
    firstName: string;

    @ApiProperty({type: String})
    @IsNotEmpty()
    lastName: string;

    @ApiProperty({type: Number})
    @IsNotEmpty()
    age: number;

    @ApiProperty({type: String})
    @IsNotEmpty()
    @IsEmail()
    email: string;
}