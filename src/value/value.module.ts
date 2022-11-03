import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Value } from "./entities/value";
import { ValueModel } from "./value.model";

@Module({
    imports: [TypeOrmModule.forFeature([Value])],
    providers: [ValueModel],
    exports: [ValueModel]
})
export class ValueModule {}