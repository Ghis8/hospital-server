import {
    IsString,
    IsNotEmpty,
    IsDateString,
    IsMilitaryTime
} from 'class-validator'

export class CreateAppointmentDTO{

    @IsString()
    @IsNotEmpty()
    readonly doctor:string 
    @IsNotEmpty()
    @IsString()
    readonly patient:string 
    @IsNotEmpty()
    @IsMilitaryTime()
    readonly time:Date  
    @IsNotEmpty()
    @IsDateString()
    readonly date:Date 

}