import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

Entity({name: "CreatedFilters"})
export class CreatedFiltersEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public usuario: string;

    @Column()
    public estado: string;

    @Column()
    public valor: string;

    @Column()
    public operador: string;

}