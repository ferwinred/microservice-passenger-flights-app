import { PartialType } from '@nestjs/mapped-types';
import { PassengerDto } from './passenger.dto';

export class UpdatePassengerDto extends PartialType(PassengerDto) {
  id: string;
}
