import { Module } from "@nestjs/common";
import { HeavyFiltersController } from "./heavyFilters.controller";
import { HeavyFiltersService } from "./heavyFilters.service";
import { HeavyFiltersModel } from "./heavyFilters.model"
import { HttpModule } from "@nestjs/axios"
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreatedFiltersEntity } from "./entities/createdFilters";
import { OperatorsEntity } from "./entities/operatorsData";
import { StateDataEntity } from "./entities/stateData";
import { ValueDataEntity } from "./entities/valueData";
const Entities = [CreatedFiltersEntity, OperatorsEntity, StateDataEntity, ValueDataEntity]

@Module({
    imports: [
        TypeOrmModule.forFeature(Entities),
        HttpModule],
    controllers: [HeavyFiltersController],
    providers: [HeavyFiltersService, HeavyFiltersModel]
})
export class HeavyFiltersModule {}