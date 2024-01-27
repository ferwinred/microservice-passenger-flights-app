import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dialect } from './enum';
import { Passenger } from '../../passenger/domain/entities/passenger.entity';

ConfigModule.forRoot({
	isGlobal: true,
})

export const CONFIG_DATABASE = () =>
	TypeOrmModule.forRoot({
		type: process.env.DIALECT as Dialect || 'mysql',
		host: process.env.DB_HOST,
		port: +process.env.DB_PORT,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		entities: [Passenger],
		synchronize: true,
	});