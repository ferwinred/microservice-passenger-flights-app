import { Module } from '@nestjs/common';
import { PassengerModule } from './passenger/passenger.module';

@Module({
  imports: [PassengerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}