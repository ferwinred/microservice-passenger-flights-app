import { Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PassengerDto } from '../infraestructure/dto/passenger.dto';
import { UpdatePassengerDto } from '../infraestructure/dto/update-passenger.dto';
import { Passenger } from '../domain/entities/passenger.entity';
import { ClientProxyGlobal } from '../../common/infraestructure/proxy/client-proxy';
import { FlightMSG } from 'src/common/infraestructure/enum';

@Injectable()
export class PassengerService {

  constructor(
    @InjectRepository(Passenger) private readonly passengerRepository: Repository<Passenger>,
    private readonly clientProxy: ClientProxyGlobal
  ){}

  private readonly clientProxyFlights = this.clientProxy.clientProxyFlight();

  async create(passengerDto: PassengerDto) {

    
    const passenger = this.passengerRepository.create(passengerDto);
    
    
    const passengerSaved = await this.passengerRepository.save(passenger);
    
    this.clientProxyFlights.send(FlightMSG.CREATE, passengerDto);

    return passengerSaved;

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

    if (!passenger) throw new RpcException({ 
      status: 404, 
      message: `User with Id ${id} is not found`
    });

    return passenger;

  }

  async update(id: string, updatePassengerDto: UpdatePassengerDto) {

    
    const passenger = await this.passengerRepository.preload({...updatePassengerDto});
    
    if (!passenger) throw new RpcException({ 
      status: 404, 
      message: `User with Id ${id} is not found`
    });
    
    const passengerSaved = await this.passengerRepository.save(passenger);

    this.clientProxyFlights.send(FlightMSG.UPDATE, { id, body: updatePassengerDto });

    return passengerSaved;
  }

  async remove(id: string) {

    const passenger = await this.passengerRepository.findOne({
      where: {
        id
      }
    });

    if (!passenger) throw new RpcException({ 
      status: 404, 
      message: `User with Id ${id} is not found`
    });

    const passengerDeleted = await this.passengerRepository.softDelete(passenger);

    this.clientProxyFlights.send(FlightMSG.DELETE, id);

    return passengerDeleted;
  }
}
