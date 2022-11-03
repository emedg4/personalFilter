import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OperatorsModel } from "src/operators/operators.model";
import { StateModel } from "src/state/state.model";
import { ValueModel } from "src/value/value.model";
import { Repository } from "typeorm";
import { CreateNewFilterDTO } from "./dto/createNewFilter";
import { NewFilter } from "./dto/NewFilter";
import { FilterParameters } from "./dto/params";
import { DATOS, OPERADORES, STATUS } from "./entities/constants/initDB";
import { CreatedFiltersEntity } from "./entities/createdFilters";

@Injectable()
export class HeavyFiltersModel {
    private logger:Logger;
    constructor( private readonly operatorsModel: OperatorsModel,
                 private readonly stateModel: StateModel,
                 private readonly valueModel: ValueModel,

    @InjectRepository(CreatedFiltersEntity) private createdFiltersRepository: Repository<CreatedFiltersEntity>,
    
    ){
        this.logger = new Logger(HeavyFiltersModel.name);
    }


    async createNewFilter( body:CreateNewFilterDTO ) {
        body.newFilters.map( async ( filters:NewFilter ): Promise<CreatedFiltersEntity> => {
            
            const createdFiltersObject: CreatedFiltersEntity = new CreatedFiltersEntity();
            createdFiltersObject.usuario = body.usuario;
            createdFiltersObject.estado = filters.state;
            createdFiltersObject.valor = filters.value;
            createdFiltersObject.operador = filters.operator;

            const createdFilters = await this.createdFiltersRepository.save(createdFiltersObject)

            return createdFilters;
        });
    }

    async getFiltersByUser( user:string ) {

        const userFilters = await this.createdFiltersRepository.findBy({usuario:user})
    }

    async getAllParams(): Promise<FilterParameters> {

        const state = await this.stateModel.getAllStates();
        const value = await this.valueModel.getAllValues();
        const operators = await this.operatorsModel.getOperators();

        const params: FilterParameters = {
            state: state,
            value: value,
            operators: operators
        }

        return params;
    }


    async initializeDB() {
        
        const isEmpty = 2;
        const condition = await this.stateModel.getAllStates()

        if(condition.length < isEmpty) {

            STATUS.forEach(( element, index, array ) => {
                this.stateModel.createState(element)

            });
            
            OPERADORES.forEach(( element, index, array ) => {
                this.operatorsModel.createOperators(element)
            });
            
            DATOS.forEach(( element, index, array ) => {
                this.valueModel.createValue(element);
            });

            this.logger.log("Created DB with default values")
            return
        }
        else {
            this.logger.log("DB actually populated. It has not been modified")
        }
            
            return
    }
}