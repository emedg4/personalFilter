import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

Entity({name: "ValueData"})
export class ValueDataEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public value: string;

    @Column()
    public state: string;

}