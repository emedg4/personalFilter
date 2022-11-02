import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateNewFilterDTO } from "./dto/createNewFilter";
import { NewFilter } from "./dto/NewFilter";
import { FilterParameters } from "./dto/params";
import { DATOS, OPERADORES, STATUS } from "./entities/constants/initDB";
import { CreatedFiltersEntity } from "./entities/createdFilters";
import { OperatorsEntity } from "./entities/operatorsData";
import { StateDataEntity } from "./entities/stateData";
import { ValueDataEntity } from "./entities/valueData";

@Injectable()
export class HeavyFiltersModel {
    private logger:Logger;
    constructor(
    @InjectRepository(CreatedFiltersEntity) private createdFiltersRepository: Repository<CreatedFiltersEntity>,
    @InjectRepository(OperatorsEntity) private operatorsRepository: Repository<OperatorsEntity>,
    @InjectRepository(StateDataEntity) private stateDataRepository: Repository<StateDataEntity>,
    @InjectRepository(ValueDataEntity) private valueDataRepository: Repository<ValueDataEntity>
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

        const state = await this.stateDataRepository.find()
        const value = await this.valueDataRepository.find();
        const operators = await this.operatorsRepository.find();

        const params: FilterParameters = {
            state: state,
            value: value,
            operators: operators
        }

        return params;
    }


    async initializeDB() {
        
        // const isEmpty = 2;
        // const condition = await this.stateDataRepository.find()

        // if(condition.length < isEmpty) {

            STATUS.forEach(( element, index, array ) => {
                const stateData: StateDataEntity = new StateDataEntity()
                stateData.state = element
                
                const stateDataOjb = this.stateDataRepository.create()
                const createdStateData = this.stateDataRepository.save(stateDataOjb)
            });
            
            OPERADORES.forEach(( element, index, array ) => {
                const operadores: OperatorsEntity = new OperatorsEntity()
                operadores.operator = element
                
                const operatorsOjb = this.operatorsRepository.create()
                const createdOperators = this.stateDataRepository.save(operatorsOjb)
            });
            
            DATOS.forEach(( element, index, array ) => {
                const valueData: ValueDataEntity = new ValueDataEntity()
                valueData.state = element.state;
                valueData.value = element.value;
                
                const stateDataOjb = this.valueDataRepository.create()
                const createdStateData = this.valueDataRepository.save(stateDataOjb)
            });

            this.logger.log("Created DB with default values")
            return
        }
        // else {
        //     this.logger.log("DB actually populated. It has not been modified")
        // }
            
            // return
    }
// }