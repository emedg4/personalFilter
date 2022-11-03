import { Inject, Injectable } from "@nestjs/common";
import { Datos } from "src/heavyFilters/entities/constants/datos";
import { Repository } from "typeorm";
import { Value } from "./entities/value";

@Injectable()
export class ValueModel {
    constructor(

        @Inject(Value) private valueRepository: Repository<Value>,

    ){}

    public async getAllValues() {
        return this.valueRepository.find()
    }

    public async createValue(body: Datos) {
        const value: Value = new Value();
        value.state = body.state;
        value.value = body.value;

        const valueObj = this.valueRepository.create(value);
        const valueObjSave = await this.valueRepository.save(valueObj);

        return valueObjSave
    }
}