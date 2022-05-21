import { Entity, Column, PrimaryColumn, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Travel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  pilotName: string

  @Column()
  copilotName: string

  @Column()
  starshipName: string

  @Column()
  destinationName: string

  @Column()
  originName: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}