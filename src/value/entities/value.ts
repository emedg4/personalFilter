import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

Entity({name: "Value"})
export class Value {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public value: string;

    @Column()
    public state: string;

}