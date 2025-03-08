import { Body, Controller, Delete, Get, Param, Post, Put, Res} from '@nestjs/common';
import { Response } from 'express';

// Service
import { GenericService } from '@/services/generic.service';

@Controller()
export class GenericController<TModel, TSetter, TService extends GenericService<TModel, TSetter>> {
    constructor(protected readonly service: TService) {}

    @Get("all")
    async genericGetAll(@Res() res: Response): Promise<Response<TModel[]>> {
        return res.status(200).json(await this.service.getAll());
    }

    @Get(":id")
    async genericGetById(@Res() res: Response, @Param('id') id: string): Promise<Response<TModel|null|undefined>> {
        return res.status(200).json(await this.service.getById(Number(id)));
    }

    @Post("create")
    async genericCreate(@Res() res: Response, @Body() data: TSetter): Promise<Response<TModel|null|undefined>> {
        return res.status(201).json(await this.service.create(data));
    }

    @Put("update/:id")
    async genericUpdate(@Res() res: Response, @Param('id') id: string, @Body() data: TSetter): Promise<Response<TModel|null|undefined>> {
        return res.status(200).json(await this.service.update(Number(id), data));
    }

    @Delete("delete/:id")
    async genericDelete(@Res() res: Response, @Param('id') id: string): Promise<Response<TModel|null|undefined>> {
        return res.status(200).json(await this.service.delete(Number(id)));
    }
}