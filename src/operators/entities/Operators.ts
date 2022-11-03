import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

Entity({name: "Operators"})
export class OperatorsEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public operator: string;

}