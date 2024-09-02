import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentService {
    private readonly appointments=[]
    create(appointment){
        // save appointment into the database
        this.appointments.push(appointment)
        return {message:"Appointment created!",data:appointment}
    }
    findAll(){
        //fetch all appointment base on user from the database
        return this.appointments
    }
}
 