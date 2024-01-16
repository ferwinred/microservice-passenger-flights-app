import { BaseEntity } from "src/common/domain/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity('passengers')
export class Passenger extends BaseEntity {
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    document: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    state: string;
    
}
