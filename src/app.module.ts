import { Module } from '@nestjs/common';
import { PassengerModule } from './passenger/passenger.module';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_DATABASE } from './common/infraestructure/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    CONFIG_DATABASE(),
    PassengerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
