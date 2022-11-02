import { Body, Controller, Get, Logger, Post } from "@nestjs/common"
import { CreateNewFilterDTO } from "./dto/createNewFilter";
import { FilterParameters } from "./dto/params";
import { HeavyFiltersService } from "./heavyFilters.service";


@Controller()
export class HeavyFiltersController {
    private logger: Logger;
    constructor(
        
        private readonly heavyFiltersService: HeavyFiltersService

    ){
        this.logger = new Logger(HeavyFiltersController.name)
    }

    @Post("newFilter")
    async getInformationWithNewFilter( @Body() body: CreateNewFilterDTO) {
        try {
            const filteredInformation = await this.heavyFiltersService.createNewFilter(body);

            this.logger.log(`Se creo un nuevo filtro por el usuario ${body.usuario} y se trajo la informacion`)

            return filteredInformation;

        } catch (e) {
            this.logger.error(e);

            return
        }
    }

    @Post("getWithFilter")
    async getWithNewFilter( @Body() body: CreateNewFilterDTO) {
        try {
            const filteredInformation = await this.heavyFiltersService.getByHeavyFilters(body);

            this.logger.log(`Se trajo la informacion requerida`)

            return filteredInformation;

        } catch (e) {
            this.logger.error(e);

            return
        }
    }

    @Get("params")
    async getAllParams(){
        try {
            const params:FilterParameters = await this.heavyFiltersService.getAllParams();

            this.logger.log(`Se pidieron todosl los parametros`);

            return params;

        } catch (e) {
            this.logger.error(e);

            return;
        }

    }
    
}