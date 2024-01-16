import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'create_at',
        type: 'timestamp',
    })
    createdAt: Date;

    @Column({
        name: 'update_at',
        type: 'timestamp',
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
        default: null
    })
    deletedAt: Date;

    @BeforeInsert()
  private setCreateDate(): void {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  public setUpdateDate(): void {
    this.updatedAt = new Date();
  }
}