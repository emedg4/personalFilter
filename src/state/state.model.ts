import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { StateDataEntity } from "./entities/state";

@Injectable()
export class StateModel {
    constructor(
        @InjectRepository(StateDataEntity) private stateDataRepository: Repository<StateDataEntity>,
    ){}

    public async getAllStates() {
        return await this.stateDataRepository.find();
    }

    public async createState( state ) {
        const stateToCreate: StateDataEntity = new StateDataEntity();
        stateToCreate.state = state;
        const stateToCreateObj = this.stateDataRepository.create(stateToCreate);
        const createdState = await this.stateDataRepository.save(stateToCreateObj);

        return createdState;
        
    }
}