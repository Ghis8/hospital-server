import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppointmentModule } from './appointment/appointment.module';
import { UsersModule } from './users/users.module';
import {ConfigModule} from '@nestjs/config'
import {LoggerMiddleware} from './common/middleware/logger/logger.middleware'

@Module({
  imports: [
    AuthModule, 
    AppointmentModule, 
    UsersModule,
    ConfigModule.forRoot()
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('appointment')
  }
}
