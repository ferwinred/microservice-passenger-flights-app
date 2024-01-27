import { Injectable } from '@nestjs/common';
import { PassengerDto } from '../infraestructure/dto/passenger.dto';
import { UpdatePassengerDto } from '../infraestructure/dto/update-passenger.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Passenger } from '../domain/entities/passenger.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PassengerService {

  constructor(
    @InjectRepository(Passenger) private readonly passengerRepository: Repository<Passenger>
  ){}

  async create(passengerDto: PassengerDto) {

    const passenger = this.passengerRepository.create(passengerDto);

    return await this.passengerRepository.save(passenger);

  }

  async findAll() {

    const passengers = await this.passengerRepository.find();

    return passengers;

  }

  async findOne(id: string) {

    const passenger = await this.passengerRepository.findOne({
      where: {
        id
      }
    });

    return passenger;

  }

  async update(id: string, updatePassengerDto: UpdatePassengerDto) {

    const passenger = await this.passengerRepository.preload({...updatePassengerDto});

    return await this.passengerRepository.save(passenger);
  }

  async remove(id: string) {

    const passenger = await this.passengerRepository.findOne({
      where: {
        id
      }
    });

    return await this.passengerRepository.softDelete(passenger);
  }
}
