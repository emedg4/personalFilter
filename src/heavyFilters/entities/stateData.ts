import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

Entity({name: "StateData"})
export class StateDataEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public state: string;
}