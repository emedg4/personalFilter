import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StateDataEntity } from "./entities/state";
import { StateModel } from "./state.model";

@Module({
    imports: [TypeOrmModule.forFeature([StateDataEntity])],
    providers: [StateModel],
    exports: [StateModel]
})
export class StateModule {}