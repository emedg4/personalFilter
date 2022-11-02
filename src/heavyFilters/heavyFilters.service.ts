import { Injectable, Logger } from "@nestjs/common";
import { CreateNewFilterDTO } from "./dto/createNewFilter";
import { HttpService } from "@nestjs/axios"
import { ConfigService } from "@nestjs/config";
import { HeavyFiltersModel } from "./heavyFilters.model";
import { FilterParameters } from "./dto/params";



@Injectable()
export class HeavyFiltersService {

    private logger: Logger;

    constructor(

        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
        private readonly heavyFiltersModel: HeavyFiltersModel,

    ){
        this.logger = new Logger(HeavyFiltersService.name)
        this.heavyFiltersModel.initializeDB();
    }

    async createNewFilter(body: CreateNewFilterDTO) {

        // const createFilter: Promise<CreatedFiltersEntity> = 
        this.heavyFiltersModel.createNewFilter(body);

        this.logger.log(`Logueados nuevos filtros para el usuario ${body.usuario}`);

        const filteredData = await this.getByHeavyFilters(body);

        return filteredData
 
    }

    async getByHeavyFilters(body: CreateNewFilterDTO){

        const response = await this.httpService.post(this.configService.get("app.urls.getHeavyFilter"),body);

        return response

    }

    async getFiltersByUser( user:string ) {

        const filters = await this.heavyFiltersModel.getFiltersByUser(user)

        this.logger.log(`Getting filters for user: ${user}`)

        return filters
        
    }

    async getAllParams() {

        const params:FilterParameters = await this.heavyFiltersModel.getAllParams();

        this.logger.log(`Returning filter parameters`);

        return params;
        
    }

}


