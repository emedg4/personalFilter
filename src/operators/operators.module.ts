import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OperatorsEntity } from "./entities/Operators";
import { OperatorsModel } from "./operators.model";

@Module({
    imports: [TypeOrmModule.forFeature([OperatorsEntity])],
    providers: [OperatorsModel],
    exports: [OperatorsModel]
})
export class OperatorsModule {}