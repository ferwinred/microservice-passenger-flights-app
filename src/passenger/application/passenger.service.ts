import { Injectable } from '@nestjs/common';
import { PassengerDto } from '../infraestructure/dto/passenger.dto';
import { UpdatePassengerDto } from '../infraestructure/dto/update-passenger.dto';

@Injectable()
export class PassengerService {
  create(passengerDto: PassengerDto) {
    return 'This action adds a new passenger';
  }

  findAll() {
    return `This action returns all passenger`;
  }

  findOne(id: string) {
    return `This action returns a #${id} passenger`;
  }

  update(id: string, updatePassengerDto: UpdatePassengerDto) {
    return `This action updates a #${id} passenger`;
  }

  remove(id: string) {
    return `This action removes a #${id} passenger`;
  }
}
