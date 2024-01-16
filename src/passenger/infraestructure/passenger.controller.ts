import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerService } from '../application/passenger.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';

@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern('createPassenger')
  create(@Payload() createPassengerDto: CreatePassengerDto) {
    return this.passengerService.create(createPassengerDto);
  }

  @MessagePattern('findAllPassenger')
  findAll() {
    return this.passengerService.findAll();
  }

  @MessagePattern('findOnePassenger')
  findOne(@Payload() id: number) {
    return this.passengerService.findOne(id);
  }

  @MessagePattern('updatePassenger')
  update(@Payload() updatePassengerDto: UpdatePassengerDto) {
    return this.passengerService.update(updatePassengerDto.id, updatePassengerDto);
  }

  @MessagePattern('removePassenger')
  remove(@Payload() id: number) {
    return this.passengerService.remove(id);
  }
}
