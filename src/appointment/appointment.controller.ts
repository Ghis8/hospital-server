import { 
    Controller,
    Get,
    Put,
    Delete,
    Post,
    Body 
} from '@nestjs/common';
import {AppointmentService} from './appointment.service'
import {CreateAppointmentDTO} from './dto/create-appointment-dto'

@Controller('appointment')
export class AppointmentController {
    constructor(private appointmentService:AppointmentService){}
    @Post()
    create(@Body() createAppointmentDTO:CreateAppointmentDTO){
        return this.appointmentService.create(createAppointmentDTO)
    }
    @Get()
    findAll(){
        return this.appointmentService.findAll()
    }
    @Get(':id')
    findOne(){
        return `fetch appointment based on id`
    }
    @Put(':id')
    updateOne(){
        return "update appointment based on id"
    }
    @Delete(':id')
    deleteOne(){
        return "Delete appointment based on Id"
    }
    
}
