import { PartialType } from '@nestjs/mapped-types';
import { CreatePassengerDto } from './passenger.dto';

export class UpdatePassengerDto extends PartialType(CreatePassengerDto) {
  id: number;
}
