import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PassengerService } from '../application/passenger.service';
import { PassengerDto } from './dto/passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';

@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern('createPassenger')
  async create(@Payload() passengerDto: PassengerDto) {
    return await this.passengerService.create(passengerDto);
  }

  @MessagePattern('findAllPassenger')
  async findAll() {
    return await this.passengerService.findAll();
  }

  @MessagePattern('findOnePassenger')
  async findOne(@Payload() id: string) {
    return await this.passengerService.findOne(id);
  }

  @MessagePattern('updatePassenger')
  async update(@Payload() updatePassengerDto: UpdatePassengerDto) {
    return await this.passengerService.update(updatePassengerDto.id, updatePassengerDto);
  }

  @MessagePattern('removePassenger')
  async remove(@Payload() id: string) {
    return await this.passengerService.remove(id);
  }
}
