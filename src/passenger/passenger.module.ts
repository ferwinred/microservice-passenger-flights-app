import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassengerService } from './application/passenger.service';
import { PassengerController } from './infraestructure/passenger.controller';
import { Passenger } from './domain/entities/passenger.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Passenger])
  ],
  controllers: [PassengerController],
  providers: [PassengerService],
})
export class PassengerModule {}
