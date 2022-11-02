import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios"
import { ConfigService, ConfigModule } from "@nestjs/config";
import configuration from "src/configuration/configuration";
import { TypeOrmModule } from "@nestjs/typeorm";
import { HeavyFiltersModule } from "./heavyFilters/heavyFilters.module";

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        load: [configuration]
    }),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
          type: 'postgres',
          host: configService.get('db.host'),
          port: configService.get<number>('db.port'),
          username: configService.get('db.user'),
          password: configService.get('db.pass'),
          database: configService.get('db.database'),
          autoLoadEntities: true,
          synchronize: true
        })
    }),
    HeavyFiltersModule],
controllers: [],
providers: []
})
export class AppModule {}
