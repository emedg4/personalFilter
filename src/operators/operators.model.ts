import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Operator } from "rxjs";
import { Repository } from "typeorm";
import { OperatorsEntity } from "./entities/Operators";

@Injectable()
export class OperatorsModel {

    constructor(
        @InjectRepository(OperatorsEntity) private operatorsRepository: Repository<OperatorsEntity>
    ){ }

    public async getOperators(){
        return await this.operatorsRepository.find()
    }

    public async createOperators(operator: string){
        const operators: OperatorsEntity = new OperatorsEntity()
        operators.operator = operator

        const operatorsOjb = this.operatorsRepository.create();
        const createdOperators = await this.operatorsRepository.save(operatorsOjb);

        return createdOperators;


    }

}
