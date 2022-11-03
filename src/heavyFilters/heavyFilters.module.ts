import { Module } from "@nestjs/common";
import { HeavyFiltersController } from "./heavyFilters.controller";
import { HeavyFiltersService } from "./heavyFilters.service";
import { HeavyFiltersModel } from "./heavyFilters.model"
import { HttpModule } from "@nestjs/axios"
import { TypeOrmModule } from "@nestjs/typeorm";
import { CreatedFiltersEntity } from "./entities/createdFilters";
import { OperatorsModule } from "src/operators/operators.module";
import { ValueModule } from "../value/value.module"
import { StateModule } from "src/state/state.module";

@Module({
    imports: [OperatorsModule, StateModule, ValueModule,
        TypeOrmModule.forFeature([CreatedFiltersEntity]),
        HttpModule],
    controllers: [HeavyFiltersController],
    providers: [HeavyFiltersService, HeavyFiltersModel]
})
export class HeavyFiltersModule {}