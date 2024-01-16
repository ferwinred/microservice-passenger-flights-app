import { Module } from '@nestjs/common';
import { PassengerService } from './application/passenger.service';
import { PassengerController } from './infraestructure/passenger.controller';

@Module({
  controllers: [PassengerController],
  providers: [PassengerService],
})
export class PassengerModule {}
